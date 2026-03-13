<?php namespace ProcessWire;

/**
 * Ally (a11y)
 *
 * Self-hosted accessibility widget for ProcessWire powered by Sienna (MIT).
 * Ships the Sienna JS locally — no external CDN dependency at runtime.
 *
 * Sienna: https://github.com/bennyluk/Sienna-Accessibility-Widget
 *
 * Widget is configured via data-asw-* attributes on the <script> tag:
 *   data-asw-lang      — BCP47 language code
 *   data-asw-position  — bottom-left | bottom-right | top-left | top-right | center-left | center-right | bottom-center | top-center
 *   data-asw-offset    — "x,y" pixels
 *   data-asw-size      — button size in px (default 58)
 *   Accent color       — injected via inline <style> override (no Sienna API for this)
 *
 * @copyright 2025
 * @license MIT
 */
class Ally extends WireData implements Module, ConfigurableModule {

	const SIENNA_VERSION = '2.0.1-master';

	public static function getModuleInfo(): array {
		return [
			'title'    => 'Ally (a11y)',
			'summary'  => 'Self-hosted accessibility widget powered by Sienna (MIT). Adds font, contrast, language, and navigation tools to any page. No external CDN — the JS bundle is served from your own server.',
			'version'  => '1.0.0',
			'author'   => 'Maxim Alex',
			'href'     => 'https://github.com/mxmsmnv/Ally',
			'singular' => true,
			'autoload' => true,
			'icon'     => 'universal-access',
		];
	}

	public static function getSupportedLanguages(): array {
		return [
			'am' => 'አማርኛ (Amharic)', 'ar' => 'العربية (Arabic)',
			'bg' => 'български (Bulgarian)', 'bn' => 'বাংলা (Bengali)',
			'ca' => 'Català (Catalan)', 'cs' => 'čeština (Czech)',
			'da' => 'Danish (Denmark)', 'de' => 'Deutsch (German)',
			'el' => 'Ελληνικά (Greek)', 'en' => 'English',
			'es' => 'Español (Spanish)', 'fa' => 'فارسی (Persian)',
			'fi' => 'suomi (Finnish)', 'fil' => 'Tagalog (Filipino)',
			'fr' => 'Français (French)', 'he' => 'עברית (Hebrew)',
			'hi' => 'हिन्दी (Hindi)', 'hr' => 'Hrvatski (Croatian)',
			'hu' => 'Magyar (Hungarian)', 'id' => 'Bahasa Indonesia',
			'it' => 'Italiano (Italian)', 'ja' => '日本語 (Japanese)',
			'ka' => 'ქართული (Georgian)', 'kn' => 'ಕನ್ನಡ (Kannada)',
			'ko' => '한국어 (Korean)', 'ku' => 'Kurdî (Kurdish)',
			'lb' => 'Lëtzebuergesch', 'ml' => 'മലയാളം (Malayalam)',
			'mn' => 'Монгол (Mongolian)', 'ms' => 'Bahasa Malaysia',
			'my' => 'မြန်မာ (Burmese)', 'nl' => 'Nederlands (Dutch)',
			'no' => 'Norsk (Norwegian)', 'pa' => 'ਪੰਜਾਬੀ (Punjabi)',
			'pl' => 'Polski (Polish)', 'pt' => 'Português (Portuguese)',
			'ro' => 'Română (Romanian)', 'ru' => 'Русский (Russian)',
			'si' => 'Slovenščina (Slovene)', 'sk' => 'slovenčina (Slovak)',
			'sl' => 'slovenščina (Slovenian)', 'sr' => 'Srpski (Serbian)',
			'sr-SP' => 'Српски (Serbian Cyrillic)', 'sv' => 'Svenska (Swedish)',
			'sw' => 'Kiswahili (Swahili)', 'ta' => 'தமிழ் (Tamil)',
			'te' => 'తెలుగు (Telugu)', 'th' => 'ไทย (Thai)',
			'tr' => 'Türkçe (Turkish)', 'ur' => 'اردو (Urdu)',
			'vi' => 'Tiếng Việt (Vietnamese)',
			'zh-Hans' => '简体中文 (Simplified Chinese)',
			'zh-Hant' => '繁體中文 (Traditional Chinese)',
		];
	}

	public static function getDefaultData(): array {
		return [
			'enabled'         => 1,
			'position'        => 'bottom-left',
			'offset_x'        => 20,
			'offset_y'        => 20,
			'size'            => 58,
			'enable_color'    => 0,
			'color'           => '#0048ff',
			'language'        => 'auto',
			'skip_admin'      => 1,
			'skip_lighthouse' => 1,
		];
	}

	public function __construct() {
		parent::__construct();
		$this->setArray(self::getDefaultData());
	}

	public function init(): void {
		$this->addHookAfter('Page::render', $this, 'injectWidget');
	}

	// -------------------------------------------------------------------------

	public function ___injectWidget(HookEvent $event): void {
		if(!$this->enabled) return;
		$page = $event->object;
		if($this->skip_admin && $page->template == 'admin') return;
		if($this->skip_lighthouse) {
			$ua = $_SERVER['HTTP_USER_AGENT'] ?? '';
			if(strpos($ua, 'Chrome-Lighthouse') !== false) return;
		}
		$html = $event->return;
		if(!$html || strpos($html, '</body>') === false) return;

		$lang = $this->resolveLanguage();

		// Inject lang attr into <html> if missing and we have an explicit code
		if($lang !== 'auto' && preg_match('/<html([^>]*)>/i', $html, $m)) {
			if(strpos($m[1], 'lang=') === false) {
				$html = str_replace($m[0], '<html' . $m[1] . ' lang="' . $lang . '">', $html);
			}
		}

		$event->return = str_replace('</body>', $this->buildScriptTag($lang) . '</body>', $html);
	}

	protected function resolveLanguage(): string {
		if($this->language && $this->language !== 'auto') return $this->language;

		if($this->wire('languages')) {
			$user = $this->wire('user');
			if($user && $user->language) {
				$name      = $user->language->name;
				$supported = self::getSupportedLanguages();
				if($name === 'default') return 'en';
				if(isset($supported[$name])) return $name;
				$short = strtolower(substr($name, 0, 2));
				if(isset($supported[$short])) return $short;
			}
		}

		return 'auto';
	}

	protected function buildScriptTag(string $lang): string {
		$url    = $this->wire('config')->urls->siteModules . 'Ally/vendor/sienna-accessibility.umd.js';
		$pos    = $this->position ?: 'bottom-left';
		$ox     = (int)($this->offset_x ?: 20);
		$oy     = (int)($this->offset_y ?: 20);
		$size   = (int)($this->size ?: 58);

		$attrs  = 'src="' . htmlspecialchars($url, ENT_QUOTES) . '"'
			. ' data-asw-position="' . htmlspecialchars($pos, ENT_QUOTES) . '"'
			. ' data-asw-offset="' . $ox . ',' . $oy . '"'
			. ' data-asw-size="' . $size . '"';

		if($lang !== 'auto') {
			$attrs .= ' data-asw-lang="' . htmlspecialchars($lang, ENT_QUOTES) . '"';
		}

		// Accent color — passed via data-asw-color; bundle applies via setProperty on the button element
		if($this->enable_color && $this->color) {
			$attrs .= ' data-asw-color="' . htmlspecialchars($this->color, ENT_QUOTES) . '"';
		}

		return "\n<script {$attrs}></script>\n";
	}

	public function vendorScriptPath(): string {
		return $this->wire('config')->paths->siteModules . 'Ally/vendor/sienna-accessibility.umd.js';
	}

	public function vendorScriptExists(): bool {
		return file_exists($this->vendorScriptPath());
	}

	// -------------------------------------------------------------------------
	// Module config UI
	// -------------------------------------------------------------------------

	public static function getModuleConfigInputfields(array $data): InputfieldWrapper {
		$data    = array_merge(self::getDefaultData(), $data);
		$modules = wire('modules');
		$module  = $modules->get('Ally');
		$f       = $modules->get('InputfieldWrapper');

		// Script status
		$exists = $module->vendorScriptExists();
		$path   = $module->vendorScriptPath();
		$color  = $exists ? '#2ecc71' : '#e74c3c';
		$icon   = $exists ? '&#10003;' : '&#9888;';
		$msg    = $exists
			? 'Sienna v' . self::SIENNA_VERSION . ' ready — <code>' . $path . '</code>'
			: 'Script not found at <code>' . $path . '</code> — widget will not load until the file is present!';

		$sf = $modules->get('InputfieldMarkup');
		$sf->label = 'Vendor Script Status';
		$sf->icon  = 'file-code-o';
		$sf->value = "<p style='color:{$color}'><strong>{$icon} {$msg}</strong></p>"
			. "<p class='notes'>The JS bundle is built from Sienna source and served from your own server. "
			. "No external CDN calls at runtime. To update, rebuild or replace <code>vendor/sienna-accessibility.umd.js</code>.</p>";
		$f->add($sf);

		// Enabled toggle
		$field = $modules->get('InputfieldCheckbox');
		$field->name   = 'enabled';
		$field->label  = 'Enabled';
		$field->label2 = 'Inject widget on frontend pages';
		$field->checked((bool)$data['enabled']);
		$f->add($field);

		// Widget settings
		$fs = $modules->get('InputfieldFieldset');
		$fs->label = 'Widget Settings';
		$fs->icon  = 'cog';

		$field = $modules->get('InputfieldSelect');
		$field->name  = 'position';
		$field->label = 'Position';
		foreach([
			'bottom-left' => 'Bottom Left', 'bottom-right'  => 'Bottom Right',
			'bottom-center'=> 'Bottom Center', 'top-left'    => 'Top Left',
			'top-right'   => 'Top Right',  'top-center'     => 'Top Center',
			'center-left' => 'Center Left','center-right'   => 'Center Right',
		] as $v => $l) $field->addOption($v, $l);
		$field->value = $data['position'];
		$field->columnWidth = 34;
		$fs->add($field);

		$field = $modules->get('InputfieldInteger');
		$field->name = 'offset_x'; $field->label = 'Offset X (px)';
		$field->value = (int)$data['offset_x'] ?: 20; $field->min = 0;
		$field->columnWidth = 22; $fs->add($field);

		$field = $modules->get('InputfieldInteger');
		$field->name = 'offset_y'; $field->label = 'Offset Y (px)';
		$field->value = (int)$data['offset_y'] ?: 20; $field->min = 0;
		$field->columnWidth = 22; $fs->add($field);

		$field = $modules->get('InputfieldInteger');
		$field->name = 'size'; $field->label = 'Button Size (px)';
		$field->value = (int)$data['size'] ?: 58;
		$field->min = 30; $field->max = 120;
		$field->columnWidth = 22; $fs->add($field);

		$field = $modules->get('InputfieldCheckbox');
		$field->name   = 'enable_color';
		$field->label  = 'Custom Accent Color';
		$field->label2 = 'Override default Sienna blue (#0048ff)';
		$field->checked((bool)$data['enable_color']);
		$field->columnWidth = 30; $fs->add($field);

		$field = $modules->get('InputfieldText');
		$field->name  = 'color'; $field->label = 'Color';
		$field->value = $data['color'] ?: '#0048ff';
		$field->attr('type', 'color');
		$field->attr('style', 'width:80px;height:40px;padding:2px;cursor:pointer;');
		$field->showIf = 'enable_color=1';
		$field->columnWidth = 70; $fs->add($field);
		$f->add($fs);

		// Language
		$fl = $modules->get('InputfieldFieldset');
		$fl->label = 'Language';
		$fl->icon  = 'language';

		$field = $modules->get('InputfieldSelect');
		$field->name  = 'language';
		$field->label = 'Widget Language';
		$field->notes = "Auto = Sienna detects from html[lang] or browser settings.\n"
			. "ProcessWire multi-language: module maps \$user->language->name to a locale code automatically.";
		$field->addOption('auto', '— Auto (detect from HTML / browser) —');
		foreach(self::getSupportedLanguages() as $code => $label) {
			$field->addOption($code, $label . ' [' . $code . ']');
		}
		$field->value = $data['language'] ?: 'auto';
		$fl->add($field);
		$f->add($fl);

		// Behavior
		$fb = $modules->get('InputfieldFieldset');
		$fb->label = 'Behavior'; $fb->icon = 'sliders';

		$field = $modules->get('InputfieldCheckbox');
		$field->name = 'skip_admin'; $field->label = 'Skip Admin Pages';
		$field->label2 = 'Do not inject on admin template pages';
		$field->checked((bool)$data['skip_admin']); $field->columnWidth = 50; $fb->add($field);

		$field = $modules->get('InputfieldCheckbox');
		$field->name = 'skip_lighthouse'; $field->label = 'Skip Lighthouse';
		$field->label2 = 'Do not inject when Chrome-Lighthouse UA is detected';
		$field->checked((bool)$data['skip_lighthouse']); $field->columnWidth = 50; $fb->add($field);

		$f->add($fb);

		return $f;
	}
}