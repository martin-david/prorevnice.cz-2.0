// Shared candidate data used by both the candidate list page (`/kandidati`) and the
// individual candidate detail pages (`/kandidati/$slug`). Keeping this in one place
// avoids duplicating candidate info across the two route files.

// Eagerly import every candidate photo from src/assets so Vite bundles, hashes and
// copies them into the production build. Keyed by filename (e.g. "Libor Kvasnička.jpg")
// so candidate entries below can reference photos by their plain filename.
const photoModules = import.meta.glob("/src/assets/*.{jpg,jpeg,png}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const photos: Record<string, string> = Object.fromEntries(
  Object.entries(photoModules).map(([path, url]) => [path.replace("/src/assets/", ""), url]),
);

export function getCandidatePhoto(photo?: string): string | undefined {
  return photo ? photos[photo] : undefined;
}

/** Strips diacritics, lowercases and hyphenates a name into a URL-safe slug. */
export function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export type Candidate = {
  order: number;
  name: string;
  role?: string;
  bio: string;
  fullBio: string[];
  photo?: string;
};

export const candidates: Candidate[] = [
  {
    order: 1,
    name: "Libor Kvasnička",
    role: "Lídr kandidátky",
    bio: "Podnikatel v oboru maloobchodní prodej, provozovatel pěstitelské pálenice a moštárny. Právě v zastupitelstvu pracuji 28 let, třikrát byl radním a jedno období starostou. Dlouhodobě pracuji ve finančním výboru a věnuji se financím, energetice a problematice životního prostředí.",
    fullBio: [
      "Podnikatel v oboru maloobchodní prodej, provozovatel pěstitelské pálenice a (opravdové) moštárny.",
      "Od roku 2010 registrovaný příznivec hnutí Starostové a nezávislí.",
      "Pro Řevnice pracuji v zastupitelstvu již 28 let. Během těch let jsem byl třikrát radním, jedno volební období starostou, dlouhodobě pracuji ve finančním výboru (třetí volební období i na kraji). Věnuji se financím, energetice, agendě životního prostředí a také povodňové problematice.",
      "Co se týká minulého volebního období, tam mám radost z toho, že se daří realizovat náš nápad a rozeběhla se výstavba FVE na prameništi a čistírně odpadních vod. Věřím, že do voleb budeme energii z těchto zdrojů využívat a ušetříme tak prostředky na další investice do vodohospodářské infrastruktury. Také s výstavbou nových komunikací jsme pokročili, i když to nebylo vždy snadné.",
      "A výhled do budoucna? Základní investice jsou jasné. Rekonstrukce náměstí, práce spojené s rekonstrukcí krajské komunikace a pokud získáme dotaci a seženeme prostředky, přístavba pavilónu školy. Vedle toho jsou samozřejmě investice do zpevněných komunikací, zeleň a mnoho dalšího.",
    ],
    photo: "Libor Kvasnička.jpg",
  },
  {
    order: 2,
    name: "Ing. Kateřina Hlaváčková (Šupáčková)",
    role: "Kandidátka",
    bio: "Finanční manažerka v oboru evropských dotací. Druhé volební období působím jako zastupitelka města a členka rady. Pracuji ve finančním výboru a předsedám komisi životního prostředí. Prioritou je volnočasové vyžití pro starší děti a mládež.",
    fullBio: [
      "Státní úředník - Finanční manažerka v oboru evropských dotací na MHMP.",
      "V Řevnicích žiji již 20 let a většinu této doby se aktivně věnuji komunální politice. Druhé volební období působím jako zastupitelka města, nyní také jako členka rady. Už 16 let pracuji ve finančním výboru a v současnosti předsedám komisi životního prostředí.",
      "Řevnice jsou pro mě krásným a klidným místem, které se stalo mojí srdeční záležitostí. Mám ráda zdejší přírodu, bohatý komunitní život i spolkovou činnost. Podpora místních spolků proto patří mezi mé dlouhodobé priority. Sama jsem aktivní členkou Sokola, Sboru dobrovolných hasičů a hrdou baráčnicí.",
      "Za jednu z oblastí, které si zaslouží větší pozornost, považuji nabídku neorganizovaného volnočasového vyžití pro starší děti a mládež. Tento požadavek ostatně potvrdilo i dotazníkové šetření při přípravě nového Strategického plánu města. Před několika lety jsem iniciovala vybudování workoutového hřiště pod házenou a nyní bych ráda navázala podporou vzniku skateparku či jiného moderního zázemí, kde budou moci mladí lidé aktivně a smysluplně trávit svůj volný čas. Chci, aby Řevnice byly městem, které myslí na všechny generace.",
    ],
    photo: "Kateřina Hlaváčková (Šupáčková).png",
  },
  {
    order: 3,
    name: "Ing. Jakub Veselka, Ph.D.",
    role: "Kandidát",
    bio: "Konzultant v oblasti energetiky, udržitelnosti budov a projektového řízení. V Řevnicích žijeme již více než osm let. Kandidaturu vnímám jako příležitost vrátit Řevnicím něco z toho, co nám za ta léta daly a přispět k jejich dalšímu rozvoji.",
    fullBio: [
      "Konzultant v oblasti energetiky, udržitelnosti budov a projektového řízení.",
      "Vzděláním jsem stavař a architekt, profesně se více než deset let věnuji energetice budov, udržitelné výstavbě a řízení investičních projektů v České republice i v zahraničí. Právě témata kvalitního rozvoje města, hospodárného nakládání s energiemi a odpovědného plánování chci přinést i do práce zastupitelstva.",
      "V Řevnicích žijeme s manželkou a synem už více než osm let. Od prvních dnů jsme si zdejší život zamilovali – kombinaci jedinečné krajiny, aktivní komunity a atmosféry města, které si dosud zachovalo svůj charakter. Kandidaturu vnímám jako příležitost vrátit Řevnicím něco z toho, co nám za ta léta daly, a přispět k dalšímu rozvoji jejich potenciálu.",
      "Díky studiu, stážím a pracovním příležitostem jsem měl možnost delší dobu působit ve Švýcarsku, Rakousku, Norsku, Macau, Spojených arabských emirátech i Keni. Poznal jsem různé přístupy k rozvoji měst, veřejného prostoru i hospodaření s energiemi. Jsem přesvědčen, že i menší město může využívat moderní řešení, aniž by ztratilo svou identitu.",
      "V Řevnicích se chci zasadit zejména o promyšlený rozvoj města, kvalitní veřejný prostor, odpovědné investice a podporu aktivního života všech generací.",
      "Ve volném čase se kromě rodiny a sportu dlouhodobě věnuji práci s dětmi a mládeží. Již téměř dvacet let pomáhám organizovat sportovní tábory v Českém lese.",
    ],
    photo: "Jakub Veselka.jpg",
  },
  {
    order: 4,
    name: "Ing. Jiří Buchal",
    role: "Kandidát",
    bio: "Podnikatel, investor, manažer. Žiji od narození v Řevnicích a vychovávám 4 děti. Zastupitelem jsem byl 12 let. Chci se věnovat podpoře mládeže a projektům na podporu bydlení. Řevnice potřebují omladit a vytvořit podmínky pro rodiny.",
    fullBio: [
      "Podnikatel, investor, manažer.",
      "Žiji od narození v Řevnicích, vychovávám 4 děti a také zde podnikám. Zastupitelem města jsem byl 12 let. Ve městě jsem se vždy zaměřoval na protipovodňovou politiku a práci s mládeží, v mládí hlavně v oddíle Tuláci.",
      "V následujících 4 letech bych se rád věnoval podpoře mládeže, projektům na podporu bydlení, nalákání nebo udržení mladých, kteří si Řevnice vyberou za svůj domov. Chtěl bych, abychom nebyli město s nejvyšším věkovým průměrem od Prahy po Beroun. Řevnice potřebují omladit a vytvořit podmínky pro rodiny a páry, které chtějí porodit a vychovávat děti v Řevnicích. Rád bych pomohl vyřešit pozemky pod a kolem fotbalového hřiště, abychom zde mohli vybudovat moderní a přirozené zázemí pro sport, multifunkční hřiště a možnosti nejen pro dospívající sportující mládež.",
      "Chci rozvoj Řevnic. Jedině, co se rozvíjí, to se zlepšuje. K tomu potřebujeme silnou mladou generaci respektující a žijící v souladu s občany, díky kterým město rozkvétalo v minulosti i současnosti. Tuto generaci si musíme vytvořit a vychovat. Nikdo jiný to za nás neudělá.",
    ],
    photo: "Jiří Buchal.jpg",
  },
  {
    order: 5,
    name: "Bc. Ondřej Lánský",
    role: "Kandidát",
    bio: "Rodák ze Řevnic, věnuji se odpadovému hospodářství a ochranu přírody. Zaměřuji se na ochranu a rozvoj městských lesů, podporu biodiverzity a zadržování vody v krajině. Chci zachovat jedinečný přírodní charakter Řevnic.",
    fullBio: [
      "Jsem rodák ze Řevnic, je mi 46 let a mám tři děti. Celý život jsem spjatý s místní krajinou, lesy a přírodou, které považuji za jednu z největších hodnot našeho města. Ve své profesi se věnuji odpadovému hospodářství a zároveň se dlouhodobě zajímám o ochranu přírody, myslivost a udržitelné hospodaření v krajině.",
      "V následujících čtyřech letech bych se rád zaměřil na ochranu a rozvoj městských lesů, podporu biodiverzity, zadržování vody v krajině a citlivá opatření, která pomohou zachovat zdravé životní prostředí i pro budoucí generace. Podporuji obnovu remízků, biokoridorů a dalších krajinných prvků, které zvyšují odolnost krajiny vůči suchu i přívalovým dešťům a zároveň podporují druhovou rozmanitost. Stejně důležité je podle mě hledání rovnováhy mezi rekreačním využíváním lesa a ochranou živočichů tak, aby měl les dostatek klidu pro své přirozené fungování.",
      "Chci, aby si Řevnice zachovaly svůj jedinečný přírodní charakter. Měli bychom pečovat o lesy a krajinu tak, abychom je budoucím generacím předali v lepším stavu, než v jakém jsme je převzali. Jsem přesvědčen, že odpovědný přístup k přírodě je investicí, která se vrátí každému z nás...",
      "Zdravý les, pestrá krajina a voda v přírodě nejsou překážkou pro rozvoj Řevnic, jsou jejich největším bohatstvím.",
    ],
    photo: "Ondřej Lánský.jpg",
  },
  {
    order: 6,
    name: "Ing. Jan Lojda, Ph.D.",
    role: "Kandidát",
    bio: "Velkým benefitem Řevnic je jedinečná okolní krajina. Snažím se zpřístupnit tyto přínosy občanům, realizoval jsem naučnou stezku Burešovka a vzdělávací akce v lese. Rád bych navázal na tuto činnost a využil své zkušenosti.",
    fullBio: [
      "Velkým benefitem Řevnic je jedinečná okolní krajina, ve které mohou občané Řevnic relaxovat, sportovat, vzdělávat se, rozvíjet se. Jako obrovskou výhodu vnímám, že významná část krajiny extravilánu je ve vlastnictví obce. To umožňuje tyto přínosy rozvíjet a nabízet je občanům k trávení volnočasových aktivit nebo k čerpání výhod, které z toho plynou. V předchozích letech jsem se vynasnažil zpřístupnit tyto užitky občanům, ať se jedná např. o realizaci naučné stezky Burešovka, vzdělávací akce v lese nebo spolupráci s kroužky pro děti. V poslední době jsem se aktivně zapojil do připomínkování krajinného plánu, oceňuji pojetí přípravy této důležité koncepce a možnost občanů Řevnic vyjádřit své, byť často protichůdné, názory.",
      "Rád bych navázal na tuto činnost a využil své předchozí nabyté zkušenosti.",
    ],
    photo: "Jan Lojda.jpg",
  },
  {
    order: 7,
    name: "Mgr. Martina Pražská (Březinová)",
    role: "Zastupitelka",
    bio: "Středoškolská učitelka, místopředsedkyně Mysliveckého spolku Řevnice a turistického spolku Brdské hory. Prioritou je klidný charakter našeho městečka s dostatkem zeleně, dobrá dopravní dostupnost a podpora místních spolků.",
    fullBio: [
      "V Řevnicích žiji od narození a nyní pracuji jako středoškolská učitelka. Mimo svou profesi působím jako místopředsedkyně Mysliveckého spolku Řevnice a turistického spolku Brdské hory 11. Mou prioritou je klidný charakter našeho městečka s dostatkem zeleně pro současné i budoucí generace, dobrá dopravní dostupnost a podpora místních spolků a rozvoj veřejných služeb.",
    ],
    photo: "Martina Pražská (Březinová).jpg",
  },
  {
    order: 8,
    name: "Anna Doležalová (Karasová)",
    role: "Kandidátka",
    bio: "Podnikatelka, trenérka jezdectví. V Řevnicích žiji celý svůj život, stejně jako celá moje rodina. S mou maminkou provozujeme dětskou herničku Fabiánek. Chci se zasadit o to, aby se nám tady všem žilo ještě lépe.",
    fullBio: [
      "Podnikatelka, trenérka jezdectví.",
      "V Řevnicích žiji celý svůj život, stejně jako celá moje rodina.",
      "Ráda se starám o lidi i přírodu. Společně s mou maminkou provozujeme dětskou herničku Fabiánek a staráme se, aby děti i rodiče měli v Řevnicích své místo. Naše město je krásné a já se chci zasadit o to, aby se nám tady všem žilo ještě lépe.",
    ],
    photo: "Anna Doležalová (Karasová).jpg",
  },
  {
    order: 9,
    name: "Ing. Jan Šimůnek",
    role: "Kandidát",
    bio: "Projektový manažer stavebně-investičních záměrů. Do Řevnic jsem se přestěhoval před 32 lety. Jedno období jsem působil v zastupitelstvu a architektonické komisi. Chci usilovat o efektivnější a rychlejší přípravu a realizaci projektů.",
    fullBio: [
      "Projektový manažer stavebně-investičních záměrů.",
      "Do Řevnic jsem se přestěhoval před 32 lety a za tu dobu jsem sledoval, jak se naše město proměnilo. Jedno volební období jsem působil v zastupitelstvu a v architektonické komisi; podílel jsem se na vzniku řady realizovaných investic, například rozšíření mateřské školky, nového dětského hřiště nebo úprav přednádražního prostoru.",
      "Chci usilovat o to, aby příprava a realizace dalších projektů probíhala efektivněji a rychleji. Podporuji cílené finanční příspěvky obce na kulturní akce, vzdělávání dětí a mládeže a na činnost místních spolků. Respektuji každého, kdo se podílí na veřejném dění; umím naslouchat oponentům a čerpat z jejich zkušeností.",
      "Jsem zastáncem rovnoměrného a transparentního rozdělování rozpočtu ve prospěch většiny obyvatel a věřím, že o rozvoji města by měli rozhodovat jeho občané za podpory odborníků.",
    ],
    photo: "Jan Šimůnek.jpg",
  },
  {
    order: 10,
    name: "Matěj Krofta",
    role: "Kandidát",
    bio: "Student Univerzity Karlovy, administrátor projektů a personalista. Zaměřuji se na oblast kultury, vzdělávání a práci s dětmi a mládeží. Chci, aby Řevnice byly pro mladé lidi lákavé a přitažlivé s kvalitní dopravou a dostupným bydlením.",
    fullBio: [
      "Jsem student Univerzity Karlovy (FHS UK), administrátor projektu a personalista v Probační a mediační službě. Mezi mé zájmy patří scénicko-historický šerm.",
      "V Řevnicích bydlím téměř 20 let. Zaměřuji se především na oblast kultury, vzdělávání a práci s dětmi a s mládeží. Mám zkušenosti s fungováním a s vedením studentského spolku a z prostředí akademických senátů. Vedl jsem i kroužek v Domě dětí a mládeže Prahy 7. Jsem členem Mladých Starostů a registrovaný příznivec Starostů a nezávislích.",
      "Chtěl bych zastupovat především mladou generaci a pomáhat k tomu, aby Řevnice byly pro mladé lidi lákavé z hlediska trávení volného času, pracovních podmínek a dostupnosti bydlení. Chtěl bych, aby Řevnice byly i nadále udržované jako město s kladným vztahem k přírodě a zároveň, aby se postupně modernizovalo a bylo tak stále přitažlivé (nejen) pro mladé lidi, i když by to nemělo být na úkor zachování památek. Líbí se mi, že se město Řevnice hodně věnuje své ZŠ a zájmovým a sportovním kroužkům pro děti a mládež.",
      "Za další důležitou oblast považuji dostupnou a kvalitní dopravu, jelikož hodně našich občanů jezdí za školou či za prací buď do Prahy nebo do Berouna či do přilehlých oblastí.",
    ],
    photo: "Matěj Krofta.jpg",
  },
  {
    order: 11,
    name: "RNDr. Petr Čermák, Ph.D.",
    role: "Kandidát",
    bio: "Fyzik a vysokoškolský pedagog na Matfyzu. V Řevnicích vedu dětské kroužky robotiky a podílím se na provozu místní robotické dílny. Chci přinést věcný, racionální a hospodárný přístup do komunální politiky.",
    fullBio: [
      "Jsem fyzik a vysokoškolský pedagog na Matfyzu, kde se má skupina zabývá výzkumem magnetismu a automatizací experimentů. V Řevnicích žiji s rodinou, vedu dětské kroužky robotiky a podílím se na provozu místní robotické dílny.",
      "Do komunální politiky chci přinést věcný, racionální a hospodárný přístup. Město má především dobře zajišťovat společné služby a infrastrukturu, rozhodovat transparentně a vytvářet prostor pro aktivitu občanů, spolků a podnikatelů. Nemá lidem zbytečně určovat, jak mají žít, ani prosazovat nákladná řešení ve prospěch úzkých zájmových skupin.",
      "Chci žít ve městě, kde si lidé nehází klacky pod nohy – ani v zastupitelstvu, ani mimo něj. Kde se problémy řeší věcně, s respektem a s ohledem na to, co je skutečně ku prospěchu většiny obyvatel.",
    ],
    photo: "Petr Čermák.jpg",
  },
  {
    order: 12,
    name: "Milan Adam",
    role: "Kandidát",
    bio: "Manažer zahraničního prodeje ve společnosti Sony Music Entertainment. V Řevnicích žiji již 60 let. Město dokonale spojuje klidný život v přírodě s výhodami blízkosti Prahy. Chci zachovat Řevnice jako kvalitní bydlení pro další generace.",
    fullBio: [
      "Manažer zahraničního prodeje ve společnosti Sony Music Entertainment.",
      "V Řevnicích žiji již 60 let a jsou pro mě místem, které dokonale spojuje klidný život v přírodě s výhodami blízkosti hlavního města. Je zde bohatý společenský a kulturní život. Během roku se zde pořádá řada akcí pro děti i dospělé, od sportovních událostí až po kulturní festivaly a tradiční slavnosti. Tyto akce přispívají k pocitu sounáležitosti a umožňují lidem setkávat se a vytvářet nová přátelství.",
      "Řevnice jsou také ideálním místem pro rodinný život. Nachází se zde kvalitní občanská vybavenost, školy, školky, sportovní areály i služby potřebné pro každodenní život.",
      "Právě tyto skutečnosti jsou jedním z hlavních důvodů, proč bych rád zachoval naše město jako kvalitní bydlení pro další generace.",
    ],
    photo: "Milan Adam.jpg",
  },
  {
    order: 13,
    name: "Karel Vyleta",
    role: "Kandidát",
    bio: "Prioritou je dotáhnout revitalizaci náměstí. Pozornost věnuji novému podjezdu, který pomůže zvýšit plynulost dopravy. Důležité je řešit prostor bývalé Eurovie a každodenní chod města - údržba veřejných prostranství a komunikací.",
    fullBio: [
      "Rád bych, aby se podařilo dotáhnout do konce revitalizaci náměstí. Po mnoha dlouhých diskuzích má město připravený projekt, a teď už zbývá jen ho uvést do života. Řevnice si pěkně upravené náměstí bez kráterů v chodnících a s udržovaným trávníkem určitě zaslouží.",
      "Pozornost chci věnovat také novému podjezdu, který je plánován v rámci rekonstrukce železniční trati v místě dnešního přejezdu. Odstranění závor, u kterých dnes auta stojí dlouhé minuty, pomůže zvýšit plynulost dopravy a uleví také obyvatelům žijícím v domech na objížďce. Současné řešení pomocí retardérů nepovažuji za šťastné.",
      "Za důležité téma považuji rovněž prostor bývalé Eurovie. S novým majitelem areálu je třeba jednat a usilovat o to, aby budoucí rozvoj tohoto místa byl přínosný nejen pro něho, ale také pro obyvatele našeho města.",
      "V neposlední řadě je nutné věnovat se každodennímu chodu města a fungování technických služeb. I drobnosti jako uklizená veřejná prostranství, spravené chodníky, posekaná tráva a podobně rozhodují o tom, jestli se nám v Řevnicích žije dobře.",
    ],
    photo: "Karel Vyleta.jpg",
  },
  {
    order: 14,
    name: "Milan Bělohlávek",
    role: "Kandidát",
    bio: "Řemeslník, v Řevnicích žiji 17 let. Jako místní řemeslník znám potřeby a reálné problémy obyvatel z první ruky. Když nestojím na střeše, potkáte mě na kole nebo v horách. Chci, aby Řevnice byly bezpečným a aktivním místem pro život.",
    fullBio: [
      "V Řevnicích žiji 17 let, ale rodinná historie sahá přes Brdy až k prarodičům do Hořovic. Jako místní řemeslník znám potřeby a reálné problémy obyvatel Řevnic z první ruky. Moje práce vyžaduje absolutní soustředění a odvahu při výškových pracích. Výšky jsou mým každodenním chlebem a výsledky mé práce můžete vidět na střechách domů v naší obci i v okolí.",
      "Když zrovna nestojím na střeše, potkáte mě na kole nebo v horách. Pohyb a příroda mě nabíjí energií, a proto se aktivně zapojuji do údržby a čistoty okolních lesů, aby zůstaly krásné pro cyklisty, turisty a rodiny. Též pomáhám organizovat naše vyhlášené řevnické čarodějnice a zajišťuji jejich technické zázemí. Nejdůležitější je však pro mě rodina. Chci, aby Řevnice byly bezpečným, čistým a aktivním místem pro život.",
    ],
    photo: "Milan Bělohlávek.jpg",
  },
  {
    order: 15,
    name: "Ing. Roman Vejmelka",
    role: "Kandidát",
    bio: "Celý život se pohybuji ve stavebnictví jako projektant, stavitel i developer. Za 25 let v Řevnicích jsem vnímám krási i bolístek našeho města. Chci se zasadit o rozumný stavební rozvoj Řevnic a odmítám zakonzervování současného stavu.",
    fullBio: [
      "Za těch již 25 let, které žiji v Řevnicích, jsem se snažil navnímat většinu krás i bolístek našeho města. Celý život se pohybuji ve stavebnictví, a to v různých pozicích - jako projektant, stavitel i developer, a této oblasti bych se chtěl věnovat i na komunální úrovni ve prospěch Řevnic. Chci se zasadit o rozumný stavební rozvoj Řevnic, zásadně odmítám zakonzervování současného, dle mého názoru neutěšeného stavu.",
    ],
    photo: "Roma Vejmelka.png",
  },
];

export function getCandidateBySlug(slug: string): Candidate | undefined {
  return candidates.find((c) => slugify(c.name) === slug);
}
