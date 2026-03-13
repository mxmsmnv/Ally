# Ally (a11y) — Accessibility Widget for ProcessWire

Ally adds a self-hosted accessibility widget to your ProcessWire site. Powered by [Sienna](https://github.com/bennyluk/Sienna-Accessibility-Widget) (MIT), the JS bundle ships with the module and is served from your own server — no external CDN, no third-party requests at runtime.

## Features

- Font size adjustment
- Dark, light, and high contrast modes
- High / low saturation, monochrome
- Dyslexia-friendly font
- Highlight links and headings
- Letter spacing, line height, bold text
- Reading guide, stop animations, big cursor
- 53 languages with auto-detection from `html[lang]` or browser settings
- Full ProcessWire multi-language support — maps `$user->language` to the correct locale automatically
- Configurable position, offset, button size, and accent color
- Skips admin pages and Chrome Lighthouse by default

## Installation

1. Download or clone this repository into `site/modules/Ally/`
2. Go to **Modules → Refresh** in the ProcessWire admin
3. Install **Ally (a11y)**
4. Configure via **Modules → Ally**

The module ships with a prebuilt JS bundle at `vendor/sienna-accessibility.umd.js`. No build step required.

## Configuration

All settings are available in the module config UI:

| Setting | Default | Description |
|---|---|---|
| Enabled | Yes | Toggle widget on/off without uninstalling |
| Position | Bottom Left | 8 positions available |
| Offset X / Y | 20px | Distance from the edge |
| Button Size | 58px | Widget button diameter |
| Accent Color | Sienna default | Optional custom color for button and UI accents |
| Language | Auto | Auto-detect or force a specific locale |
| Skip Admin Pages | Yes | Do not inject on admin template |
| Skip Lighthouse | Yes | Do not inject when Chrome-Lighthouse UA is detected |

## Requirements

- ProcessWire 3.0.200+
- PHP 8.1+

## License

MIT — see [LICENSE](LICENSE)

Sienna Accessibility Widget by [Benny Luk](https://github.com/bennyluk/Sienna-Accessibility-Widget), MIT.
