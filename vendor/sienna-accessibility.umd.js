/*!
 * Sienna Accessibility Widget — self-hosted bundle for ProcessWire a11y module
 * Original: https://github.com/bennyluk/Sienna-Accessibility-Widget (MIT)
 * Bundle built from source by a11y PW module builder.
 */
(function() {
'use strict';

// ============================================================
// DATA: Locales & Icons
// ============================================================
var LOCALES = {"am":{"Accessibility Menu":"የተደረሰ ምናሌ","Reset settings":"ቅንብሮችን ዳግም አስጀምር","Close":"ዝጋ","Content Adjustments":"የይዘት ማስተካከያዎች","Adjust Font Size":"የፊደል መጠን አስተካክል","Highlight Title":"ርዕስን አበራ","Highlight Links":"አገናኞችን አበራ","Readable Font":"ተነባቢ ፊደል","Color Adjustments":"የቀለም ማስተካከያዎች","Dark Contrast":"ጨለማ መለያየት","Light Contrast":"ብርሃን መለያየት","High Contrast":"ከፍተኛ መለያየት","High Saturation":"ከፍተኛ መጠን ያለው ቀለም","Low Saturation":"ዝቅተኛ መጠን ያለው ቀለም","Monochrome":"አንደኛ ቀለም","Tools":"መሳሪያዎች","Reading Guide":"የንባብ መመሪያ","Stop Animations":"አንዲሶችን አቁም","Big Cursor":"ትልቅ አዝራር","Increase Font Size":"የፊደል መጠን አሳድግ","Decrease Font Size":"የፊደል መጠን አሳንስ","Letter Spacing":"የፊደል ክፍተት","Line Height":"የመስመር ከፍታ","Font Weight":"የፊደል ክብደት","Dyslexia Font":"የዲስሌክሲያ ፊደል","Language":"ቋንቋ","Open Accessibility Menu":"የተደረሰ ምናሌን ክፈት"},"ar":{"Accessibility Menu":"قائمة إمكانية الوصول","Reset settings":"إعادة تعيين الإعدادات","Close":"إغلاق","Content Adjustments":"تعديلات المحتوى","Adjust Font Size":"تعديل حجم الخط","Highlight Title":"تسليط الضوء على العنوان","Highlight Links":"تسليط الضوء على الروابط","Readable Font":"خط سهل القراءة","Color Adjustments":"تعديلات الألوان","Dark Contrast":"تباين داكن","Light Contrast":"تباين فاتح","High Contrast":"تباين عالي","High Saturation":"تشبع عالي","Low Saturation":"تشبع منخفض","Monochrome":"أحادي اللون","Tools":"أدوات","Reading Guide":"دليل القراءة","Stop Animations":"إيقاف الرسوم المتحركة","Big Cursor":"مؤشر كبير","Increase Font Size":"زيادة حجم الخط","Decrease Font Size":"تقليل حجم الخط","Letter Spacing":"تباعد الحروف","Line Height":"ارتفاع السطر","Font Weight":"سماكة الخط","Dyslexia Font":"خط القراءة لمن يعانون من عسر القراءة","Language":"اللغة","Open Accessibility Menu":"افتح قائمة الوصول"},"bg":{"Accessibility Menu":"Меню за достъпност","Reset settings":"Нулиране на настройките","Close":"Затвори","Content Adjustments":"Настройки на съдържанието","Adjust Font Size":"Настройка на размера на шрифта","Highlight Title":"Открояване на заглавието","Highlight Links":"Открояване на връзките","Readable Font":"Четим шрифт","Color Adjustments":"Настройки на цветовете","Dark Contrast":"Тъмен контраст","Light Contrast":"Светъл контраст","High Contrast":"Висок контраст","High Saturation":"Висока наситеност","Low Saturation":"Ниска наситеност","Monochrome":"Монохромен","Tools":"Инструменти","Reading Guide":"Ръководство за четене","Stop Animations":"Спри анимациите","Big Cursor":"Голям курсор","Increase Font Size":"Увеличи размера на шрифта","Decrease Font Size":"Намали размера на шрифта","Letter Spacing":"Разстояние между буквите","Line Height":"Височина на реда","Font Weight":"Дебелина на шрифта","Dyslexia Font":"Шрифт за дислексия","Language":"Език","Open Accessibility Menu":"Отвори меню за достъпност"},"bn":{"Accessibility Menu":"অভিগম্যতা মেনু","Reset settings":"নির্ধারণ পুনরায় সেট করুন","Close":"বন্ধ করুন","Content Adjustments":"কন্টেন্ট সংশোধন","Adjust Font Size":"ফন্ট সাইজ সংশোধন","Highlight Title":"শিরোনাম উজ্জ্বল করুন","Highlight Links":"লিঙ্কগুলি উজ্জ্বল করুন","Readable Font":"পঠনীয় ফন্ট","Color Adjustments":"রঙ সংশোধন","Dark Contrast":"অন্ধকারী প্রতিবিম্ব","Light Contrast":"আলোকিত প্রতিবিম্ব","High Contrast":"উচ্চ প্রতিবিম্ব","High Saturation":"উচ্চ সত্রাজন","Low Saturation":"নিম্ন সত্রাজন","Monochrome":"একরঙ","Tools":"সরঞ্জাম","Reading Guide":"পড়ার গাইড","Stop Animations":"অ্যানিমেশন বন্ধ করুন","Big Cursor":"বড় কার্সর","Increase Font Size":"ফন্ট সাইজ বাড়ান","Decrease Font Size":"ফন্ট সাইজ কমান","Letter Spacing":"অক্ষর বিরাটি","Line Height":"লাইন উচ্চতা","Font Weight":"ফন্ট ওজন","Dyslexia Font":"ডাইসলেক্সিয়া ফন্ট","Language":"ভাষা","Open Accessibility Menu":"অভিগম্যতা মেনু খোলুন"},"ca":{"Accessibility Menu":"Menú d'accessibilitat","Reset settings":"Restablir configuració","Close":"Tancar","Content Adjustments":"Ajustos de contingut","Adjust Font Size":"Ajustar la mida de la font","Highlight Title":"Destacar títol","Highlight Links":"Destacar enllaços","Readable Font":"Font llegible","Color Adjustments":"Ajustos de color","Dark Contrast":"Contrast fosc","Light Contrast":"Contrast clar","High Contrast":"Alt contrast","High Saturation":"Alta saturació","Low Saturation":"Baixa saturació","Monochrome":"Monocrom","Tools":"Eines","Reading Guide":"Guia de lectura","Stop Animations":"Aturar animacions","Big Cursor":"Cursor gran","Increase Font Size":"Augmentar mida de la font","Decrease Font Size":"Reduir mida de la font","Letter Spacing":"Espaiat entre lletres","Line Height":"Alçada de línia","Font Weight":"Gruix de la font","Dyslexia Font":"Font per a dislèxia","Language":"Idioma","Open Accessibility Menu":"Obrir menú d'accessibilitat"},"cs":{"Accessibility Menu":"Přístupnostní menu","Reset settings":"Obnovit nastavení","Close":"Zavřít","Content Adjustments":"Úpravy obsahu","Adjust Font Size":"Nastavit velikost písma","Highlight Title":"Zvýraznit nadpis","Highlight Links":"Zvýraznit odkazy","Readable Font":"Čitelný font","Color Adjustments":"Nastavení barev","Dark Contrast":"Tmavý kontrast","Light Contrast":"Světlý kontrast","High Contrast":"Vysoký kontrast","High Saturation":"Vysoká saturace","Low Saturation":"Nízká saturace","Monochrome":"Monochromatický","Tools":"Nástroje","Reading Guide":"Průvodce čtením","Stop Animations":"Zastavit animace","Big Cursor":"Velký kurzor","Increase Font Size":"Zvětšit velikost písma","Decrease Font Size":"Zmenšit velikost písma","Letter Spacing":"Mezery mezi písmeny","Line Height":"Výška řádku","Font Weight":"Tloušťka písma","Dyslexia Font":"Dyslexický font","Language":"Jazyk","Open Accessibility Menu":"Otevřít přístupnostní menu"},"da":{"Accessibility Menu":"Tilgængelighedsmenu","Reset settings":"Nulstil indstillinger","Close":"Luk","Content Adjustments":"Justeringer af indhold","Adjust Font Size":"Juster skriftstørrelse","Highlight Title":"Fremhæv titel","Highlight Links":"Fremhæv links","Readable Font":"Læsbar skrifttype","Color Adjustments":"Farvejusteringer","Dark Contrast":"Mørk kontrast","Light Contrast":"Lys kontrast","High Contrast":"Høj kontrast","High Saturation":"Høj mætning","Low Saturation":"Lav mætning","Monochrome":"Monokrom","Tools":"Værktøjer","Reading Guide":"Læsevejledning","Stop Animations":"Stop animationer","Big Cursor":"Stor markør","Increase Font Size":"Øg skriftstørrelse","Decrease Font Size":"Mindsk skriftstørrelse","Letter Spacing":"Bogstavafstand","Line Height":"Linjehøjde","Font Weight":"Skrifttypevægt","Dyslexia Font":"Ordblinde-skrifttype","Language":"Sprog","Open Accessibility Menu":"Åbn tilgængelighedsmenu"},"de":{"Accessibility Menu":"Barrierefreiheit","Reset settings":"Einstellungen zurücksetzen","Close":"Schließen","Content Adjustments":"Inhaltsanpassungen","Adjust Font Size":"Schriftgröße anpassen","Highlight Title":"Titel hervorheben","Highlight Links":"Links hervorheben","Readable Font":"Lesbare Schrift","Color Adjustments":"Farbanpassungen","Dark Contrast":"Dunkler Kontrast","Light Contrast":"Heller Kontrast","High Contrast":"Hoher Kontrast","High Saturation":"Hohe Farbsättigung","Low Saturation":"Niedrige Farbsättigung","Monochrome":"Monochrom","Tools":"Werkzeuge","Reading Guide":"Lesehilfe","Stop Animations":"Animationen stoppen","Big Cursor":"Großer Cursor","Increase Font Size":"Schriftgröße vergrößern","Decrease Font Size":"Schriftgröße verkleinern","Letter Spacing":"Zeichenabstand","Line Height":"Zeilenhöhe","Font Weight":"Schriftstärke","Dyslexia Font":"Dyslexie-Schrift","Language":"Sprache","Open Accessibility Menu":"Barrierefreiheitsmenü öffnen"},"el":{"Accessibility Menu":"Μενού προσβασιμότητας","Reset settings":"Επαναφορά ρυθμίσεων","Close":"Κλείσιμο","Content Adjustments":"Προσαρμογές περιεχομένου","Adjust Font Size":"Προσαρμογή μεγέθους γραμματοσειράς","Highlight Title":"Επισήμανση τίτλου","Highlight Links":"Επισήμανση συνδέσμων","Readable Font":"Ευανάγνωστη γραμματοσειρά","Color Adjustments":"Προσαρμογές χρωμάτων","Dark Contrast":"Αντίθεση σε σκούρο","Light Contrast":"Αντίθεση σε φωτεινό","High Contrast":"Υψηλή αντίθεση","High Saturation":"Υψηλός κορεσμός","Low Saturation":"Χαμηλός κορεσμός","Monochrome":"Μονόχρωμο","Tools":"Εργαλεία","Reading Guide":"Οδηγός ανάγνωσης","Stop Animations":"Αφαίρεση κίνησης","Big Cursor":"Μεγάλος κέρσορας","Increase Font Size":"Αύξηση μεγέθους γραμματοσειράς","Decrease Font Size":"Μείωση μεγέθους γραμματοσειράς","Letter Spacing":"Διάκενο γραμμάτων","Line Height":"Ύψος γραμμής","Font Weight":"Βάρος γραμματοσειράς","Dyslexia Font":"Γραμματοσειρά για δυσλεξία","Language":"Γλώσσα","Open Accessibility Menu":"Ανοίξτε το μενού προσβασιμότητας"},"en":{"Accessibility Menu":"Accessibility Menu","Reset settings":"Reset settings","Close":"Close","Content Adjustments":"Content Adjustments","Adjust Font Size":"Adjust Font Size","Highlight Title":"Highlight Title","Highlight Links":"Highlight Links","Readable Font":"Readable Font","Color Adjustments":"Color Adjustments","Dark Contrast":"Dark Contrast","Light Contrast":"Light Contrast","High Contrast":"High Contrast","High Saturation":"High Saturation","Low Saturation":"Low Saturation","Monochrome":"Monochrome","Tools":"Tools","Reading Guide":"Reading Guide","Stop Animations":"Stop Animations","Big Cursor":"Big Cursor","Increase Font Size":"Increase Font Size","Decrease Font Size":"Decrease Font Size","Letter Spacing":"Letter Spacing","Line Height":"Line Height","Font Weight":"Font Weight","Dyslexia Font":"Dyslexia Font","Language":"Language","Open Accessibility Menu":"Open Accessibility Menu"},"es":{"Accessibility Menu":"Menú de accesibilidad","Reset settings":"Restablecer configuración","Close":"Cerrar","Content Adjustments":"Ajustes de contenido","Adjust Font Size":"Ajustar el tamaño de fuente","Highlight Title":"Destacar título","Highlight Links":"Destacar enlaces","Readable Font":"Fuente legible","Color Adjustments":"Ajustes de color","Dark Contrast":"Contraste oscuro","Light Contrast":"Contraste claro","High Contrast":"Alto contraste","High Saturation":"Alta saturación","Low Saturation":"Baja saturación","Monochrome":"Monocromo","Tools":"Herramientas","Reading Guide":"Guía de lectura","Stop Animations":"Detener animaciones","Big Cursor":"Cursor grande","Increase Font Size":"Aumentar tamaño de fuente","Decrease Font Size":"Reducir tamaño de fuente","Letter Spacing":"Espaciado entre letras","Line Height":"Altura de línea","Font Weight":"Grosor de fuente","Dyslexia Font":"Fuente para dislexia","Language":"Idioma","Open Accessibility Menu":"Abrir menú de accesibilidad"},"fa":{"Accessibility Menu":"منوی دسترسی","Reset settings":"بازنشانی تنظیمات","Close":"بستن","Content Adjustments":"تنظیمات محتوا","Adjust Font Size":"تنظیم اندازه فونت","Highlight Title":"برجسته کردن عنوان","Highlight Links":"برجسته کردن لینک‌ها","Readable Font":"فونت خوانا","Color Adjustments":"تنظیمات رنگ","Dark Contrast":"کنتراست تاریک","Light Contrast":"کنتراست روشن","High Contrast":"کنتراست بالا","High Saturation":"اشباع بالا","Low Saturation":"اشباع پایین","Monochrome":"تک‌رنگ","Tools":"ابزارها","Reading Guide":"راهنمای خواندن","Stop Animations":"توقف انیمیشن‌ها","Big Cursor":"مؤشر بزرگ","Increase Font Size":"افزایش اندازه فونت","Decrease Font Size":"کاهش اندازه فونت","Letter Spacing":"فاصله بین حروف","Line Height":"ارتفاع خط","Font Weight":"وزن فونت","Dyslexia Font":"فونت دیسلکسیا","Language":"زبان","Open Accessibility Menu":"بازکردن منوی دسترسی"},"fi":{"Accessibility Menu":"Saavutettavuusvalikko","Reset settings":"Palauta asetukset","Close":"Sulje","Content Adjustments":"Sisällön säädöt","Adjust Font Size":"Säädä fonttikokoa","Highlight Title":"Korosta otsikko","Highlight Links":"Korosta linkit","Readable Font":"Helposti luettava fontti","Color Adjustments":"Värien säädöt","Dark Contrast":"Tumma kontrasti","Light Contrast":"Vaalea kontrasti","High Contrast":"Korkea kontrasti","High Saturation":"Korkea kylläisyys","Low Saturation":"Matala kylläisyys","Monochrome":"Yksivärinen","Tools":"Työkalut","Reading Guide":"Lukemisopas","Stop Animations":"Pysäytä animaatiot","Big Cursor":"Iso kohdistin","Increase Font Size":"Suurenna fonttikokoa","Decrease Font Size":"Pienennä fonttikokoa","Letter Spacing":"Kirjainten välistys","Line Height":"Rivin korkeus","Font Weight":"Fontin paksuus","Dyslexia Font":"Dysleksiafontti","Language":"Kieli","Open Accessibility Menu":"Avaa saavutettavuusvalikko"},"fil":{"Accessibility Menu":"Menu ng Accessibility","Reset settings":"I-reset ang mga setting","Close":"Isara","Content Adjustments":"Ayusin ang Nilalaman","Adjust Font Size":"I-adjust ang Laki ng Font","Highlight Title":"I-highlight ang Pamagat","Highlight Links":"I-highlight ang mga Link","Readable Font":"Madaling Basahing Font","Color Adjustments":"Ayusin ang Kulay","Dark Contrast":"Madilim na Pagkakaiba","Light Contrast":"Maliwanag na Pagkakaiba","High Contrast":"Mataas na Pagkakaiba","High Saturation":"Mataas na Saturation","Low Saturation":"Mababang Saturation","Monochrome":"Monokrom","Tools":"Mga Kasangkapan","Reading Guide":"Gabay sa Pagbabasa","Stop Animations":"Itigil ang Mga Animasyon","Big Cursor":"Malaking Cursor","Increase Font Size":"Palakihin ang Laki ng Font","Decrease Font Size":"Bawasan ang Laki ng Font","Letter Spacing":"Espasyo ng mga Titik","Line Height":"Taas ng Linya","Font Weight":"Bigat ng Font","Dyslexia Font":"Font para sa Dyslexia","Language":"Wika","Open Accessibility Menu":"Buksan ang Menu ng Accessibility"},"fr":{"Accessibility Menu":"Menu d'accessibilité","Reset settings":"Réinitialiser les paramètres","Close":"Fermer","Content Adjustments":"Ajustements de contenu","Adjust Font Size":"Ajuster la taille de police","Highlight Title":"Surligner le titre","Highlight Links":"Surligner les liens","Readable Font":"Police lisible","Color Adjustments":"Ajustements de couleur","Dark Contrast":"Contraste foncé","Light Contrast":"Contraste clair","High Contrast":"Contraste élevé","High Saturation":"Saturation élevée","Low Saturation":"Saturation faible","Monochrome":"Monochrome","Tools":"Outils","Reading Guide":"Guide de lecture","Stop Animations":"Arrêter les animations","Big Cursor":"Gros curseur","Increase Font Size":"Augmenter la taille de police","Decrease Font Size":"Réduire la taille de police","Letter Spacing":"Espacement des lettres","Line Height":"Hauteur de ligne","Font Weight":"Poids de la police","Dyslexia Font":"Police dyslexie","Language":"Langue","Open Accessibility Menu":"Ouvrir le menu d'accessibilité"},"he":{"Accessibility Menu":"תפריט נגישות","Reset settings":"איפוס הגדרות","Close":"סגור","Content Adjustments":"התאמות תוכן","Adjust Font Size":"התאם גודל פונט","Highlight Title":"הדגש כותרת","Highlight Links":"הדגש קישורים","Readable Font":"פונט קריא","Color Adjustments":"התאמות צבע","Dark Contrast":"ניגודיות כהה","Light Contrast":"ניגודיות בהירה","High Contrast":"ניגודיות גבוהה","High Saturation":"רווי צבע גבוה","Low Saturation":"רווי צבע נמוך","Monochrome":"מונוכרום","Tools":"כלים","Reading Guide":"מדריך קריאה","Stop Animations":"עצירת אנימציות","Big Cursor":"סמן גדול","Increase Font Size":"הגדל גודל פונט","Decrease Font Size":"הקטן גודל פונט","Letter Spacing":"מרווח בין אותיות","Line Height":"גובה שורה","Font Weight":"משקל הפונט","Dyslexia Font":"פונט לדיסלקטים","Language":"שפה","Open Accessibility Menu":"פתח תפריט נגישות"},"hi":{"Accessibility Menu":"पहुँचियोग्यता मेनू","Reset settings":"सेटिंग रीसेट करें","Close":"बंद करें","Content Adjustments":"सामग्री समायोजन","Adjust Font Size":"फ़ॉन्ट आकार समायोजित करें","Highlight Title":"शीर्षक को हाइलाइट करें","Highlight Links":"लिंक को हाइलाइट करें","Readable Font":"पढ़ने योग्य फ़ॉन्ट","Color Adjustments":"रंग समायोजन","Dark Contrast":"अंधेरा विरोध","Light Contrast":"प्रकाश विरोध","High Contrast":"उच्च विरोध","High Saturation":"उच्च संतुलन","Low Saturation":"निम्न संतुलन","Monochrome":"एकरंग","Tools":"उपकरण","Reading Guide":"पढ़ने का गाइड","Stop Animations":"एनिमेशन रोकें","Big Cursor":"बड़ा कर्सर","Increase Font Size":"फ़ॉन्ट आकार बढ़ाएँ","Decrease Font Size":"फ़ॉन्ट आकार कम करें","Letter Spacing":"अक्षर स्पेसिंग","Line Height":"लाइन की ऊँचाई","Font Weight":"फ़ॉन्ट वेट","Dyslexia Font":"विविधताजनित विपथता फ़ॉन्ट","Language":"भाषा","Open Accessibility Menu":"एक्सेसिबिलिटी मेनू खोलें"},"hr":{"Accessibility Menu":"Izbornik Pristupačnosti","Reset settings":"Resetiraj postavke","Close":"Zatvori","Content Adjustments":"Prilagodbe Sadržaja","Adjust Font Size":"Prilagodi Veličinu Fonta","Highlight Title":"Istakni Naslove","Highlight Links":"Istakni Poveznice","Readable Font":"Čitljiv Font","Color Adjustments":"Prilagodbe Boja","Dark Contrast":"Tamni Kontrast","Light Contrast":"Svijetli Kontrast","High Contrast":"Visoki Kontrast","High Saturation":"Visoka Zasićenost","Low Saturation":"Niska Zasićenost","Monochrome":"Jednobojno","Tools":"Alati","Reading Guide":"Vodič Za Čitanje","Stop Animations":"Zaustavi Animacije","Big Cursor":"Veliki Kursor","Increase Font Size":"Povećaj Veličinu Fonta","Decrease Font Size":"Smanji Veličinu Fonta","Letter Spacing":"Razmak Između Slova","Line Height":"Visina Linije","Font Weight":"Debljina Fonta","Dyslexia Font":"Font Za Disleksiju","Language":"Jezik","Open Accessibility Menu":"Otvori Izbornik Pristupačnosti"},"hu":{"Accessibility Menu":"Hozzáférhetőségi menü","Reset settings":"Beállítások visszaállítása","Close":"Bezárás","Content Adjustments":"Tartalom beállításai","Adjust Font Size":"Betűméret beállítása","Highlight Title":"Cím kiemelése","Highlight Links":"Linkek kiemelése","Readable Font":"Olvasható betűtípus","Color Adjustments":"Színbeállítások","Dark Contrast":"Sötét kontraszt","Light Contrast":"Világos kontraszt","High Contrast":"Magas kontraszt","High Saturation":"Magas telítettség","Low Saturation":"Alacsony telítettség","Monochrome":"Monokróm","Tools":"Eszközök","Reading Guide":"Olvasási útmutató","Stop Animations":"Animációk leállítása","Big Cursor":"Nagy kurzor","Increase Font Size":"Betűméret növelése","Decrease Font Size":"Betűméret csökkentése","Letter Spacing":"Betűtávolság","Line Height":"Sor magasság","Font Weight":"Betűtípus vastagsága","Dyslexia Font":"Dyslexia betűtípus","Language":"Nyelv","Open Accessibility Menu":"Hozzáférhetőségi menü megnyitása"},"id":{"Accessibility Menu":"Menu Aksesibilitas","Reset settings":"Atur Ulang Pengaturan","Close":"Tutup","Content Adjustments":"Penyesuaian Konten","Adjust Font Size":"Sesuaikan Ukuran Font","Highlight Title":"Sorot Judul","Highlight Links":"Sorot Tautan","Readable Font":"Font Mudah Dibaca","Color Adjustments":"Penyesuaian Warna","Dark Contrast":"Kontras Gelap","Light Contrast":"Kontras Terang","High Contrast":"Kontras Tinggi","High Saturation":"Saturasi Tinggi","Low Saturation":"Saturasi Rendah","Monochrome":"Monokrom","Tools":"Alat","Reading Guide":"Panduan Membaca","Stop Animations":"Hentikan Animasi","Big Cursor":"Kursor Besar","Increase Font Size":"Perbesar Ukuran Font","Decrease Font Size":"Perkecil Ukuran Font","Letter Spacing":"Jarak Huruf","Line Height":"Tinggi Baris","Font Weight":"Ketebalan Font","Dyslexia Font":"Font Disleksia","Language":"Bahasa","Open Accessibility Menu":"Buka menu aksesibilitas"},"it":{"Accessibility Menu":"Menu di accessibilità","Reset settings":"Ripristina impostazioni","Close":"Chiudi","Content Adjustments":"Regolazioni del contenuto","Adjust Font Size":"Regola la dimensione del carattere","Highlight Title":"Evidenzia il titolo","Highlight Links":"Evidenzia i collegamenti","Readable Font":"Carattere leggibile","Color Adjustments":"Regolazioni del colore","Dark Contrast":"Contrasto scuro","Light Contrast":"Contrasto chiaro","High Contrast":"Alto contrasto","High Saturation":"Alta saturazione","Low Saturation":"Bassa saturazione","Monochrome":"Monocromatico","Tools":"Strumenti","Reading Guide":"Guida alla lettura","Stop Animations":"Arresta le animazioni","Big Cursor":"Cursore grande","Increase Font Size":"Aumenta la dimensione del carattere","Decrease Font Size":"Diminuisci la dimensione del carattere","Letter Spacing":"Spaziatura delle lettere","Line Height":"Altezza della linea","Font Weight":"Peso del carattere","Dyslexia Font":"Carattere per dislessia","Language":"Lingua","Open Accessibility Menu":"Apri il menu di accessibilità"},"ja":{"Accessibility Menu":"アクセシビリティメニュー","Reset settings":"設定をリセット","Close":"閉じる","Content Adjustments":"コンテンツ調整","Adjust Font Size":"フォントサイズを調整","Highlight Title":"タイトルを強調表示","Highlight Links":"リンクを強調表示","Readable Font":"読みやすいフォント","Color Adjustments":"色の調整","Dark Contrast":"ダークコントラスト","Light Contrast":"ライトコントラスト","High Contrast":"高いコントラスト","High Saturation":"彩度が高い","Low Saturation":"彩度が低い","Monochrome":"モノクローム","Tools":"ツール","Reading Guide":"読み上げガイド","Stop Animations":"アニメーションを停止","Big Cursor":"大きなカーソル","Increase Font Size":"フォントサイズを大きくする","Decrease Font Size":"フォントサイズを小さくする","Letter Spacing":"文字間隔","Line Height":"行の高さ","Font Weight":"フォントの太さ","Dyslexia Font":"ディスレクシア用フォント","Language":"言語","Open Accessibility Menu":"アクセシビリティメニューを開く"},"ka":{"Accessibility Menu":"ადაპტირებული მენიუ","Reset settings":"პარამეტრების დაბრუნება","Close":"დახურვა","Content Adjustments":"შიგთავსის მორგება","Adjust Font Size":"ფონტის ზომის მორგება","Highlight Title":"სათაურების გამოყოფა","Highlight Links":"ბმულების გამოყოფა","Readable Font":"წაკითხვადი ტექსტები","Color Adjustments":"ფერების მორგება","Dark Contrast":"ბნელი ელფერი","Light Contrast":"ნათელი ელფერი","High Contrast":"მაღალი ელფერი","High Saturation":"მაღალი გაჯერება","Low Saturation":"დაბალი გაჯერება","Monochrome":"ერთფეროვანი გამოსახულება","Tools":"ხელსაწყოები","Reading Guide":"კითხვის გამყოლი ზოლი","Stop Animations":"ანიმაციების გაჩერება","Big Cursor":"დიდი კურსორი","Increase Font Size":"ფონტის ზომის გაზრდა","Decrease Font Size":"ფონტის ზომის შემცირება","Letter Spacing":"ასოებს შორის დაშორება","Line Height":"ხაზის სიმაღლე","Font Weight":"ფონტის წონა","Dyslexia Font":"დისლექსიური ფონტი","Language":"ენა","Open Accessibility Menu":"გახსენი ადაპტირებული მენიუ"},"kn":{"Accessibility Menu":"ಪ್ರವೇಶಮಾಡುವಿಕೆ ಮೆನು","Reset settings":"ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಮರುಹೊಂದಿಸಿ","Close":"ಮುಚ್ಚಿ","Content Adjustments":"ವಿಷಯದ ಹೊಂದಾಣಿಕೆಗಳು","Adjust Font Size":"ಅಕ್ಷರದ ಗಾತ್ರವನ್ನು ಹೊಂದಿಸಿ","Highlight Title":"ಶೀರ್ಷಿಕೆಯನ್ನು ಹೈಲೈಟ್ ಮಾಡಿ","Highlight Links":"ಲಿಂಕ್‌ಗಳನ್ನು ಹೈಲೈಟ್ ಮಾಡಿ","Readable Font":"ಓದಲು ಸುಲಭವಾದ ಅಕ್ಷರಶೈಲಿ","Color Adjustments":"ಬಣ್ಣ ಹೊಂದಾಣಿಕೆಗಳು","Dark Contrast":"ಕತ್ತಲೆ ವ್ಯತ್ಯಾಸ","Light Contrast":"ಹಗುರ ವ್ಯತ್ಯಾಸ","High Contrast":"ಹೆಚ್ಚು ವ್ಯತ್ಯಾಸ","High Saturation":"ಹೆಚ್ಚು ಸಾತುರ್ನತೆ","Low Saturation":"ಕಡಿಮೆ ಸಾತುರ್ನತೆ","Monochrome":"ಏಕವರ್ಣ","Tools":"ಉಪಕರಣಗಳು","Reading Guide":"ಓದುವ ಮಾರ್ಗದರ್ಶಿ","Stop Animations":"ಅನಿಮೇಶನ್‌ಗಳನ್ನು ನಿಲ್ಲಿಸಿ","Big Cursor":"ದೊಡ್ಡ ಕರ್ಸರ್","Increase Font Size":"ಅಕ್ಷರದ ಗಾತ್ರವನ್ನು ಹೆಚ್ಚಿಸಿ","Decrease Font Size":"ಅಕ್ಷರದ ಗಾತ್ರವನ್ನು ಕಡಿಮೆ ಮಾಡಿ","Letter Spacing":"ಅಕ್ಷರಗಳ ನಡುವಿನ ಅಂತರ","Line Height":"ಸಾಲಿನ ಎತ್ತರ","Font Weight":"ಅಕ್ಷರದ ತೂಕ","Dyslexia Font":"ಡಿಸ್ಲೆಕ್ಸಿಯಾ ಅಕ್ಷರಶೈಲಿ","Language":"ಭಾಷೆ","Open Accessibility Menu":"ಪ್ರವೇಶಮಾಡುವಿಕೆ ಮೆನು ಅನ್ನು ತೆರೆಯಿರಿ"},"ko":{"Accessibility Menu":"접근성 메뉴","Reset settings":"설정 초기화","Close":"닫기","Content Adjustments":"컨텐츠 조정","Adjust Font Size":"글꼴 크기 조정","Highlight Title":"제목 강조","Highlight Links":"링크 강조","Readable Font":"읽기 쉬운 글꼴","Color Adjustments":"색상 조정","Dark Contrast":"어두운 대비","Light Contrast":"밝은 대비","High Contrast":"높은 대비","High Saturation":"높은 채도","Low Saturation":"낮은 채도","Monochrome":"단색","Tools":"도구","Reading Guide":"읽기 가이드","Stop Animations":"애니메이션 중지","Big Cursor":"큰 커서","Increase Font Size":"글꼴 크기 증가","Decrease Font Size":"글꼴 크기 감소","Letter Spacing":"자간","Line Height":"줄 간격","Font Weight":"글꼴 두께","Dyslexia Font":"난독증 글꼴","Language":"언어","Open Accessibility Menu":"접근성 메뉴 열기"},"ku":{"Accessibility Menu":"Menuya Gihîştinê","Reset settings":"Mîhengên vegerandinê","Close":"Bigire","Content Adjustments":"Guhertinên Naverokê","Adjust Font Size":"Mezinahiya Fontê biguherîne","Highlight Title":"Sernavê nîşan bide","Highlight Links":"Girêdanên nîşan bide","Readable Font":"Fonta Xwendinê","Color Adjustments":"Guhertinên Rengê","Dark Contrast":"Pêvajoya Tarî","Light Contrast":"Pêvajoya Ronahî","High Contrast":"Pêvajoya Bilind","High Saturation":"Tevgeriya Bilind","Low Saturation":"Tevgeriya Nizm","Monochrome":"Rengê Yekane","Tools":"Amûr","Reading Guide":"Rehbera Xwendinê","Stop Animations":"Anîmasyonan Rawestîne","Big Cursor":"Kursorê Mezin","Increase Font Size":"Mezinahiya Fontê Mezinkirin","Decrease Font Size":"Mezinahiya Fontê Kêmkirin","Letter Spacing":"Dûrahiya Tîpan","Line Height":"Bilindahiya Rêzê","Font Weight":"Giraniya Fontê","Dyslexia Font":"Fonta Disleksiya","Language":"Ziman","Open Accessibility Menu":"Menuya Gihîştinê Vekirî"},"lb":{"Accessibility Menu":"Accessibility Menu","Reset settings":"Astellungen zrécksetzen","Close":"Zoumaachen","Content Adjustments":"Inhalt Unpassungen","Adjust Font Size":"Schrëftgréisst unpassen","Highlight Title":"Titel markéieren","Highlight Links":"Links markéieren","Readable Font":"Liesbar Schrëft","Color Adjustments":"Faarfleg Unpassungen","Dark Contrast":"Däischteren Kontrast","Light Contrast":"Hellen Kontrast","High Contrast":"Héijen Kontrast","High Saturation":"Héij Sättigung","Low Saturation":"Niddrég Sättigung","Monochrome":"Monochrom","Tools":"Tools","Reading Guide":"Guide fir ze liesen","Stop Animations":"Animatiounen stoppen","Big Cursor":"Groussen Cursor","Increase Font Size":"Schrëftgréisst erhéijen","Decrease Font Size":"Schrëftgréisst ernidderegen","Letter Spacing":"Zeechenofstand","Line Height":"Linn Héicht","Font Weight":"Schrëftgewiicht","Dyslexia Font":"Schrëft fir Dyslexie","Language":"Sprooch","Open Accessibility Menu":"Accessibility Menu opmaachen"},"ml":{"Accessibility Menu":"പ്രവേശയോഗ്യത മെനു","Reset settings":"ക്രമീകരണങ്ങൾ പുനഃസജ്ജമാക്കുക","Close":"അടയ്ക്കുക","Content Adjustments":"ഉള്ളടക്ക ക്രമീകരണങ്ങൾ","Adjust Font Size":"അക്ഷരത്തിന്റെ വലുപ്പം ക്രമീകരിക്കുക","Highlight Title":"ശീർഷകം ഹൈലൈറ്റ് ചെയ്യുക","Highlight Links":"ലിങ്കുകൾ ഹൈലൈറ്റ് ചെയ്യുക","Readable Font":"വായിക്കാൻ എളുപ്പമുള്ള ഫോണ്ട്","Color Adjustments":"നിറ ക്രമീകരണങ്ങൾ","Dark Contrast":"ഇരുണ്ട കോൺട്രാസ്റ്റ്","Light Contrast":"ഇളം കോൺട്രാസ്റ്റ്","High Contrast":"ഉയർന്ന കോൺട്രാസ്റ്റ്","High Saturation":"ഉയർന്ന സാചുരേഷൻ","Low Saturation":"കുറഞ്ഞ സാചുരേഷൻ","Monochrome":"മോനോക്രോം","Tools":"ഉപകരണങ്ങൾ","Reading Guide":"വായനാ ഗൈഡ്","Stop Animations":"ആനിമേഷനുകൾ നിർത്തുക","Big Cursor":"വലിയ കർസർ","Increase Font Size":"ഫോണ്ട് വലുപ്പം വർദ്ധിപ്പിക്കുക","Decrease Font Size":"ഫോണ്ട് വലുപ്പം കുറയ്ക്കുക","Letter Spacing":"അക്ഷരങ്ങൾക്കിടയിലെ ഇടവ്","Line Height":"ലൈൻ ഉയരം","Font Weight":"ഫോണ്ട് ഭാരം","Dyslexia Font":"ഡിസ്ലെക്സിയ ഫോണ്ട്","Language":"ഭാഷ","Open Accessibility Menu":"പ്രവേശയോഗ്യത മെനു തുറക്കുക"},"mn":{"Accessibility Menu":"Хандалтын цэс","Reset settings":"Тохиргоог дахин тохируулах","Close":"Хаах","Content Adjustments":"Агуулгын тохируулга","Adjust Font Size":"Фонтын хэмжээг тохируулах","Highlight Title":"Гарчгийг онцлох","Highlight Links":"Холбоосуудыг онцлох","Readable Font":"Уншихад хялбар фонт","Color Adjustments":"Өнгөний тохируулга","Dark Contrast":"Харанхуй ялгарал","Light Contrast":"Гэрэлтэй ялгарал","High Contrast":"Өндөр ялгарал","High Saturation":"Өндөр ханалт","Low Saturation":"Бага ханалт","Monochrome":"Нэг өнгө","Tools":"Хэрэгслүүд","Reading Guide":"Унших гарын авлага","Stop Animations":"Анимацийг зогсоох","Big Cursor":"Том курсор","Increase Font Size":"Фонтын хэмжээг нэмэгдүүлэх","Decrease Font Size":"Фонтын хэмжээг багасгах","Letter Spacing":"Үсгийн хоорондын зай","Line Height":"Мөрийн өндөр","Font Weight":"Фонтын жин","Dyslexia Font":"Дислекси фонт","Language":"Хэл","Open Accessibility Menu":"Хандалтын цэсийг нээх"},"ms":{"Accessibility Menu":"Menu Aksesibiliti","Reset settings":"Tetapkan semula tetapan","Close":"Tutup","Content Adjustments":"Penyesuaian Kandungan","Adjust Font Size":"Laraskan Saiz Fon","Highlight Title":"Serlahkan Tajuk","Highlight Links":"Serlahkan Pautan","Readable Font":"Fon Mudah Baca","Color Adjustments":"Penyesuaian Warna","Dark Contrast":"Kontras Gelap","Light Contrast":"Kontras Terang","High Contrast":"Kontras Tinggi","High Saturation":"Saturasi Tinggi","Low Saturation":"Saturasi Rendah","Monochrome":"Monokrom","Tools":"Peralatan","Reading Guide":"Panduan Membaca","Stop Animations":"Hentikan Animasi","Big Cursor":"Kursor Besar","Increase Font Size":"Besarkan Saiz Fon","Decrease Font Size":"Kecilkan Saiz Fon","Letter Spacing":"Ruangan Huruf","Line Height":"Ketinggian Garis","Font Weight":"Ketebalan Fon","Dyslexia Font":"Fon Dyslexia","Language":"Bahasa","Open Accessibility Menu":"Buka menu kebolehcapaian"},"my":{"Accessibility Menu":"မည်သူမဆို အသုံးပြုနိုင်သော မီနူး","Reset settings":"ဆက်တင်များကို ပြန်လည်သတ်မှတ်ပါ","Close":"ပိတ်ပါ","Content Adjustments":"အကြောင်းအရာ ချိန်ညှိမှုများ","Adjust Font Size":"ဖောင့်အရွယ်အစားကို ချိန်ညှိပါ","Highlight Title":"ခေါင်းစဉ်ကို အထူးပြုပါ","Highlight Links":"လင့်များကို အထူးပြုပါ","Readable Font":"ဖတ်ရန်လွယ်ကူသော ဖောင့်","Color Adjustments":"အရောင် ချိန်ညှိမှုများ","Dark Contrast":"မှောင်မိုက်သော ကွာခြားမှု","Light Contrast":"အလင်းရောင် ကွာခြားမှု","High Contrast":"မြင့်မားသော ကွာခြားမှု","High Saturation":"မြင့်မားသော အရောင်စွဲမှု","Low Saturation":"နိမ့်သော အရောင်စွဲမှု","Monochrome":"တစ်ရောင်တည်း","Tools":"ကိရိယာများ","Reading Guide":"ဖတ်ရှုရန် လမ်းညွှန်","Stop Animations":"အန်နီမေးရှင်းများကို ရပ်ပါ","Big Cursor":"ကြီးမားသော ကာဆာ","Increase Font Size":"ဖောင့်အရွယ်အစားကို တိုးချဲ့ပါ","Decrease Font Size":"ဖောင့်အရွယ်အစားကို လျှော့ချပါ","Letter Spacing":"အက္ခရာအကြား အကွာအဝေး","Line Height":"စာကြောင်းအမြင့်","Font Weight":"ဖောင့်အလေးချိန်","Dyslexia Font":"Dyslexia ဖောင့်","Language":"ဘာသာစကား","Open Accessibility Menu":"မည်သူမဆို အသုံးပြုနိုင်သော မီနူးကို ဖွင့်ပါ"},"nl":{"Accessibility Menu":"Toegankelijkheidsmenu","Reset settings":"Instellingen resetten","Close":"Sluiten","Content Adjustments":"Inhoudsaanpassingen","Adjust Font Size":"Lettergrootte aanpassen","Highlight Title":"Titel markeren","Highlight Links":"Links markeren","Readable Font":"Leesbaar lettertype","Color Adjustments":"Kleur aanpassingen","Dark Contrast":"Donker contrast","Light Contrast":"Licht contrast","High Contrast":"Hoog contrast","High Saturation":"Hoge verzadiging","Low Saturation":"Lage verzadiging","Monochrome":"Monochroom","Tools":"Gereedschappen","Reading Guide":"Leesgids","Stop Animations":"Animaties stoppen","Big Cursor":"Grote cursor","Increase Font Size":"Lettergrootte vergroten","Decrease Font Size":"Lettergrootte verkleinen","Letter Spacing":"Letterafstand","Line Height":"Regelhoogte","Font Weight":"Letterdikte","Dyslexia Font":"Dyslexie lettertype","Language":"Taal","Open Accessibility Menu":"Toegankelijkheidsmenu openen"},"no":{"Accessibility Menu":"Tilgjengelighetsmeny","Reset settings":"Tilbakestill innstillinger","Close":"Lukk","Content Adjustments":"Innholdstilpasninger","Adjust Font Size":"Juster skriftstørrelse","Highlight Title":"Fremhev tittel","Highlight Links":"Fremhev lenker","Readable Font":"Lesbar skrifttype","Color Adjustments":"Fargejusteringer","Dark Contrast":"Mørk kontrast","Light Contrast":"Lys kontrast","High Contrast":"Høy kontrast","High Saturation":"Høy metning","Low Saturation":"Lav metning","Monochrome":"Monokrom","Tools":"Verktøy","Reading Guide":"Leseguide","Stop Animations":"Stopp animasjoner","Big Cursor":"Stor peker","Increase Font Size":"Øk skriftstørrelsen","Decrease Font Size":"Reduser skriftstørrelsen","Letter Spacing":"Bokstavavstand","Line Height":"Linjehøyde","Font Weight":"Skriftvekt","Dyslexia Font":"Dysleksisk skrifttype","Language":"Språk","Open Accessibility Menu":"Åpne tilgjengelighetsmeny"},"pa":{"Accessibility Menu":"ਪਹੁੰਚ ਮੇਨੂ","Reset settings":"ਸੈਟਿੰਗਾਂ ਰੀਸੈਟ ਕਰੋ","Close":"ਬੰਦ ਕਰੋ","Content Adjustments":"ਸਮੱਗਰੀ ਸੰਸ਼ੋਧਨ","Adjust Font Size":"ਫੋਂਟ ਆਕਾਰ ਅਨੁਕੂਲਿਤ ਕਰੋ","Highlight Title":"ਸਿਰਲੇਖ ਹਾਈਲਾਈਟ ਕਰੋ","Highlight Links":"ਲਿੰਕ ਹਾਈਲਾਈਟ ਕਰੋ","Readable Font":"ਪੜ੍ਹਨਯੋਗ ਫੋਂਟ","Color Adjustments":"ਰੰਗ ਸੰਸ਼ੋਧਨ","Dark Contrast":"ਗੂੜ੍ਹਾ ਵਿਰੋਧ","Light Contrast":"ਹਲਕਾ ਵਿਰੋਧ","High Contrast":"ਉੱਚਾ ਵਿਰੋਧ","High Saturation":"ਉੱਚਾ ਸੰਤ੍ਰਿਪਤੀ","Low Saturation":"ਘੱਟ ਸੰਤ੍ਰਿਪਤੀ","Monochrome":"ਇਕ ਰੰਗੀ","Tools":"ਉਪਕਰਨ","Reading Guide":"ਪੜ੍ਹਨ ਗਾਈਡ","Stop Animations":"ਐਨੀਮੇਸ਼ਨ ਰੋਕੋ","Big Cursor":"ਵੱਡਾ ਕਰਸਰ","Increase Font Size":"ਫੋਂਟ ਆਕਾਰ ਵਧਾਓ","Decrease Font Size":"ਫੋਂਟ ਆਕਾਰ ਘਟਾਓ","Letter Spacing":"ਅੱਖਰਾਂ ਦੀ ਦੂਰੀ","Line Height":"ਲਾਈਨ ਦੀ ਉਚਾਈ","Font Weight":"ਫੋਂਟ ਭਾਰ","Dyslexia Font":"ਡਿਸਲੈਕਸੀਆ ਫੋਂਟ","Language":"ਭਾਸ਼ਾ","Open Accessibility Menu":"ਪਹੁੰਚ ਮੇਨੂ ਖੋਲ੍ਹੋ"},"pl":{"Accessibility Menu":"Menu dostępności","Reset settings":"Reset ustawień","Close":"Zamknij","Content Adjustments":"Dostosowanie zawartości","Adjust Font Size":"Dostosuj rozmiar czcionki","Highlight Title":"Podświetl tytuły","Highlight Links":"Podświetl linki","Readable Font":"Czytelna czcionka","Color Adjustments":"Dostosowanie kolorów","Dark Contrast":"Ciemny kontrast","Light Contrast":"Jasny kontrast","High Contrast":"Wysoki kontrast","High Saturation":"Wysoka saturacja","Low Saturation":"Niska saturacja","Monochrome":"Monochromatyczność","Tools":"Narzędzia","Reading Guide":"Pomocnik czytania","Stop Animations":"Wstrzymaj animacje","Big Cursor":"Duży kursor","Increase Font Size":"Zwiększ rozmiar czcionki","Decrease Font Size":"Zmniejsz rozmiar czcionki","Letter Spacing":"Odstępy między literami","Line Height":"Wysokość wierszy","Font Weight":"Pogrubiona czcionka","Dyslexia Font":"Czcionka dla dyslektyków","Language":"Język","Open Accessibility Menu":"Otwórz menu dostępności"},"pt":{"Accessibility Menu":"Menu de Acessibilidade","Reset settings":"Redefinir configurações","Close":"Fechar","Content Adjustments":"Ajustes de Conteúdo","Adjust Font Size":"Ajustar Tamanho da Fonte","Highlight Title":"Destacar Título","Highlight Links":"Destacar Links","Readable Font":"Fonte Legível","Color Adjustments":"Ajustes de Cor","Dark Contrast":"Contraste Escuro","Light Contrast":"Contraste Claro","High Contrast":"Alto Contraste","High Saturation":"Saturação Alta","Low Saturation":"Saturação Baixa","Monochrome":"Monocromático","Tools":"Ferramentas","Reading Guide":"Guia de Leitura","Stop Animations":"Parar Animações","Big Cursor":"Cursor Grande","Increase Font Size":"Aumentar Tamanho da Fonte","Decrease Font Size":"Diminuir Tamanho da Fonte","Letter Spacing":"Espaçamento entre Letras","Line Height":"Altura da Linha","Font Weight":"Espessura da Fonte","Dyslexia Font":"Fonte para Dislexia","Language":"Idioma","Open Accessibility Menu":"Abrir menu de acessibilidade"},"ro":{"Accessibility Menu":"Meniu de accesibilitate","Reset settings":"Resetează setările","Close":"Închide","Content Adjustments":"Ajustări conținut","Adjust Font Size":"Ajustează dimensiunea fontului","Highlight Title":"Evidențiază titlul","Highlight Links":"Evidențiază legăturile","Readable Font":"Font lizibil","Color Adjustments":"Ajustări de culoare","Dark Contrast":"Contrast întunecat","Light Contrast":"Contrast luminos","High Contrast":"Contrast ridicat","High Saturation":"Saturație ridicată","Low Saturation":"Saturație redusă","Monochrome":"Monocrom","Tools":"Instrumente","Reading Guide":"Ghid de lectură","Stop Animations":"Opriți animațiile","Big Cursor":"Cursor mare","Increase Font Size":"Mărește dimensiunea fontului","Decrease Font Size":"Micșorează dimensiunea fontului","Letter Spacing":"Spațierea literelor","Line Height":"Înălțimea liniei","Font Weight":"Grosimea fontului","Dyslexia Font":"Font pentru dislexie","Language":"Limbă","Open Accessibility Menu":"Deschideți meniul de accesibilitate"},"ru":{"Accessibility Menu":"Меню специальных возможностей","Reset settings":"Сброс настроек","Close":"Закрыть","Content Adjustments":"Корректировка контента","Adjust Font Size":"Настройка размера шрифта","Highlight Title":"Выделить заголовки","Highlight Links":"Выделить ссылки","Readable Font":"Читаемый шрифт","Color Adjustments":"Коррекция цвета","Dark Contrast":"Темный контраст","Light Contrast":"Светлый контраст","High Contrast":"Высокий контраст","High Saturation":"Высокая насыщенность","Low Saturation":"Низкая насыщенность","Monochrome":"Монохромный цвет","Tools":"Инструменты","Reading Guide":"Руководство по чтению","Stop Animations":"Остановить анимацию","Big Cursor":"Большой курсор","Increase Font Size":"Увеличить размер шрифта","Decrease Font Size":"Уменьшить размер шрифта","Letter Spacing":"Межбуквенное расстояние","Line Height":"Высота линии","Font Weight":"Вес шрифта","Dyslexia Font":"Шрифт Дислексия","Language":"Язык","Open Accessibility Menu":"Открыть меню специальных возможностей"},"si":{"Accessibility Menu":"Meni dostopnosti","Reset settings":"Ponastavi nastavitve","Close":"Zapri","Content Adjustments":"Prilagoditve vsebine","Adjust Font Size":"Prilagodi velikost pisave","Highlight Title":"Označi naslov","Highlight Links":"Označi povezave","Readable Font":"Bralna pisava","Color Adjustments":"Prilagoditve barv","Dark Contrast":"Temni kontrast","Light Contrast":"Svetli kontrast","High Contrast":"Visoki kontrast","High Saturation":"Visoka nasičenost","Low Saturation":"Nizka nasičenost","Monochrome":"Monokromno","Tools":"Orodja","Reading Guide":"Bralni vodnik","Stop Animations":"Ustavi animacije","Big Cursor":"Velik kazalec","Increase Font Size":"Povečaj velikost pisave","Decrease Font Size":"Zmanjšaj velikost pisave","Letter Spacing":"Razmik med črkami","Line Height":"Višina vrstice","Font Weight":"Debelina pisave","Dyslexia Font":"Pisava za disleksijo","Language":"Jezik","Open Accessibility Menu":"Odpri meni dostopnosti"},"sk":{"Accessibility Menu":"Menu prístupnosti","Reset settings":"Obnoviť nastavenia","Close":"Zavrieť","Content Adjustments":"Nastavenia obsahu","Adjust Font Size":"Prispôsobiť veľkosť písma","Highlight Title":"Zvýrazniť nadpis","Highlight Links":"Zvýrazniť odkazy","Readable Font":"Čitateľné písmo","Color Adjustments":"Nastavenia farieb","Dark Contrast":"Tmavý kontrast","Light Contrast":"Svetlý kontrast","High Contrast":"Vysoký kontrast","High Saturation":"Vysoká saturácia","Low Saturation":"Nízka saturácia","Monochrome":"Monochromatické","Tools":"Nástroje","Reading Guide":"Sprievodca čítaním","Stop Animations":"Zastaviť animácie","Big Cursor":"Veľký kurzor","Increase Font Size":"Zväčšiť veľkosť písma","Decrease Font Size":"Zmenšiť veľkosť písma","Letter Spacing":"Rozostup písmen","Line Height":"Výška riadku","Font Weight":"Tlak písma","Dyslexia Font":"Písmo pre dyslexiu","Language":"Jazyk","Open Accessibility Menu":"Otvoriť menu prístupnosti"},"sl":{"Accessibility Menu":"Meni dostopnosti","Reset settings":"Ponastavi nastavitve","Close":"Zapri","Content Adjustments":"Prilagoditve vsebine","Adjust Font Size":"Prilagodi velikost pisave","Highlight Title":"Označi naslov","Highlight Links":"Označi povezave","Readable Font":"Bralna pisava","Color Adjustments":"Prilagoditve barv","Dark Contrast":"Temni kontrast","Light Contrast":"Svetli kontrast","High Contrast":"Visoki kontrast","High Saturation":"Visoka nasičenost","Low Saturation":"Nizka nasičenost","Monochrome":"Monokromno","Tools":"Orodja","Reading Guide":"Bralni vodnik","Stop Animations":"Ustavi animacije","Big Cursor":"Velik kazalec","Increase Font Size":"Povečaj velikost pisave","Decrease Font Size":"Zmanjšaj velikost pisave","Letter Spacing":"Razmik med črkami","Line Height":"Višina vrstice","Font Weight":"Debelina pisave","Dyslexia Font":"Pisava za disleksijo","Language":"Jezik","Open Accessibility Menu":"Odpri meni dostopnosti"},"sr-SP":{"Accessibility Menu":"Мени За Приступачност","Reset settings":"Ресетуј поставке","Close":"Затвори","Content Adjustments":"Подешавање Садржаја","Adjust Font Size":"Подешавање Величине Фонта","Highlight Title":"Означи Наслове","Highlight Links":"Означи Везе","Readable Font":"Читљивији Фонт","Color Adjustments":"Подешавање Боја","Dark Contrast":"Тамни Контраст","Light Contrast":"Свијетли Контраст","High Contrast":"Високи Контраст","High Saturation":"Велика Засићеност","Low Saturation":"Ниска Засићеност","Monochrome":"Једнобојни","Tools":"Алати","Reading Guide":"Водич За Читање","Stop Animations":"Заустави Анимације","Big Cursor":"Велики Курсор","Increase Font Size":"Повећај Величину Фонта","Decrease Font Size":"Смањи Величину Фонта","Letter Spacing":"Размак Слова","Line Height":"Висина Линије","Font Weight":"Дебљина Фонта","Dyslexia Font":"Фонт За Дислексичаре","Language":"Језик","Open Accessibility Menu":"Отвори Мени За Приступачност"},"sr":{"Accessibility Menu":"Meni Za Pristupačnost","Reset settings":"Resetuj postavke","Close":"Zatvori","Content Adjustments":"Podešavanje Sadržaja","Adjust Font Size":"Podešavanje Veličine Fonta","Highlight Title":"Označi Naslove","Highlight Links":"Označi Veze","Readable Font":"Čitljiviji Font","Color Adjustments":"Podešavanje Boja","Dark Contrast":"Tamni Kontrast","Light Contrast":"Svijetli Kontrast","High Contrast":"Visoki Kontrast","High Saturation":"Velika Zasićenost","Low Saturation":"Niska Zasićenost","Monochrome":"Jednobojni","Tools":"Alati","Reading Guide":"Vodič Za Čitanje","Stop Animations":"Zaustavi Animacije","Big Cursor":"Veliki Kursor","Increase Font Size":"Povećaj Veličinu Fonta","Decrease Font Size":"Smanji Veličinu Fonta","Letter Spacing":"Razmak Slova","Line Height":"Visina Linije","Font Weight":"Debljina Fonta","Dyslexia Font":"Font Za Disleksičare","Language":"Jezik","Open Accessibility Menu":"Otvori Meni Za Pristupačnost"},"sv":{"Accessibility Menu":"Tillgänglighetsmeny","Reset settings":"Nollställ inställningar","Close":"Stäng","Content Adjustments":"Anpassa innehåll","Adjust Font Size":"Justera textstorlek","Highlight Title":"Framhäv titel","Highlight Links":"Framhäv länkar","Readable Font":"Läsbart teckensnitt","Color Adjustments":"Anpassa färger","Dark Contrast":"Mörk kontrast","Light Contrast":"Ljus kontrast","High Contrast":"Hög kontrast","High Saturation":"Hög mättnad","Low Saturation":"Låg mättnad","Monochrome":"Monokrom","Tools":"Verktyg","Reading Guide":"Läslinjal","Stop Animations":"Hindra animationer","Big Cursor":"Stor muspekare","Increase Font Size":"Öka textstorlek","Decrease Font Size":"Minska textstorlek","Letter Spacing":"Teckenavstånd","Line Height":"Radhöjd","Font Weight":"Teckensnitt tjocklek","Dyslexia Font":"Dyslektiskt teckensnitt","Language":"Språk","Open Accessibility Menu":"Öppna tillgänglighetsmeny"},"sw":{"Accessibility Menu":"Menyu ya Ufikiaji","Reset settings":"Weka upya mipangilio","Close":"Funga","Content Adjustments":"Marekebisho ya Maudhui","Adjust Font Size":"Rekebisha Ukubwa wa Herufi","Highlight Title":"Angazia Kichwa","Highlight Links":"Angazia Viungo","Readable Font":"Herufi Inayosomeka","Color Adjustments":"Marekebisho ya Rangi","Dark Contrast":"Tofauti ya Giza","Light Contrast":"Tofauti ya Mwanga","High Contrast":"Tofauti ya Juu","High Saturation":"Usitishaji wa Juu","Low Saturation":"Usitishaji wa Chini","Monochrome":"Monokromu","Tools":"Vifaa","Reading Guide":"Mwongozo wa Kusoma","Stop Animations":"Simamisha Uhuishaji","Big Cursor":"Kisahihi Kikubwa","Increase Font Size":"Ongeza Ukubwa wa Herufi","Decrease Font Size":"Punguza Ukubwa wa Herufi","Letter Spacing":"Nafasi ya Herufi","Line Height":"Urefu wa Mstari","Font Weight":"Uzito wa Herufi","Dyslexia Font":"Herufi ya Dyslexia","Language":"Lugha","Open Accessibility Menu":"Fungua Menyu ya Ufikiaji"},"ta":{"Accessibility Menu":"அணுகல் மெனு","Reset settings":"அமைப்புகளை மீட்டமை","Close":"மூடு","Content Adjustments":"உள்ளடக்க சரிசெய்தல்கள்","Adjust Font Size":"எழுத்துரு அளவை சரிசெய்","Highlight Title":"தலைப்பை ஹைலைட் செய்","Highlight Links":"இணைப்புகளை ஹைலைட் செய்","Readable Font":"படிக்கக்கூடிய எழுத்துரு","Color Adjustments":"நிற சரிசெய்தல்கள்","Dark Contrast":"இருண்ட மாறுபாடு","Light Contrast":"ஒளி மாறுபாடு","High Contrast":"உயர் மாறுபாடு","High Saturation":"உயர் நிறம்","Low Saturation":"குறைந்த நிறம்","Monochrome":"ஒற்றை நிறம்","Tools":"கருவிகள்","Reading Guide":"படிக்கும் வழிகாட்டி","Stop Animations":"அனிமேஷன்களை நிறுத்து","Big Cursor":"பெரிய கர்சர்","Increase Font Size":"எழுத்துரு அளவை அதிகரிக்க","Decrease Font Size":"எழுத்துரு அளவை குறைக்க","Letter Spacing":"எழுத்து இடைவெளி","Line Height":"வரி உயரம்","Font Weight":"எழுத்துரு எடை","Dyslexia Font":"டிஸ்லெக்சியா எழுத்துரு","Language":"மொழி","Open Accessibility Menu":"அணுகல் மெனுவை திற"},"te":{"Accessibility Menu":"ప్రాప్యత మెనూ","Reset settings":"సెట్టింగ్‌లను రీసెట్ చేయండి","Close":"మూసివేయి","Content Adjustments":"కంటెంట్ సర్దుబాట్లు","Adjust Font Size":"ఫాంట్ పరిమాణాన్ని సర్దుబాటు చేయండి","Highlight Title":"శీర్షికను హైలైట్ చేయండి","Highlight Links":"లింక్‌లను హైలైట్ చేయండి","Readable Font":"చదవడానికి అనుకూలమైన ఫాంట్","Color Adjustments":"రంగు సర్దుబాట్లు","Dark Contrast":"చీకటి వ్యత్యాసం","Light Contrast":"తెల్లటి వ్యత్యాసం","High Contrast":"అధిక వ్యత్యాసం","High Saturation":"అధిక సంతృప్తి","Low Saturation":"తక్కువ సంతృప్తి","Monochrome":"మోనోక్రోమ్","Tools":"పరికరాలు","Reading Guide":"చదవడం మార్గదర్శకుడు","Stop Animations":"యానిమేషన్‌లను ఆపు","Big Cursor":"పెద్ద కర్సర్","Increase Font Size":"ఫాంట్ పరిమాణాన్ని పెంచండి","Decrease Font Size":"ఫాంట్ పరిమాణాన్ని తగ్గించండి","Letter Spacing":"అక్షరాల మధ్య ఖాళీ","Line Height":"లైన్ ఎత్తు","Font Weight":"ఫాంట్ బరువు","Dyslexia Font":"డిస్లెక్సియా ఫాంట్","Language":"భాష","Open Accessibility Menu":"ప్రాప్యత మెనూను తెరవండి"},"th":{"Accessibility Menu":"เมนูการช่วยการเข้าถึง","Reset settings":"รีเซ็ตการตั้งค่า","Close":"ปิด","Content Adjustments":"การปรับเนื้อหา","Adjust Font Size":"ปรับขนาดตัวอักษร","Highlight Title":"เน้นหัวเรื่อง","Highlight Links":"เน้นลิงก์","Readable Font":"แบบอักษรที่อ่านง่าย","Color Adjustments":"การปรับสี","Dark Contrast":"ความเปรียบต่างเข้ม","Light Contrast":"ความเปรียบต่างสว่าง","High Contrast":"ความเปรียบต่างสูง","High Saturation":"ความอิ่มตัวของสีสูง","Low Saturation":"ความอิ่มตัวของสีต่ำ","Monochrome":"โมโนโครม","Tools":"เครื่องมือ","Reading Guide":"คู่มือการอ่าน","Stop Animations":"หยุดการเคลื่อนไหว","Big Cursor":"เคอร์เซอร์ขนาดใหญ่","Increase Font Size":"เพิ่มขนาดตัวอักษร","Decrease Font Size":"ลดขนาดตัวอักษร","Letter Spacing":"ระยะห่างระหว่างตัวอักษร","Line Height":"ความสูงของบรรทัด","Font Weight":"น้ำหนักตัวอักษร","Dyslexia Font":"แบบอักษรสำหรับดิสเล็กเซีย","Language":"ภาษา","Open Accessibility Menu":"เปิดเมนูการช่วยการเข้าถึง"},"tr":{"Accessibility Menu":"Erişilebilirlik Menüsü","Reset settings":"Ayarları Sıfırla","Close":"Kapat","Content Adjustments":"İçerik Ayarları","Adjust Font Size":"Yazı Tipi Boyutunu Ayarla","Highlight Title":"Başlığı Vurgula","Highlight Links":"Bağlantıları Vurgula","Readable Font":"Okunaklı Yazı Tipi","Color Adjustments":"Renk Ayarları","Dark Contrast":"Koyu Kontrast","Light Contrast":"Açık Kontrast","High Contrast":"Yüksek Kontrast","High Saturation":"Yüksek Doygunluk","Low Saturation":"Düşük Doygunluk","Monochrome":"Tek Renkli","Tools":"Araçlar","Reading Guide":"Okuma Rehberi","Stop Animations":"Animasyonları Durdur","Big Cursor":"Büyük İmleç","Increase Font Size":"Yazı Tipi Boyutunu Artır","Decrease Font Size":"Yazı Tipi Boyutunu Azalt","Letter Spacing":"Harf Aralığı","Line Height":"Satır Yüksekliği","Font Weight":"Yazı Tipi Kalınlığı","Dyslexia Font":"Disleksi Yazı Tipi","Language":"Dil","Open Accessibility Menu":"Erişilebilirlik menüsünü aç"},"ur":{"Accessibility Menu":"رسائی مینو","Reset settings":"ترتیبات ری سیٹ کریں","Close":"بند کریں","Content Adjustments":"مواد کی ایڈجسٹمنٹ","Adjust Font Size":"فونٹ سائز ایڈجسٹ کریں","Highlight Title":"عنوان کو نمایاں کریں","Highlight Links":"لنکس کو نمایاں کریں","Readable Font":"قابلِ مطالعہ فونٹ","Color Adjustments":"رنگ کی ایڈجسٹمنٹ","Dark Contrast":"گہرا تضاد","Light Contrast":"ہلکا تضاد","High Contrast":"زیادہ تضاد","High Saturation":"زیادہ سیچوریشن","Low Saturation":"کم سیچوریشن","Monochrome":"مونوکروم","Tools":"اوزار","Reading Guide":"مطالعہ گائیڈ","Stop Animations":"حرکات روکیں","Big Cursor":"بڑا کرسر","Increase Font Size":"فونٹ سائز بڑھائیں","Decrease Font Size":"فونٹ سائز کم کریں","Letter Spacing":"حروف کا فاصلہ","Line Height":"لائن کی اونچائی","Font Weight":"فونٹ کا وزن","Dyslexia Font":"ڈسلیکسیا فونٹ","Language":"زبان","Open Accessibility Menu":"رسائی مینو کھولیں"},"vi":{"Accessibility Menu":"Menu Truy cập","Reset settings":"Đặt lại cài đặt","Close":"Đóng","Content Adjustments":"Điều chỉnh Nội dung","Adjust Font Size":"Điều chỉnh Kích thước Font chữ","Highlight Title":"Đánh dấu Tiêu đề","Highlight Links":"Đánh dấu Liên kết","Readable Font":"Font chữ Dễ đọc","Color Adjustments":"Điều chỉnh Màu sắc","Dark Contrast":"Tương phản Tối","Light Contrast":"Tương phản Sáng","High Contrast":"Tương phản Cao","High Saturation":"Bão hòa Cao","Low Saturation":"Bão hòa Thấp","Monochrome":"Đơn sắc","Tools":"Công cụ","Reading Guide":"Hướng dẫn Đọc","Stop Animations":"Dừng Hoạt hình","Big Cursor":"Con trỏ Lớn","Increase Font Size":"Tăng Kích thước Font chữ","Decrease Font Size":"Giảm Kích thước Font chữ","Letter Spacing":"Khoảng cách Chữ","Line Height":"Độ Cao dòng","Font Weight":"Độ Đậm của Font chữ","Dyslexia Font":"Font chữ Cho người có Khuyết tật đọc hiểu","Language":"Ngôn ngữ","Open Accessibility Menu":"Mở Menu Truy cập"},"zh-Hans":{"Accessibility Menu":"辅助功能菜单","Reset settings":"重置设置","Close":"关闭","Content Adjustments":"内容调整","Adjust Font Size":"调整字体大小","Highlight Title":"标题高亮","Highlight Links":"链接高亮","Readable Font":"易读字体","Color Adjustments":"色彩调整","Dark Contrast":"高对比度（黑色）","Light Contrast":"高对比度（白色）","High Contrast":"高对比度","High Saturation":"高饱和度","Low Saturation":"低饱和度","Monochrome":"单色","Tools":"更多设置","Reading Guide":"阅读尺","Stop Animations":"停止闪动","Big Cursor":"放大鼠标","Increase Font Size":"增加字体大小","Decrease Font Size":"减小字体大小","Letter Spacing":"字母间距","Line Height":"行距","Font Weight":"字重","Dyslexia Font":"阅读障碍字体","Language":"语言","Open Accessibility Menu":"打开辅助功能菜单"},"zh-Hant":{"Accessibility Menu":"輔助功能菜單","Reset settings":"重置設定","Close":"關閉","Content Adjustments":"內容調整","Adjust Font Size":"調整字體大小","Highlight Title":"標題高亮","Highlight Links":"連結高亮","Readable Font":"易讀字體","Color Adjustments":"色彩調整","Dark Contrast":"高對比度（黑色）","Light Contrast":"高對比度（白色）","High Contrast":"高對比度","High Saturation":"高飽和度","Low Saturation":"低飽和度","Monochrome":"單色","Tools":"更多設定","Reading Guide":"閱讀尺","Stop Animations":"停止閃動","Big Cursor":"放大滑鼠","Increase Font Size":"增加字體大小","Decrease Font Size":"減小字體大小","Letter Spacing":"字母間距","Line Height":"行距","Font Weight":"字重","Dyslexia Font":"閱讀障礙字體","Language":"語言","Open Accessibility Menu":"打開輔助功能菜單"}};
var ICONS   = {"bigCursor":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"> <path d=\"M11 1.07C7.05 1.56 4 4.92 4 9h7m-7 6a8 8 0 0 0 8 8 8 8 0 0 0 8-8v-4H4m9-9.93V9h7a8 8 0 0 0-7-7.93Z\"/></svg>","stopAnimations":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"> <path d=\"M22 12c0-5.54-4.46-10-10-10-1.17 0-2.3.19-3.38.56l.7 1.94A7.15 7.15 0 0 1 12 3.97 8.06 8.06 0 0 1 20.03 12 8.06 8.06 0 0 1 12 20.03 8.06 8.06 0 0 1 3.97 12c0-.94.19-1.88.53-2.72l-1.94-.66A10.37 10.37 0 0 0 2 12c0 5.54 4.46 10 10 10s10-4.46 10-10M5.47 3.97c.85 0 1.53.71 1.53 1.5C7 6.32 6.32 7 5.47 7c-.79 0-1.5-.68-1.5-1.53 0-.79.71-1.5 1.5-1.5M18 12c0-3.33-2.67-6-6-6s-6 2.67-6 6 2.67 6 6 6 6-2.67 6-6m-7-3v6H9V9m6 0v6h-2V9\"/></svg>","readingGuide":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"> <path d=\"M12 8a3 3 0 0 0 3-3 3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3m0 3.54A13.15 13.15 0 0 0 3 8v11c3.5 0 6.64 1.35 9 3.54A13.15 13.15 0 0 1 21 19V8c-3.5 0-6.64 1.35-9 3.54Z\"/></svg>","highlightTitle":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">  <path d=\"M5 4v3h5.5v12h3V7H19V4H5Z\"/></svg>","formatBold":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"> <path d=\"M13.5 15.5H10v-3h3.5A1.5 1.5 0 0 1 15 14a1.5 1.5 0 0 1-1.5 1.5m-3.5-9h3A1.5 1.5 0 0 1 14.5 8 1.5 1.5 0 0 1 13 9.5h-3m5.6 1.29c.97-.68 1.65-1.79 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.1 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42Z\"/></svg>","lineHeight":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"> <path d=\"M21 22H3v-2h18v2m0-18H3V2h18v2m-11 9.7h4l-2-5.4-2 5.4M11.2 6h1.7l4.7 12h-2l-.9-2.6H9.4L8.5 18h-2l4.7-12Z\"/></svg>","letterSpacing":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"> <path d=\"M22 3v18h-2V3h2M4 3v18H2V3h2m6 10.7h4l-2-5.4-2 5.4M11.2 6h1.7l4.7 12h-2l-.9-2.6H9.4L8.5 18h-2l4.7-12Z\"/></svg>","dyslexia":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"> <path d=\"m21.59 11.59-8.09 8.09L9.83 16l-1.41 1.41 5.08 5.09L23 13M6.43 11 8.5 5.5l2.07 5.5m1.88 5h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3Z\"/></svg>","highlightLinks":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"> <path d=\"M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V5h14v14m-5.06-8.94a3.37 3.37 0 0 1 0 4.75L11.73 17A3.29 3.29 0 0 1 7 17a3.31 3.31 0 0 1 0-4.74l1.35-1.36-.01.6c-.01.5.07 1 .23 1.44l.05.15-.4.41a1.6 1.6 0 0 0 0 2.28c.61.62 1.67.62 2.28 0l2.2-2.19c.3-.31.48-.72.48-1.15 0-.44-.18-.83-.48-1.14a.87.87 0 0 1 0-1.24.91.91 0 0 1 1.24 0m4.06-.7c0 .9-.35 1.74-1 2.38l-1.34 1.36v-.6c.01-.5-.07-1-.23-1.44l-.05-.14.4-.42a1.6 1.6 0 0 0 0-2.28 1.64 1.64 0 0 0-2.28 0l-2.2 2.2c-.3.3-.48.71-.48 1.14 0 .44.18.83.48 1.14.17.16.26.38.26.62s-.09.46-.26.62a.86.86 0 0 1-.62.25.88.88 0 0 1-.62-.25 3.36 3.36 0 0 1 0-4.75L12.27 7A3.31 3.31 0 0 1 17 7c.65.62 1 1.46 1 2.36Z\"/></svg>","monochrome":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"> <path d=\"m19 19-7-8v8H5l7-8V5h7m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z\"/></svg>","lowSaturation":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"> <path d=\"M11 9h2v2h-2V9m-2 2h2v2H9v-2m4 0h2v2h-2v-2m2-2h2v2h-2V9M7 9h2v2H7V9m12-6H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M9 18H7v-2h2v2m4 0h-2v-2h2v2m4 0h-2v-2h2v2m2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V5h14v6Z\"/></svg>","highSaturation":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"> <path d=\"M12 16a4 4 0 0 1-4-4 4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4m6.7-3.6a6.06 6.06 0 0 0-.86-.4 5.98 5.98 0 0 0 3.86-5.59 6 6 0 0 0-6.78.54A5.99 5.99 0 0 0 12 .81a6 6 0 0 0-2.92 6.14A6 6 0 0 0 2.3 6.4 5.95 5.95 0 0 0 6.16 12a6 6 0 0 0-3.86 5.58 6 6 0 0 0 6.78-.54A6 6 0 0 0 12 23.19a6 6 0 0 0 2.92-6.14 6 6 0 0 0 6.78.54 5.98 5.98 0 0 0-3-5.19Z\"/></svg>","highContrast":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"> <path d=\"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 17.93a8 8 0 0 1 0-15.86v15.86zm2-15.86a8 8 0 0 1 2.87.93H13v-.93zM13 7h5.24c.25.31.48.65.68 1H13V7zm0 3h6.74c.08.33.15.66.19 1H13v-1zm0 9.93V19h2.87a8 8 0 0 1-2.87.93zM18.24 17H13v-1h5.92c-.2.35-.43.69-.68 1zm1.5-3H13v-1h6.93a8.4 8.4 0 0 1-.19 1z\"/></svg>","lightContrast":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"> <path d=\"M12 18a6 6 0 0 1-6-6 6 6 0 0 1 6-6 6 6 0 0 1 6 6 6 6 0 0 1-6 6m8-2.69L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69Z\"/></svg>","darkContrast":"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"> <path d=\"M18 12c0-4.5-1.92-8.74-6-10a10 10 0 0 0 0 20c4.08-1.26 6-5.5 6-10Z\"/></svg>"};

// ============================================================
// LANGUAGES list
// ============================================================
var LANGUAGES = [
  {code:"am",label:"አማርኛ (Amharic)"},{code:"ar",label:"العربية (Arabic)"},
  {code:"bg",label:"български (Bulgarian)"},{code:"bn",label:"বাংলা (Bengali)"},
  {code:"ca",label:"Català (Catalan)"},{code:"cs",label:"čeština (Czech)"},
  {code:"da",label:"Danish (Denmark)"},{code:"de",label:"Deutsch (German)"},
  {code:"el",label:"Ελληνικά (Greek)"},{code:"en",label:"English"},
  {code:"es",label:"Español (Spanish)"},{code:"fa",label:"فارسی (Persian)"},
  {code:"fi",label:"suomi (Finnish)"},{code:"fil",label:"Tagalog (Filipino)"},
  {code:"fr",label:"Français (French)"},{code:"he",label:"עברית (Hebrew)"},
  {code:"hi",label:"हिन्दी (Hindi)"},{code:"hr",label:"Hrvatski (Croatian)"},
  {code:"hu",label:"Magyar (Hungarian)"},{code:"id",label:"Bahasa Indonesia"},
  {code:"it",label:"Italiano (Italian)"},{code:"ja",label:"日本語 (Japanese)"},
  {code:"ka",label:"ქართული (Georgian)"},{code:"kn",label:"ಕನ್ನಡ (Kannada)"},
  {code:"ko",label:"한국어 (Korean)"},{code:"ku",label:"Kurdî (Kurdish)"},
  {code:"lb",label:"Lëtzebuergesch"},{code:"ml",label:"മലയാളം (Malayalam)"},
  {code:"mn",label:"Монгол (Mongolian)"},{code:"ms",label:"Bahasa Malaysia"},
  {code:"my",label:"မြန်မာ (Burmese)"},{code:"nl",label:"Nederlands (Dutch)"},
  {code:"no",label:"Norsk (Norwegian)"},{code:"pa",label:"ਪੰਜਾਬੀ (Punjabi)"},
  {code:"pl",label:"Polski (Polish)"},{code:"pt",label:"Português (Portuguese)"},
  {code:"ro",label:"Română (Romanian)"},{code:"ru",label:"Русский (Russian)"},
  {code:"si",label:"Slovenščina (Slovene)"},{code:"sk",label:"slovenčina (Slovak)"},
  {code:"sl",label:"slovenščina (Slovenian)"},{code:"sr",label:"Srpski (Serbian)"},
  {code:"sr-SP",label:"Српски (Serbian Cyrillic)"},{code:"sv",label:"Svenska (Swedish)"},
  {code:"sw",label:"Kiswahili (Swahili)"},{code:"ta",label:"தமிழ் (Tamil)"},
  {code:"te",label:"తెలుగు (Telugu)"},{code:"th",label:"ไทย (Thai)"},
  {code:"tr",label:"Türkçe (Turkish)"},{code:"ur",label:"اردو (Urdu)"},
  {code:"vi",label:"Tiếng Việt (Vietnamese)"},
  {code:"zh-Hans",label:"简体中文 (Simplified Chinese)"},
  {code:"zh-Hant",label:"繁體中文 (Traditional Chinese)"}
];

// ============================================================
// UTILS
// ============================================================
function addStylesheet(id, css) {
  if (!css) return;
  var el = document.getElementById(id) || document.createElement('style');
  el.innerHTML = css;
  if (!el.id) { el.id = id; document.head.appendChild(el); }
}

function removeStylesheet(id) {
  var el = document.getElementById(id);
  if (el) el.parentNode.removeChild(el);
}

function t(label) {
  var dict = LOCALES[userSettings.lang] || LOCALES['en'] || {};
  return dict[label] || label;
}

// ============================================================
// STORAGE
// ============================================================
var STORAGE_KEY = 'asw-user-settings';
function saveStorage(data) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch(e) {}
}
function loadStorage() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch(e) { return {}; }
}

// ============================================================
// CONFIG & STATE
// ============================================================
var pluginConfig = { lang:'en', position:'bottom-left', offset:[20,20], size:58 };
var userSettings = { lang:undefined, states:{} };

function saveUserSettings() { saveStorage(userSettings); }

// ============================================================
// ICON SELECTORS (for font size skip)
// ============================================================
var ICON_CLASSES = new Set(['material-icons','fa','fa-solid','fa-regular','fa-brands',
  'glyphicon','icon','mdi','ion','svg-icon','iconfont','bi','octicon','feather',
  'heroicon','bx','ri']);

// ============================================================
// TOOLS — CSS injection
// ============================================================
var browserPrefixes = ['-o-','-ms-','-moz-','-webkit-',''];
var needsPrefix     = ['filter'];

function generateCSS(styles) {
  var out = '';
  for (var k in styles) {
    var prefixes = needsPrefix.indexOf(k) >= 0 ? browserPrefixes : [''];
    prefixes.forEach(function(p) { out += p+k+':'+styles[k]+' !important;'; });
  }
  return out;
}

function wrapCSS(selector, children, css) {
  if (!children || !children.length) children = [''];
  return children.map(function(c) { return selector+' '+c+'{'+css+'}'; }).join('');
}

function injectToolCSS(id, enable, selector, children, styles, extraCss) {
  var toolId = 'asw-'+id;
  if (enable) {
    var css = generateCSS(styles);
    if (selector) css = wrapCSS(selector, children, css);
    if (extraCss) css += extraCss;
    addStylesheet(toolId, css);
  } else {
    removeStylesheet(toolId);
  }
  document.documentElement.classList.toggle(toolId, !!enable);
}

// ============================================================
// TOOL IMPLEMENTATIONS
// ============================================================
var FONT_SIZE_SEL = 'h1,h2,h3,h4,h5,h6,p,a,dl,dt,li,ol,th,td,span,blockquote,.asw-text';
function adjustFontSize(mult) {
  mult = mult || 1;
  document.querySelectorAll(FONT_SIZE_SEL).forEach(function(el) {
    if ([].some.call(el.classList, function(c) { return ICON_CLASSES.has(c); })) return;
    var org = Number(el.dataset.aswOrgFontSize) || parseInt(window.getComputedStyle(el).fontSize);
    if (!el.dataset.aswOrgFontSize) el.dataset.aswOrgFontSize = org;
    el.style.fontSize = (org * mult) + 'px';
  });
}

var ICON_SEL_LIST = ['material-icons','fa','fa-solid','fa-regular','fa-brands',
  'glyphicon','icon','mdi','ion','svg-icon','iconfont','bi','octicon','feather','heroicon','bx','ri'];
var NOT_ICON = '*:not('+ICON_SEL_LIST.map(function(s){return '.'+s;}).join(',')+')';
var ALL_EL   = ['', NOT_ICON];
var LINKS    = ['a[href]'];
var HEADERS  = ['h1','h2','h3','h4','h5','h6'];
var TEXT_SEL = HEADERS.concat(['img','p','i','svg','a','button:not(.asw-btn)','label','li','ol']);

var FILTERS = {
  'dark-contrast':  { childrenSelector: TEXT_SEL,  styles:{'color':'#FFF','fill':'#FFF','background-color':'#000'}, selector:'html.aws-filter' },
  'light-contrast': { childrenSelector: TEXT_SEL,  styles:{'color':'#000','fill':'#000','background-color':'#FFF'}, selector:'html.aws-filter' },
  'high-contrast':  { childrenSelector: [''],       styles:{'filter':'contrast(125%)'}, selector:'html.aws-filter' },
  'high-saturation':{ childrenSelector: [''],       styles:{'filter':'saturate(200%)'}, selector:'html.aws-filter' },
  'low-saturation': { childrenSelector: [''],       styles:{'filter':'saturate(50%)'},  selector:'html.aws-filter' },
  'monochrome':     { childrenSelector: [''],       styles:{'filter':'grayscale(100%)'},selector:'html.aws-filter' },
};

function enableContrast(contrast) {
  var f = FILTERS[contrast];
  if (!f) {
    removeStylesheet('asw-filter-style');
    document.documentElement.classList.remove('aws-filter');
    return;
  }
  var css = generateCSS(f.styles);
  css = wrapCSS(f.selector, f.childrenSelector, css);
  addStylesheet('asw-filter-style', css);
  document.documentElement.classList.add('aws-filter');
}

function stopAnimations(en) {
  injectToolCSS('stop-animations', en, 'html', ['*'], {
    'transition':'none','animation-fill-mode':'forwards',
    'animation-iteration-count':'1','animation-duration':'.01s'
  });
}

function bigCursor(en) {
  injectToolCSS('big-cursor', en, 'body', ['*'], {
    'cursor':'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'98px\' height=\'98px\' viewBox=\'0 0 48 48\'%3E%3Cpath fill=\'%23E0E0E0\' d=\'M27.8 39.7c-.1 0-.2 0-.4-.1s-.4-.3-.6-.5l-3.7-8.6-4.5 4.2c-.1.2-.3.3-.6.3-.1 0-.3 0-.4-.1-.3-.1-.6-.5-.6-.9V12c0-.4.2-.8.6-.9.1-.1.3-.1.4-.1.2 0 .5.1.7.3l16 15c.3.3.4.7.3 1.1-.1.4-.5.6-.9.7l-6.3.6 3.9 8.5c.1.2.1.5 0 .8-.1.2-.3.5-.5.6l-2.9 1.3c-.2-.2-.4-.2-.5-.2z\'/%3E%3Cpath fill=\'%23212121\' d=\'m18 12 16 15-7.7.7 4.5 9.8-2.9 1.3-4.3-9.9L18 34V12m0-2c-.3 0-.5.1-.8.2-.7.3-1.2 1-1.2 1.8v22c0 .8.5 1.5 1.2 1.8.3.2.6.2.8.2.5 0 1-.2 1.4-.5l3.4-3.2 3.1 7.3c.2.5.6.9 1.1 1.1.2.1.5.1.7.1.3 0 .5-.1.8-.2l2.9-1.3c.5-.2.9-.6 1.1-1.1.2-.5.2-1.1 0-1.5l-3.3-7.2 4.9-.4c.8-.1 1.5-.6 1.7-1.3.3-.7.1-1.6-.5-2.1l-16-15c-.3-.5-.8-.7-1.3-.7z\'/%3E%3C/svg%3E") 40 15, auto'
  });
}

function readingGuide(en) {
  var guide = document.querySelector('.asw-rg-container');
  if (en) {
    if (!guide) {
      guide = document.createElement('div');
      guide.className = 'asw-rg-container';
      guide.innerHTML = '<style>.asw-rg{position:fixed;top:0;left:0;right:0;width:100%;height:0;pointer-events:none;background-color:rgba(0,0,0,.8);z-index:1000000;}</style>'
        + '<div class="asw-rg asw-rg-top"></div>'
        + '<div class="asw-rg asw-rg-bottom" style="top:auto;bottom:0;"></div>';
      var rgTop    = guide.querySelector('.asw-rg-top');
      var rgBottom = guide.querySelector('.asw-rg-bottom');
      var margin   = 20;
      window.__asw__onScrollRG = function(e) {
        rgTop.style.height    = (e.clientY - margin) + 'px';
        rgBottom.style.height = (window.innerHeight - e.clientY - margin*2) + 'px';
      };
      document.addEventListener('mousemove', window.__asw__onScrollRG, {passive:false});
      document.body.appendChild(guide);
    }
  } else {
    if (guide) guide.parentNode.removeChild(guide);
    if (window.__asw__onScrollRG) {
      document.removeEventListener('mousemove', window.__asw__onScrollRG);
      delete window.__asw__onScrollRG;
    }
  }
}

function highlightLinks(en) {
  injectToolCSS('highlight-links', en, 'html', LINKS, {'outline':'2px solid #0048ff','outline-offset':'2px'});
}
function highlightTitle(en) {
  injectToolCSS('highlight-title', en, 'html', HEADERS, {'outline':'2px solid #0048ff','outline-offset':'2px'});
}
function adjustLetterSpacing(en) {
  injectToolCSS('letter-spacing', en, 'html', ALL_EL, {'letter-spacing':'2px'});
}
function adjustLineHeight(en) {
  injectToolCSS('line-height', en, 'html', ALL_EL, {'line-height':'3'});
}
function adjustFontWeight(en) {
  injectToolCSS('font-weight', en, 'html', ALL_EL, {'font-weight':'700'});
}
function readableFont(en) {
  var base = (pluginConfig.fontUrl || 'https://website-widgets.pages.dev/fonts/').replace(/\/?$/, '/');
  injectToolCSS('readable-font', en, 'html', ALL_EL.concat(TEXT_SEL),
    {'font-family':'OpenDyslexic3,Comic Sans MS,Arial,Helvetica,sans-serif'},
    '@font-face{font-family:OpenDyslexic3;src:url("'+base+'OpenDyslexic3-Regular.woff") format("woff"),url("'+base+'OpenDyslexic3-Regular.ttf") format("truetype");}'
  );
}

function renderTools() {
  var s = userSettings.states;
  highlightTitle(s['highlight-title']);
  highlightLinks(s['highlight-links']);
  adjustLetterSpacing(s['letter-spacing']);
  adjustLineHeight(s['line-height']);
  adjustFontWeight(s['font-weight']);
  readableFont(s['readable-font']);
  readingGuide(s['readable-guide']);
  stopAnimations(s['stop-animations']);
  bigCursor(s['big-cursor']);
}

function runAccessibility() {
  adjustFontSize(userSettings.states.fontSize);
  renderTools();
  enableContrast(userSettings.states.contrast);
}

// ============================================================
// WIDGET CSS
// ============================================================
var WIDGET_CSS = `.asw-widget,
.asw-menu {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
}

.asw-widget *,
.asw-menu * {
    box-sizing: border-box !important;
}

.asw-menu-btn {
    position: fixed;
    z-index: 500000;
    left: 30px;
    bottom: 30px;
    box-shadow: 0 5px 15px 0 rgb(37 44 97 / 15%), 0 2px 4px 0 rgb(93 100 148 / 20%);
    transition: transform .2s ease;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    width: 58px;
    height: 58px;
    display: flex;
    cursor: pointer;
    border: 3px solid white !important;
    outline: 5px solid #0048ff!important;
    text-decoration: none !important;
    background: rgb(50,108,255) !important;
    background: linear-gradient(96deg, rgba(50,108,255,1) 0%, rgba(0,72,255,1) 100%) !important;
}

.asw-menu-btn svg {
    width: 36px;
    height: 36px;
    min-height: 36px;
    min-width: 36px;
    max-width: 36px;
    max-height: 36px;
    background: transparent !important;
}

.asw-menu-btn:hover {
    transform: scale(1.05);
}

@media only screen and (max-width: 768px) {
    .asw-menu-btn {
        width: 42px;
        height: 42px;
    }

    .asw-menu-btn svg {
        width: 26px;
        height: 26px;
        min-height: 26px;
        min-width: 26px;
        max-width: 26px;
        max-height: 26px;
    }
}`;
var MENU_CSS   = `.asw-menu {
    position: fixed;
    display: flex;
    flex-direction: column;
    left: 0;
    top: 0px;
    box-shadow: 0px 0px 20px #00000080;
    opacity: 1;
    transition: .3s;
    z-index: 500000;
    overflow: hidden;
    background: #eff1f5;
    width: 500px;
    line-height: 1;
    font-size: 16px;
    height: 100%;
    letter-spacing: 0.015em;
}

.asw-menu * {
    color: #000 !important;
    font-family: inherit;
    padding: 0;
    margin: 0;
    line-height: 1 !important;
    letter-spacing: normal !important;
}

.asw-menu-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    height: 55px;
    font-weight: 700 !important;
    background-color: #0848ca !important;
}

.asw-menu-title {
    font-size: 16px !important;
    color: #fff !important;
}

.asw-menu-header svg {
    fill: #0848ca !important;
    width: 24px !important;
    height: 24px !important;
    min-width: 24px !important;
    min-height: 24px !important;
    max-width: 24px !important;
    max-height: 24px !important;
}

.asw-menu-header > div {
    display: flex;
}

.asw-menu-reset,
.asw-menu-close {
    padding: 5px !important;
    margin: 0 !important;
    background: white !important;
    cursor: pointer !important;
    border-radius: 50% !important;
    transition: opacity .3s ease !important;
    border: 0 !important;
    box-shadow: none !important;
    outline: none !important;
}

.asw-menu-reset-footer-btn {
    border-radius: 5px !important;
    width: 100% !important;
    font-size: 15px !important;
    font-weight: 600 !important;
    padding: 15px !important;
    background: #0848ca !important;
    color: #fff !important;
}

.asw-menu-reset:hover,
.asw-menu-close:hover,
.asw-menu-reset:focus,
.asw-menu-close:focus,
.asw-menu-reset-footer-btn:hover,
.asw-menu-reset-footer-btn:focus {
    outline: 3px solid hsla(0,0%,100%,.4) !important;
}

.asw-card {
    margin: 0 15px 20px;
}

.asw-card-title {
    font-size: 14px !important;
    padding: 15px 0;
    font-weight: 600 !important;
    opacity: 0.8;
}

.asw-menu .asw-select {
    width: 100% !important;
    padding: 0px 15px!important;
    font-size: 16px !important;
    font-family: inherit !important;
    font-weight: 600 !important;
    border-radius: 45px !important;
    background: #fff !important;
    border: none !important;
    min-height: 45px !important;
    max-height: 45px !important;
    height: 45px !important;
    color: inherit !important;
}

.asw-items {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
}

.asw-btn {
    aspect-ratio: 6 / 5;
    border-radius: 12px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    color: #333;
    font-size: 16px !important;
    background: #fff !important;
    border: 2px solid transparent !important;
    transition: border-color 0.2s ease;
    cursor: pointer;
    word-break: break-word;
    gap: 10px;
    position: relative;
    width: auto !important;
    height: auto !important;
}

.asw-btn .asw-translate,
.asw-adjust-font .asw-label div {
    font-size: 14px !important;
    font-weight: 600 !important;
}

.asw-plus,
.asw-minus {
    background-color: #eff1f5 !important;
    border: 2px solid transparent;
    transition: border .2s ease;
}


.asw-plus:hover,
.asw-minus:hover {
    border-color: #0848ca !important;
}

.asw-amount {
    font-size: 18px !important;
    font-weight: 600 !important;
}

.asw-adjust-font svg{
    width: 24px !important;
    height: 24px !important;
    min-width: 24px !important;
    min-height: 24px !important;
    max-width: 24px !important;
    max-height: 24px !important;
}

.asw-btn svg {
    width: 34px !important;
    height: 34px !important;
    min-width: 34px !important;
    min-height: 34px !important;
    max-width: 34px !important;
    max-height: 34px !important;
}

.asw-btn:hover,
.asw-btn.asw-selected {
    border-color: #0848ca !important;
}

.asw-btn.asw-selected svg,
.asw-btn.asw-selected span {
    fill: #0848ca !important;
    color: #0848ca !important;
}

.asw-btn.asw-selected:after {
    content: '';
    display: inline-block;
    background-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%23fff%22%3E%3Cpath%20d%3D%22M382-240%20154-468l57-57%20171%20171%20367-367%2057%2057-424%20424Z%22%2F%3E%3C%2Fsvg%3E');
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #0848ca!important;
    color: #fff;
    padding: 6px;
    font-size: 10px;
    width: 18px;
    height: 18px;
    border-radius: 100%;
    line-height: 6px;
}

.asw-footer {
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    padding: 20px;
    text-align: center;
    border-top: 2px solid #eff1f5;
}

.asw-footer a {
    font-size: 16px !important;
    text-decoration: none !important;
    color: #000 !important;
    background: transparent !important;
    font-weight: 600 !important;
}

.asw-footer a:hover,
.asw-footer a:hover span {
    color: #0848ca!important;
}

.asw-menu-content {
    flex: 1;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 30px 0 15px;
}

.asw-adjust-font {
    background: #fff;
    padding: 20px;
    margin-bottom: 20px;
}

.asw-adjust-font .asw-label {
    display: flex;
    justify-content: flex-start;
}

.asw-adjust-font > div {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    align-items: center;
    font-size: 15px;
}

.asw-adjust-font .asw-label div {
    font-size: 15px !important;
}

.asw-adjust-font div[role="button"] {
    background: #eff1f5 !important;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.asw-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
}

@media only screen and (max-width: 560px) {
    .asw-menu {
        width: 100%;
    }
}

@media only screen and (max-width: 420px) {
    .asw-items {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0.5rem;
    }
}`;

// ============================================================
// HTML TEMPLATES
// ============================================================
var WIDGET_HTML = `
<div class="asw-widget">
  <a href="https://accessibility-widget.pages.dev" target="_blank" rel="noopener" class="asw-menu-btn" title="Open Accessibility Menu" role="button" aria-expanded="false">
    <svg xmlns="http://www.w3.org/2000/svg" style="fill:white;" viewBox="0 0 24 24" width="30px" height="30px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>
  </a>
</div>`;

var MENU_HTML = `
<div class="asw-menu">
  <div class="asw-menu-header">
    <div class="asw-menu-title asw-translate">Accessibility Menu</div>
    <div style="gap:15px;display:flex;">
      <button type="button" class="asw-menu-reset" title="Reset settings">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4c2.1 0 4.1.8 5.6 2.3 3.1 3.1 3.1 8.2 0 11.3a7.78 7.78 0 0 1-6.7 2.3l.5-2c1.7.2 3.5-.4 4.8-1.7a6.1 6.1 0 0 0 0-8.5A6.07 6.07 0 0 0 12 6v4.6l-5-5 5-5V4M6.3 17.6C3.7 15 3.3 11 5.1 7.9l1.5 1.5c-1.1 2.2-.7 5 1.2 6.8.5.5 1.1.9 1.8 1.2l-.6 2a8 8 0 0 1-2.7-1.8Z"/></svg>
      </button>
      <button type="button" class="asw-menu-close" title="Close">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"/></svg>
      </button>
    </div>
  </div>
  <div class="asw-menu-content">
    <div class="asw-card">
      <select id="asw-language" title="Language" class="asw-select"></select>
    </div>
    <div class="asw-card">
      <div class="asw-card-title asw-translate">Content Adjustments</div>
      <div class="asw-adjust-font">
        <div class="asw-label" style="margin:0;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="margin-right:15px;"><path d="M2 4v3h5v12h3V7h5V4H2m19 5h-9v3h3v7h3v-7h3V9Z"/></svg>
          <div class="asw-translate">Adjust Font Size</div>
        </div>
        <div>
          <div class="asw-minus" data-key="font-size" role="button" tabindex="0" title="Decrease Font Size">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2Z"/></svg>
          </div>
          <div class="asw-amount">100%</div>
          <div class="asw-plus" data-key="font-size" role="button" tabindex="0" title="Increase Font Size">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z"/></svg>
          </div>
        </div>
      </div>
      <div class="asw-items content"></div>
    </div>
    <div class="asw-card">
      <div class="asw-card-title asw-translate">Color Adjustments</div>
      <div class="asw-items contrast"></div>
    </div>
    <div class="asw-card">
      <div class="asw-card-title asw-translate">Tools</div>
      <div class="asw-items tools"></div>
    </div>
    <div class="asw-card">
      <button type="button" class="asw-menu-reset asw-menu-reset-footer-btn asw-translate" title="Reset settings">Reset settings</button>
    </div>
  </div>
  <div class="asw-footer">
    <a href="https://accessibility-widget.pages.dev" target="_blank" rel="noopener">Web Accessibility By <span style="font-weight:700;color:inherit;">Sienna</span> ❤️</a>
  </div>
</div>
<div class="asw-overlay"></div>`;

// ============================================================
// BUTTON CONFIGS
// ============================================================
var CONTENT_BUTTONS = [
  {label:'Font Weight',    key:'font-weight',    icon:ICONS.formatBold},
  {label:'Line Height',    key:'line-height',    icon:ICONS.lineHeight},
  {label:'Letter Spacing', key:'letter-spacing', icon:ICONS.letterSpacing},
  {label:'Dyslexia Font',  key:'readable-font',  icon:ICONS.dyslexia},
  {label:'Highlight Links',key:'highlight-links',icon:ICONS.highlightLinks},
  {label:'Highlight Title',key:'highlight-title',icon:ICONS.highlightTitle},
];

var FILTER_BUTTONS = [
  {label:'Monochrome',     key:'monochrome',      icon:ICONS.monochrome},
  {label:'Low Saturation', key:'low-saturation',  icon:ICONS.lowSaturation},
  {label:'High Saturation',key:'high-saturation', icon:ICONS.highSaturation},
  {label:'High Contrast',  key:'high-contrast',   icon:ICONS.highContrast},
  {label:'Light Contrast', key:'light-contrast',  icon:ICONS.lightContrast},
  {label:'Dark Contrast',  key:'dark-contrast',   icon:ICONS.darkContrast},
];

var TOOL_BUTTONS = [
  {label:'Big Cursor',      key:'big-cursor',      icon:ICONS.bigCursor},
  {label:'Stop Animations', key:'stop-animations', icon:ICONS.stopAnimations},
  {label:'Reading Guide',   key:'readable-guide',  icon:ICONS.readingGuide},
];

function renderButtons(buttons, cls) {
  return buttons.slice().reverse().map(function(b) {
    return '<button class="asw-btn '+(cls||'')+'" type="button" data-key="'+b.key+'" title="'+b.label+'">'+b.icon+'<span class="asw-translate">'+b.label+'</span></button>';
  }).join('');
}

// ============================================================
// TRANSLATION
// ============================================================
function translateEl(el) {
  el.querySelectorAll('.asw-card-title, .asw-translate').forEach(function(node) {
    var key = node.getAttribute('data-translate') || node.textContent.trim();
    if (!node.hasAttribute('data-translate')) node.setAttribute('data-translate', key);
    node.textContent = t(key);
  });
  el.querySelectorAll('[title]').forEach(function(node) {
    var key = node.getAttribute('data-translate-title') || node.getAttribute('title');
    if (!node.hasAttribute('data-translate-title')) node.setAttribute('data-translate-title', key);
    node.setAttribute('title', t(key));
  });
}

function changeLanguage(lang) {
  lang = String(lang||'').toLowerCase();
  if (!LANGUAGES.some(function(l){return l.code===lang;})) lang='en';
  if (userSettings.lang !== lang) {
    userSettings.lang = lang;
    var sel = document.querySelector('#asw-language');
    if (sel) sel.value = lang;
    if ($widget) translateEl($widget);
    saveUserSettings();
  }
}

// ============================================================
// RESET
// ============================================================
function reset() {
  document.querySelectorAll('.asw-selected').forEach(function(el) {
    el.classList.remove('asw-selected');
  });
  userSettings.states = {};
  runAccessibility();
  saveUserSettings();
}

// ============================================================
// MENU
// ============================================================
var $widget, $menu;

function toggleMenu() {
  if (!$menu) return;
  $menu.style.display = $menu.style.display === 'none' ? 'block' : 'none';
}

function openMenu() {
  if ($menu) { toggleMenu(); return; }

  var $container = document.createElement('div');
  $container.innerHTML = '<style>'+MENU_CSS+'</style>' + MENU_HTML;
  $menu = $container.querySelector('.asw-menu');

  if (pluginConfig.position && pluginConfig.position.indexOf('right') >= 0) {
    $menu.style.right = '0px';
    $menu.style.left = 'auto';
  }

  // Render button groups
  $menu.querySelector('.content').innerHTML  = renderButtons(CONTENT_BUTTONS);
  $menu.querySelector('.contrast').innerHTML = renderButtons(FILTER_BUTTONS, 'asw-filter');
  $menu.querySelector('.tools').innerHTML    = renderButtons(TOOL_BUTTONS, 'asw-tools');

  // Restore UI state
  var states = userSettings.states || {};
  var fontSize = Number(states.fontSize) || 1;
  if (fontSize !== 1) $menu.querySelector('.asw-amount').textContent = (fontSize*100)+'%';

  [].forEach.call($menu.querySelectorAll('.asw-btn'), function(btn) {
    var key = btn.dataset.key;
    var val = key === (states.contrast) ? true : states[key];
    if (val) btn.classList.add('asw-selected');
  });

  // Language selector
  if (!userSettings.lang) userSettings.lang = pluginConfig.lang || 'en';
  if (!LANGUAGES.some(function(l){return l.code===userSettings.lang;})) userSettings.lang='en';
  var $sel = $menu.querySelector('#asw-language');
  $sel.innerHTML = LANGUAGES.map(function(l) {
    return '<option value="'+l.code+'">'+l.label+'</option>';
  }).join('');
  $sel.value = userSettings.lang;
  $sel.addEventListener('change', function(e) { changeLanguage(e.target.value); });

  // Close / reset
  $container.querySelectorAll('.asw-menu-close, .asw-overlay').forEach(function(el) {
    el.addEventListener('click', toggleMenu);
  });
  $container.querySelectorAll('.asw-menu-reset').forEach(function(el) {
    el.addEventListener('click', reset);
  });

  // Font size controls
  $menu.querySelectorAll('.asw-plus, .asw-minus').forEach(function(el) {
    el.addEventListener('click', function() {
      var step = 0.1;
      var fs = userSettings.states.fontSize || 1;
      fs += el.classList.contains('asw-minus') ? -step : step;
      fs = Math.max(0.1, Math.min(2, Number(fs.toFixed(2))));
      $menu.querySelector('.asw-amount').textContent = (fs*100).toFixed(0)+'%';
      adjustFontSize(fs);
      userSettings.states.fontSize = fs;
      saveUserSettings();
    });
  });

  // Feature buttons
  $menu.querySelectorAll('.asw-btn').forEach(function(el) {
    el.addEventListener('click', function() {
      var key = el.dataset.key;
      var isSelected = !el.classList.contains('asw-selected');

      if (el.classList.contains('asw-filter')) {
        $menu.querySelectorAll('.asw-filter').forEach(function(f) { f.classList.remove('asw-selected'); });
        if (isSelected) el.classList.add('asw-selected');
        userSettings.states.contrast = isSelected ? key : false;
        enableContrast(userSettings.states.contrast);
      } else {
        el.classList.toggle('asw-selected', isSelected);
        userSettings.states[key] = isSelected;
        renderTools();
      }
      saveUserSettings();
    });
  });

  translateEl($container);
  $widget.appendChild($container);
}

// ============================================================
// WIDGET POSITION
// ============================================================
function getButtonStyle(position, offset) {
  var ox = (offset && offset[0]) || 20;
  var oy = (offset && offset[1]) || 20;
  var cx = 'calc(50% - 27.5px - '+ox+'px)';
  var cy = 'calc(50% - 27.5px - '+oy+'px)';
  var styles = {bottom: oy+'px', left: ox+'px'};
  switch(position) {
    case 'bottom-right':  styles = {bottom:oy+'px', right:ox+'px', left:'auto'}; break;
    case 'top-left':      styles = {top:oy+'px', left:ox+'px', bottom:'auto'}; break;
    case 'top-right':     styles = {top:oy+'px', right:ox+'px', left:'auto', bottom:'auto'}; break;
    case 'center-left':   styles = {left:ox+'px', bottom:cy}; break;
    case 'center-right':  styles = {right:ox+'px', left:'auto', bottom:cy}; break;
    case 'bottom-center': styles = {bottom:oy+'px', left:cx}; break;
    case 'top-center':    styles = {top:oy+'px', bottom:'auto', left:cx}; break;
  }
  return styles;
}

// ============================================================
// INIT
// ============================================================
function init(options) {
  Object.assign(pluginConfig, options || {});

  var saved = loadStorage();
  if (saved && typeof saved === 'object') {
    Object.assign(userSettings, saved);
    if (!userSettings.states) userSettings.states = {};
  }

  if (!userSettings.lang) userSettings.lang = pluginConfig.lang || 'en';

  runAccessibility();

  // Render widget button
  $widget = document.createElement('div');
  $widget.classList.add('asw-container');
  $widget.innerHTML = '<style>'+WIDGET_CSS+'</style>' + WIDGET_HTML;

  var $btn = $widget.querySelector('.asw-menu-btn');
  var btnStyle = getButtonStyle(pluginConfig.position, pluginConfig.offset);
  Object.assign($btn.style, btnStyle);

  if (pluginConfig.color) {
    $btn.style.background = pluginConfig.color + ' !important';
    $btn.style.setProperty('background', pluginConfig.color, 'important');
    $btn.style.setProperty('outline', '5px solid ' + pluginConfig.color, 'important');
  }

  $btn.addEventListener('click', function(e) {
    e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
    openMenu();
  });

  document.body.appendChild($widget);

  // Observe HTML lang attribute changes
  if (!options || !options.disableObserveLang) {
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(m) {
        if (m.type === 'attributes' && m.attributeName === 'lang') {
          changeLanguage(document.documentElement.lang.split(/[-_]/)[0]);
        }
      });
    });
    observer.observe(document.documentElement, {attributes: true});
  }
}

// ============================================================
// ENTRY POINT — reads data-asw-* from <script> tag
// ============================================================
function getAttr(attr) {
  var key = 'data-asw-' + attr;
  var s = document.currentScript;
  if (s && s.hasAttribute(key)) return s.getAttribute(key);
  var el = document.querySelector('['+key+']');
  return el ? el.getAttribute(key) : null;
}

function getDefaultLang() {
  return (getAttr('lang') ||
    (document.documentElement && document.documentElement.lang) ||
    (navigator && navigator.language) || 'en').split(/[-_]/)[0].trim() || 'en';
}

function start() {
  var offsetRaw = getAttr('offset');
  var options = {
    lang:     getDefaultLang(),
    position: getAttr('position') || 'bottom-left',
    offset:   offsetRaw ? offsetRaw.split(',').map(Number) : [20, 20],
    size:     Number(getAttr('size')) || 58,
    color:    getAttr('color') || null,
    fontUrl:  getAttr('font-url') || null,
    disableObserveLang: !!getAttr('disableObserveLang'),
  };
  init(options);
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  start();
} else {
  document.addEventListener('readystatechange', function() {
    if (document.readyState === 'complete' || document.readyState === 'interactive') start();
  });
}

// Expose global API
window.SiennaPlugin = { changeLanguage: changeLanguage };

})();
