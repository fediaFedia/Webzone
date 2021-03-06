$(function () {

    // Lets be professional, shall we?
    "use strict";

    // Some variables for later
    var dictionary, set_lang;

    // Object literal behaving as multi-dictionary
    dictionary = {
        "english": {
            "_fakewindowsupdates": "Fake Windows Update Screens",
            "_prankyourfriends": "Prank your friends and colleagues with fake update screens!",
			"_pressf11": "Press F11 to go fullscreen",
			"_pressenter": "Press ENTER to cause a BSOD",
			"_video": "Video Overview",
			"_selecttheme": "Select a theme",
			"_relyonads": "We rely on ads to host this site, please consider whitelisting it if you like it! :)",
			
			"_winVistaupdates1": "Configuring updates: Stage",
			"_winVistaOf": "of",
			
			"_win7configuringupdates": "Configuring Windows Updates",
			"_win7percent": "complete.",
			"_win7donotturnoff": "Do not turn off your computer.",
			
			"_winXPupdates1": "Installing Windows Updates...",
			"_winXPupdates2": "Do not turn off or unplug your computer.",
			
			"_win10updates1": "Installing Windows 10",
			"_win10updates2": "Your PC will restart several times. Sit back and relax.",
			
			"_win10updates3": "Copying Files",
			"_win10updates4": "Installing features and drivers",
			"_win10updates5": "Configuring Settings"
			
			

        },
		
		
        "spanish": {
            "_fakewindowsupdates": "Broma - actualizacion de Windows",
            "_prankyourfriends": "Broma a tus amigos y compañeros de trabajo con pantallas de actualización de Windows!",
			"_pressf11": "Pulse F11 para ir a pantalla completa",
			"_pressenter": "Pulse ENTER para mostrar un BSOD",
			"_video": "Vídeo",
			"_selecttheme": "Selecciona un tema",
			"_relyonads": "We rely on ads to host this site, please consider whitelisting it if you like it! :)",

			
			"_winVistaupdates1": "Se están instalando actualizaciones",
			"_winVistaOf": "de",
			
			"_win7configuringupdates": "Se están instalando actualizaciones",
			"_win7percent": "",
			"_win7donotturnoff": "No apague ni desconecte el equipo.",
			
			"_winXPupdates1": "Instalando actualización...",
			"_winXPupdates2": "No apague ni desconecte el equipo.",
			
			"_win10updates1": "Installing Windows 10",
			"_win10updates2": "Your PC will restart several times. Sit back and relax.",
			
			"_win10updates3": "Copying Files",
			"_win10updates4": "Installing features and drivers",
			"_win10updates5": "Configuring Settings"
			
			
        },
		

		        "russian": {
            "_fakewindowsupdates": "Поддельные «обновления» Windows",
            "_prankyourfriends": "Разыграйте своих друзей и колег с ненастояшими обновлениями :)",
			"_pressf11": "Нажмите F11, чтобы перейти на весь экран",
			"_pressenter": "Нажмите ENTER, чтобы вызвать синий экран",
			"_video": "Видео Обзор",
			"_selecttheme": "Выберите тему",
			"_relyonads": "We rely on ads to host this site, please consider whitelisting it if you like it! :)",

			
			"_winVistaupdates1": "Настройка обновлений: этап",
			"_winVistaOf": "из",
			
			"_win7configuringupdates": "Выполняется установка обновления",
			"_win7percent": "завершено.",
			"_win7donotturnoff": "Не отключайте компьютер",
			
			"_winXPupdates1": "Выполняется установка обновления...",
			"_winXPupdates2": "Не отключайте компьютер",
			
			"_win10updates1": "Установка Windows 10",
			"_win10updates2": "Ваш компьютер перезагрузится несколько раз. Подождите.",
			
			"_win10updates3": "Копирование файлов",
			"_win10updates4": "Установка компонентов и драйверов",
			"_win10updates5": "Настройка параметров"
			
			
        },
		
		
		
		        "german": {
            "_fakewindowsupdates": "Gefälschte Windows Update Screens",
            "_prankyourfriends": "Lege deine Freunde, Familie und Kollegen mit diesen Fake Windows Updates rein.",
			"_pressf11": "F11 macht es Vollbild",
			"_pressenter": "ENTER gibt einen BSOD",
			"_video": "Video",
			"_selecttheme": "Wählen Sie ein Thema",
			"_relyonads": "We rely on ads to host this site, please consider whitelisting it if you like it! :)",

			
			"_winVistaupdates1": "Windows-Updates werden konfiguriert",
			"_winVistaOf": "von",
			
			"_win7configuringupdates": "Windows-Updates werden konfiguriert",
			"_win7percent": "abgeschlossen.",
			"_win7donotturnoff": "Schalten Sie den Computer nicht aus.",
			
			"_winXPupdates1": "Windows-Updates werden konfiguriert...",
			"_winXPupdates2": "Lassen Sie den Computer bis zum Abschluss dieses Vorgangs angeschlossen.",
			
			"_win10updates1": "Windows 10 wird installiert",
			"_win10updates2": "Ihr PC wird mehrmals neu gestartet.",
			
			"_win10updates3": "Kopieren von Dateien",
			"_win10updates4": "Installieren von Funktionen und Treiber",
			"_win10updates5": "Konfigurieren von Einstellungen"
			
			
        },
		
		
		
		        "turkish": {
            "_fakewindowsupdates": "8Fake Windows Update Screens",
            "_prankyourfriends": "8Prank your friends and colleagues with fake update screens!",
			"_pressf11": "8Press F11 to go fullscreen",
			"_pressenter": "8Press ENTER to cause a BSOD",
			"_video": "8Video Overview",
			"_selecttheme": "8Select a theme",
			"_relyonads": "8We rely on ads to host this site, please consider whitelisting it if you like it! :)",

			
			"_winVistaupdates1": "8Configuring updates: Stage",
			"_winVistaOf": "8of",
			
			"_win7configuringupdates": "8Configuring Windows Updates",
			"_win7percent": "8complete.",
			"_win7donotturnoff": "8Do not turn off your computer.",
			
			"_winXPupdates1": "8Installing Windows Updates...",
			"_winXPupdates2": "8Do not turn off or unplug your computer.",
			
			"_win10updates1": "8Installing Windows 10",
			"_win10updates2": "8Your PC will restart several times. Sit back and relax.",
			
			"_win10updates3": "8Copying Files",
			"_win10updates4": "8Installing features and drivers",
			"_win10updates5": "8Configuring Settings"
			
			
        },
		
		
		
		"polish": {
            "_fakewindowsupdates": "Fałszywe okno Windows Update",
            "_prankyourfriends": "Nabierz swoich znajomych przy pomocy fałszywego okna aktualizacji!",
"_pressf11": "Naciśnij F11 by przejść w tryb pełnoekranowy",
"_pressenter": "Naciśnij ENTER aby uruchomić BSOD (bluecreen)",
"_video": "Podgląd wideo",
"_selecttheme": "Wybierz motyw",
"_relyonads": "Nasza strona utrzymuje się z reklam, jeżeli Ci się podoba dodaj ją do białej listy! :)",


"_winVistaupdates1": "Konfigurowanie aktualizacji: Etap",
"_winVistaOf": "z",


"_win7configuringupdates": "Konfigurowanie aktualizacji Windows",
"_win7percent": "ukończono.",
"_win7donotturnoff": "Nie wyłączaj komputera.",


"_winXPupdates1": "Instalowanie aktualizacji Windows...",
"_winXPupdates2": "Nie wyłączaj komputera.",


"_win10updates1": "Instalowanie Windows 10",
"_win10updates2": "Twój komputer może się uruchomić ponownie kilka razy. Usiądź i się zrelaksuj.",


"_win10updates3": "Kopiowanie plików",
"_win10updates4": "Instalowanie funkcji i sterowników",
"_win10updates5": "Konfigurowanie ustawień"
        },
		
		
		"italian": {
            "_fakewindowsupdates": "Schermata di Windows Update finta",
            "_prankyourfriends": "Prendi in giro i tuoi amici e colleghi con finte schermate di aggiornamento!",
                       "_pressf11": "Premi F11 per entrare in modalità schermo intero",
                       "_pressenter": "Premi “Invio” per causare una schermata blu",
                       "_video": "Panoramica Video",
                       "_selecttheme": "Seleziona un tema",
                       "_relyonads": "Tiriamo avanti grazie alla publicità su questo sito, per favore considera di metterci nella whitelist se apprezzi questo servizio! :)",
                       
                       "_winVistaupdates1": "Configurazione degli aggiornamenti: Passo",
                       "_winVistaOf": "di",
                       
                       "_win7configuringupdates": " Configurazione degli aggiornamenti di Windows",
                       "_win7percent": "completato.",
                       "_win7donotturnoff": "Non spegnere il computer.",
                       
                       "_winXPupdates1": "Sto installando gli aggiornamenti di Windows...",
                       "_winXPupdates2": " Non spegnere o scollegare il computer.",
                       
                       "_win10updates1": "Installando Windows 10",
                       "_win10updates2": "Il tuo PC verrà riavviato diverse volte. Siediti e rilassati.",
                       
                       "_win10updates3": "Copia dei file",
                       "_win10updates4": "Installazione delle funzionalità e driver",
                       "_win10updates5": "Configurazione delle impostazioni"
                       
                       
 
        },

		

		
		
		        "hungarian": {
            "_fakewindowsupdates": "Hamis Windows Frissítő Képernyők",
            "_prankyourfriends": "Vicceld meg a barátaidat és kollégáidat hamis frissítő képernyőkkel!",
			"_pressf11": "A teljes képernyős módhoz üsd le az F11-et.",
			"_pressenter": "Üss ENTER-t az azonnali BSOD-hoz (kékhalálhoz)!",
			"_video": "Videós bemutató",
			"_selecttheme": "Válassz megjelenést",
			"_relyonads": "Reklámok bevételeiből tartjuk fenn a weboldalt; kérlek, tedd fehérlistára, ha tetszik :)",
			
			"_winVistaupdates1": "A Windows frissítése: jelenlegi szakasz: ",
			"_winVistaOf": "ennyiből:",
			
			"_win7configuringupdates": "A Windows frissítések konfigurálása",
			"_win7percent": "befejezve.",
			"_win7donotturnoff": "Ne kapcsolja ki a számítógépét.",
			
			"_winXPupdates1": "Windows frissítések telepítése...",
			"_winXPupdates2": "Ne kapcsolja ki és ne húzza ki a számítógépet.",
			
			"_win10updates1": "A Windows 10 telepítése",
			"_win10updates2": "A számítógép több alkalommal újra fog indulni. Dőljön hátra és relaxáljon.",
			
			"_win10updates3": "Fájlok másolása",
			"_win10updates4": "Illesztőprogramok és szolgáltatások telepítése",
			"_win10updates5": "Beállítások konfigurálása"
			
			

        },
		
		
		
		
"korean": {
            "_fakewindowsupdates": "저 업데이트중이거든요!? 힝 속았지!",
            "_prankyourfriends": "잠깐 쉬고싶다면 가짜 업데이트 화면을 띄워 커피 한잔의 여유를 즐겨보세요.",
			"_pressf11": "F11키를 누르시면 전체화면으로 전환됩니다.",
			"_pressenter": "Enter 키를 누르시면 블루스크린도 뜬답니다",
			"_video": "소개 영상",
			"_selecttheme": "사용하시는 OS를 골라주세요!",
			"_relyonads": "본 사이트 운영 비용을 마련하기 위해 광고를 게재하였습니다. 귀엽게 봐주세요. :)",
			
			"_winVistaupdates1": "서비스 팩 설치중:",
			"_winVistaOf": "/",
			
			"_win7configuringupdates": "Windows Updates 구성 중",
			"_win7percent": "완료",
			"_win7donotturnoff": "컴퓨터의 전원을 끄지 마십시오.",
			
			"_winXPupdates1": "Windows Updates 설치 중...",
			"_winXPupdates2": "컴퓨터의 전원을 끄거나 전원을 차단하지 마십시오.",
			
			"_win10updates1": "Windows 업그레이드 중",
			"_win10updates2": "PC가 여러번 다시 시작됩니다. 잠시만 기다려 주세요.",
			
			"_win10updates3": "파일 복사중",
			"_win10updates4": "기능 및 드라이버 설치중",
			"_win10updates5": "설정 구성중"
			
			

        },
		
		

		
		
		 "slovak": {
            "_fakewindowsupdates": "Falošné obrazovky Windows Update",
            "_prankyourfriends": "Vystrelte si z priateľov!",
			"_pressf11": "Pre zobrazenie na celú obrazovku stlačte F11",
			"_pressenter": "Pre BSOD stlačte ENTER",
			"_video": "Videoprehľad",
			"_selecttheme": "Vyberte tému",
			"_relyonads": "Hosting tejto stránky sa spolieha na reklamy. Ak sa Vám páči, zvážte ,prosím, whitelisting! :)",
			
			"_winVistaupdates1": "Konfigurácia aktualizácií: Časť",
			"_winVistaOf": "z",
			
			"_win7configuringupdates": "Konfigurácia aktualizácií Windows",
			"_win7percent": "dokončené.",
			"_win7donotturnoff": "Nevypínajte počítač.",
			
			"_winXPupdates1": "Inštalácia aktualizácií Windows...",
			"_winXPupdates2": "Neodpájajte a nevypínajte počítač.",
			
			"_win10updates1": "Inštaluje sa Windows 10",
			"_win10updates2": "Počítač sa niekoľkokrát reštartuje. Posaďte sa a relaxujte.",
			
			"_win10updates3": "Kopírovanie súborov",
			"_win10updates4": "Inštalujú sa funkcie a ovládače",
			"_win10updates5": "Konfigurácia nastavení"
			
		 },
		 
		 

		 
		 
		
        "portuguese": {
            "_fakewindowsupdates": "Telas de Fake Windows Update",
            "_prankyourfriends": "Faça uma pegadinha com os seus colegas usando o Fake Windows Update!",
			"_pressf11": "Pressione F11 para ativar a tela cheia.",
			"_pressenter": "Pressione ENTER para causar a tela azul da morte",
			"_video": "Video Demonstração",
			"_selecttheme": "Selecione a versão do sistema operacional",
			"_relyonads": "Agente depende de propaganda para manter a hospedagem, por favor considere colocar nosso site no whitelist! :)",
			
			"_winVistaupdates1": "Configurando updates: Etapa",
			"_winVistaOf": "de",
			
			"_win7configuringupdates": "Configurando Windows Updates",
			"_win7percent": "completo.",
			"_win7donotturnoff": "Não desligue o seu computador.",
			
			"_winXPupdates1": "Instalando Windows Updates...",
			"_winXPupdates2": "Não desligue ou desconecte o seu computador.",
			
			"_win10updates1": "Instalando o Windows 10",
			"_win10updates2": "Seus computador irá reiniciar várias vezes. Sente e relaxe.",
			
			"_win10updates3": "Copiando Arquivos",
			"_win10updates4": "Instalando componentes e drivers",
			"_win10updates5": "Configurando o sistema"
			
			

        },
		
		
		
		"hebrew": {
            "_fakewindowsupdates": "מסכי עדכון ווינדוס מזוייפים",
            "_prankyourfriends": "!הטרל את חבריך ושותפיך עם מסכי עדכון מזוייפים!",
			"_pressf11": "לחץ על F11 על מנת להכנס למסך מלא",
			"_pressenter": "לחץ על Enter על מנת לגרום ל-BSOD",
			"_video": "סקירת וידאו",
			"_selecttheme": "בחר ערכת נושא",
			"_relyonads": "אנו נסמכים על מודעות בשביל לאחסן אתר זה, אנא שקול להוסיף אותנו לרשימה הלבנה אם אהבת את זה! :)",
			"_winVistaupdates1": "מגדיר עדכונים: שלב",
			"_winVistaOf": "מתוך",
			"_win7configuringupdates": "מגדיר עדכוני ווינדוס",
			"_win7percent": "הושלם.",
			"_win7donotturnoff": "אל תכבה את המחשב שלך.",
			"_winXPupdates1": "מתקין עדכוני ווינדוס...",
			"_winXPupdates2": "אל תכבה או תנתק את המחשב שלך.",
			"_win10updates1": "מתקין את Windows 10",
			"_win10updates2": "המחשב שלך יבצע אתחול מספר פעמים.",
			"_win10updates3": "מעתיק קבצים",
			"_win10updates4": "מתקין תכונות והתקנים",
			"_win10updates5": "מגדיר הגדרות"
			
			

        },
		
		
				
		
		
         "finnish": {
             "_fakewindowsupdates": "Väärennetyt Windows Päivitysruudut",
             "_prankyourfriends": "Pilaile ystäviesi ja työkavereidesi kustannuksella näillä väärennetyillä päivitysruuduilla!",
             "_pressf11": "Paina F11 Päästäksesi koko ruudun tilaan",
             "_pressenter": "Paina Enter aiheuttaaksesi sinisen ruudun",
             "_video": "yleiskatsaus videolla",
             "_selecttheme": "Valitse teema",
             "_relyonads": "Luotamme mainoksiin sivuston ylläpitämiseksi, harkitsethan sivuston sallimista mainoksenesto-ohjelmassa! :)",

             "_winVistaupdates1": "Määritetään Windows-päivityksiä: vaihe",
             "_winVistaOf": "/",

             "_win7configuringupdates": "Määritetään Windows-päivityksiä",
             "_win7percent": "valmis.",
             "_win7donotturnoff": "Älä katkaise virtaa tietokoneesta.",

             "_winXPupdates1": "Määritetään Windows-päivityksiä...",
             "_winXPupdates2": "Älä katkaise koneen virtaa tai irrota sen virtajohtoa.",

             "_win10updates1": "Päivitetään Windowsin versiota",
             "_win10updates2": "Tietokone käynnistyy uudelleen useuta kertoja.",

             "_win10updates3": "Kopioidaan tiedostoja",
             "_win10updates4": "Määritetään ominaisuuksia ja ajureita",
             "_win10updates5": "Määritetään asetuksia"



         },
		 
		 
		 
		
		
		        "turkish": {
            "_fakewindowsupdates": "Sahte Windows Güncelleştirme Ekranı",
            "_prankyourfriends": "Arkadaşlarınızı bu site sayesinde kandıra bilirsin",
            "_pressf11": "F11 Basıp Ekranı Kaplaya Bilirsin Gerçekci Gözükür",
            "_pressenter": "404 Error içi ENTERE Basın",
            "_video": "Video Overview",
            "_selecttheme": "Temayı Seç",
            "_relyonads": "Biz Bu Reklamlar Sayesinde Siteyi Geçindiriyoruz Lütfen Reklam Engelleyiciyi Kaldırın",
            
            "_winVistaupdates1": "Güncellemeler Hazırlanıyor: Aşama",
            "_winVistaOf": "of",
            
            "_win7configuringupdates": "Bilgisayar Güncellemesi Hazırlanıyor..",
            "_win7percent": "Tamamlandı.",
            "_win7donotturnoff": "Bilgisayarı Kapatmayınız...",
            
            "_winXPupdates1": "Windows Güncelleştiriliyor...",
            "_winXPupdates2": "Bilgisayarı Kapatmayın.",
            
            "_win10updates1": "Windows 10 Yükleniyor",
            "_win10updates2": "Bilgisayarınız Birkaç Kere Yeniden Başlatılacak",
            
            "_win10updates3": "Dosyalar Kopyalanıyor",
            "_win10updates4": "Güncel Sürücüler Indiriliyor",
            "_win10updates5": "Ayarlar Yapılıyor"
            
            

        },
		
		"ukrainian": {
            "_fakewindowsupdates": "Підроблені 'оновлення' Windows",
            "_prankyourfriends": "Надуріть своїх друзів та колег!",
"_pressf11": "Натисніть F11, щоб перейти у повноекранний режим",
"_pressenter": "Натисніть ENTER, щоб викликати 'синій екран смерті'",
"_video": "Відео-Огляд",
"_selecttheme": "Виберіть тему",
"_relyonads": "Реклама допомагає нам підтримувати наш сайт, будь ласка, відключіть AdBlock :)",
"_winVistaupdates1": "Налаштування оновлень: Етап",
"_winVistaOf": "із",
"_win7configuringupdates": "Налаштування оновлень Winows",
"_win7percent": "Готово.",
"_win7donotturnoff": "Не вимикайте ваш комп'ютер.",
"_winXPupdates1": "Інсталювання оновлень Windows...",
"_winXPupdates2": "Не вимикайте ваш комп'ютер.",
"_win10updates1": "Інсталювання Windows 10",
"_win10updates2": "Ваш комп'ютер перезапуститься кілька разів. Відкиньтесь у кріслі та відпочиньте.",
"_win10updates3": "Копіювання файлів",
"_win10updates4": "Інсталювання компонентів та драйверів",
"_win10updates5": "Налаштування параметрів"

        },
		
		
		        "arabic": {
            "_fakewindowsupdates": "شاشة تحديث ويندوز وهمية",
            "_prankyourfriends": "إخدع أصدقائك مع شاشة التحديث الوهمية!",
			"_pressf11": "لتكبير الشاشة F11 إضغط على ",
			"_pressenter": "BSOD لإحداث  Enter إضغط على ",
			"_video": "نظرة عامة",
			"_selecttheme": "إختر الثيم",
			"_relyonads": "نحن نعتمد على الإعلانات لاستضافة هذا الموقع، يرجى أضافة الموقع إلى القائمة البيضاء إذا كنت ترغب في ذلك! :)",
			
			"_winVistaupdates1": "تجهيز التحديثات: المرحلة",
			"_winVistaOf": "من",
			
			"_win7configuringupdates": "تجهيز تحديثات ويندوز",
			"_win7percent": "إكتمل.",
			"_win7donotturnoff": "لا تغلق الجهاز.",
			
			"_winXPupdates1": "تثبيت تحديثات ويندوز...",
			"_winXPupdates2": "لا تغلق الجهاز.",
			
			"_win10updates1": "تثبيت ويندوز 10",
			"_win10updates2": "سيتم إعادة تشغيل جهازك عدة مرات، خذ راحة.",
			
			"_win10updates3": "يتم نسخ الملفات",
			"_win10updates4": "يتم تثبيت برامج التشغيل",
			"_win10updates5": "تكوين الإعدادات"
			
			

        },
		
		
		 "french": {
            "_fakewindowsupdates": "Faux écrans de mises à jour Windows",
            "_prankyourfriends": "Piégez vos amis et vos collègues avec de faux écrans de mises à jour !",
"_pressf11": "Appuyez sur F11 pour passer en plein écran",
"_pressenter": "Appuyez sur Entrée pour faire apparaître un écran bleu de la mort (BSOD)",
"_video": "Aperçu vidéo",
"_selecttheme": "Sélectionnez un thème",
"_relyonads": "Les revenus du site sont basés sur la publicité, pensez à désactiver votre bloqueur de pub s’il vous plaît :)",
"_winVistaupdates1": "Configuration des mises à jour : En cours",
"_winVistaOf": "sur",

"_win7configuringupdates": "Configuration des mises à jour Windows",
"_win7percent": "effectués.",
"_win7donotturnoff": "N’éteignez pas votre ordinateur.",
"_winXPupdates1": "Installation des mises à jour Windows ...",
"_winXPupdates2": "N’éteignez pas votre ordinateur.",
"_win10updates1": "Installation de Windows 10",
"_win10updates2": "Votre PC va redémarrer à plusieurs reprises. Calez-vous dans votre fauteuil et détendez-vous.",
"_win10updates3": "Copie des fichiers",
"_win10updates4": "Installation des fonctionnalités et des drivers",
"_win10updates5": "Configuration des paramètres"
        }
		
    };

    // Function for swapping dictionaries
    set_lang = function (dictionary) {
        $("[data-translate]").text(function () {
            var key = $(this).data("translate");
            if (dictionary.hasOwnProperty(key)) {
                return dictionary[key];
            }
        });
    };

    // Swap languages when menu changes
    $("#langswitch").on("change", function () {
        var language = $(this).val().toLowerCase();
        if (dictionary.hasOwnProperty(language)) {
            set_lang(dictionary[language]);
			localStorage.setItem("lang", language);
        }
    });
	
	
    $("#en").on("click", function () {
	localStorage.setItem("lang", "english");
	set_lang(dictionary.english);
    });
	
	$("#es").on("click", function () {
	localStorage.setItem("lang", "spanish");
	set_lang(dictionary.spanish);
    });
	
	
	$("#de").on("click", function () {
	localStorage.setItem("lang", "german");
	set_lang(dictionary.german);
    });
	
	$("#ru").on("click", function () {
	localStorage.setItem("lang", "russian");
	set_lang(dictionary.russian);
    });
	
	$("#tr").on("click", function () {
	localStorage.setItem("lang", "turkish");
	set_lang(dictionary.turkish);
    });
	
	$("#it").on("click", function () {
	localStorage.setItem("lang", "italian");
	set_lang(dictionary.italian);
    });
	
	$("#ptbr").on("click", function () {
	localStorage.setItem("lang", "portuguese");
	set_lang(dictionary.portuguese);
    });
	
	$("#pl").on("click", function () {
	localStorage.setItem("lang", "polish");
	set_lang(dictionary.polish);
    });	
	
	$("#fi").on("click", function () {
	localStorage.setItem("lang", "finnish");
	set_lang(dictionary.finnish);
    });	
	
	$("#he").on("click", function () {
	localStorage.setItem("lang", "hebrew");
	set_lang(dictionary.hebrew);
    });	
	
	$("#ar").on("click", function () {
	localStorage.setItem("lang", "arabic");
	set_lang(dictionary.arabic);
    });	
	
	$("#hu").on("click", function () {
	localStorage.setItem("lang", "hungarian");
	set_lang(dictionary.hungarian);
    });	
	
	$("#sk").on("click", function () {
	localStorage.setItem("lang", "slovak");
	set_lang(dictionary.slovak);
    });	
	
	$("#ua").on("click", function () {
	localStorage.setItem("lang", "ukrainian");
	set_lang(dictionary.ukrainian);
    });	
	
	
	$("#ko").on("click", function () {
	localStorage.setItem("lang", "korean");
	set_lang(dictionary.korean);
    });	
	
	
		$("#fr").on("click", function () {
	localStorage.setItem("lang", "french");
	set_lang(dictionary.french);
    });	
	
    // Set initial language to English
	
	
	
	var getLanguage = localStorage.getItem('lang') || 'english';
set_lang(dictionary[getLanguage]);



 
	
	
	
	
	
	
	
	
	

});