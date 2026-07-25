// Shared article data used by both the article list page (`/clanky`) and the
// individual article detail pages (`/clanky/$slug`). Real articles are
// transcribed verbatim from the source PDFs in `src/assets/` — wording is not
// altered, only split into structured blocks for rendering.

/** A single rendering unit inside an article's full text. */
export type ArticleBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  /** Full verbatim content of the article, in original order. Omitted for placeholders. */
  content?: ArticleBlock[];
};

/** Strips diacritics, lowercases and hyphenates a title into a URL-safe slug. */
export function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export const articles: Article[] = [
  {
    slug: "pro-revnice-spolecne-kandidujeme",
    title: "Pro Řevnice: spojujeme síly pro komunální volby",
    date: "2026-06-01",
    excerpt:
      "Kandidáti uskupení Řevnice SPOLEČNĚ spojili síly s hnutím Pro Řevnice na jedné společné kandidátce. Představujeme, co nás spojuje a na čem chceme dále stavět.",
    content: [
      {
        type: "paragraph",
        text: "Vážení spoluobčané, pro letošní podzimní komunální volby jsme se rozhodli s kandidáty uskupení Řevnice SPOLEČNĚ spojit síly a kandidovat na jedné společné kandidátce Pro Řevnice. Spojuje nás dlouhodobé přátelství, široká shoda v názorech a přesvědčení, že netříštění sil je pro město výhodnější než soupeření podobných programů. Věříme, že právě společným postupem můžeme nabídnout občanům Řevnic zkušenosti i nové nápady, navázat na úspěchy uplynulých let a přinést energii pro další rozvoj.",
      },
      {
        type: "paragraph",
        text: "V aktuálním volebním období jsme měli dva zástupce v zastupitelstvu i radě města – Libora Kvasničku a Kateřinu Hlaváčkovou (dříve Šupáčkovou). Jsme rádi, že se podařilo posunout důležité projekty, které jsme dlouhodobě prosazovali – například výstavbu fotovoltaické elektrárny, nové komunikace či investice do školství. Do budoucna nás čeká několik prioritních investic, mezi něž patří rekonstrukce náměstí, obnova krajské komunikace a optimalizace železniční trati, stejně jako přístavba školního pavilonu.",
      },
      {
        type: "paragraph",
        text: "Pro následující období jsme vytyčili tři hlavní témata: energetiku a udržitelný rozvoj, ochranu životního prostředí a krajiny a podporu rodin, mládeže a spolkové činnosti.",
      },
      {
        type: "paragraph",
        text: "Energetice se dlouhodobě věnuje Libor Kvasnička. Byl hlavní silou za realizací fotovoltaické elektrárny na budovách vodních zdrojů a čistírny odpadních vod v Řevnicích, inicioval místní energetickou koncepci a energetický management a podílí se na přípravě velké FVE na tělese skládky. Energetiku a udržitelnost podporuje také Jakub Veselka, profesně zaměřený na efektivní využití materiálů ve stavebnictví, který chce přispět ke kvalitnímu veřejnému prostoru a odpovědnému hospodaření.",
      },
      {
        type: "paragraph",
        text: "Jedinečnou výhodou Řevnic je okolní krajina, která nabízí obyvatelům možnosti pro relaxaci, sport i vzdělávání. Město vlastní významnou část této krajiny, což umožňuje rozvíjet volnočasové aktivity občanů s respektem k životnímu prostředí. Jan Lojda podporuje propojení těchto aktivit, například realizací naučné stezky Burešovka, vzdělávacími akcemi a spoluprací s dětskými kroužky. Ochranu přírody a udržitelné hospodaření má v prioritách také Ondřej Lánský, který zajistil vytyčení klidových zón pro hnízdící zvěř. Oba se podílejí na připomínkování krajinného plánu, klíčového dokumentu pro budoucí rozvoj města a jeho okolí.",
      },
      {
        type: "paragraph",
        text: "Lásku k přírodě a spolkové činnosti spojuje místopředsedkyně mysliveckého spolku Martina Pražská (Březinová). Pořádá oblíbené pochody Řevnická brána Brd a Řevnické stezky a vede myslivecký kroužek.",
      },
      {
        type: "paragraph",
        text: "Řevnice se mohou pyšnit bohatým spolkovým životem, jehož součástí je i Kateřina Hlaváčková (Šupáčková). Pro ni je důležité zapojení občanů do života města a podpora dětí a mládeže. Přestože máme mnoho sportovních příležitostí, chybí prostor pro neorganizované aktivity a neformální setkávání starších dětí. Proto bychom se rádi zasadili o vybudování takového prostoru, ať už ve formě skateparku nebo volného hřiště pro různé kolektivní sporty.",
      },
      {
        type: "paragraph",
        text: "Také vnímáme složitou situaci fotbalistů a jsme připraveni vyvinout úsilí k vyřešení stávajících problémů s pozemky pod fotbalovým hřištěm. Dětem a mládeži se ve volném čase věnuje Petr Čermák, který vede ve škole robotický kroužek a dosahuje s ním skvělých výsledků.",
      },
      {
        type: "paragraph",
        text: "Mladou generaci zastupuje Matěj Krofta, který se zaměřuje na podporu mladých lidí v oblasti volného času, pracovních podmínek a dostupného bydlení. Rozvoj infrastruktury a podpora rodin jsou prioritou i pro Jiřího Buchala, Jana Šimůnka a Romana Vejmelku. Jejich cílem je vytvořit podmínky, aby mladí lidé zůstávali v Řevnicích, zakládali zde rodiny a budovali svou budoucnost.",
      },
      {
        type: "paragraph",
        text: "Svůj volný čas věnují občanům také Karel Vyleta a Milan Bělohlávek, spoluorganizátoři tradičního pálení čarodějnic na Vrážce, kteří se aktivně podílejí na bohatém komunitním životě města.",
      },
    ],
  },
  {
    slug: "parkovani-u-nadrazi",
    title: "Parkování u nádraží: Výsledky sčítání a naše kroky k lepší dopravní budoucnosti v Řevnicích",
    date: "2026-06-15",
    excerpt:
      "Podrobný monitoring parkoviště u vlakového nádraží ukázal, odkud řidiči přijíždějí a jak dlouho parkují. Přinášíme výsledky a naše další kroky k řešení dopravní situace.",
    content: [
      {
        type: "paragraph",
        text: "Doprava v Řevnicích patří k důležitějším tématům, která formují právě vznikající strategický plán na následující desetiletí. Jasným signálem z dotazníků i z participačních setkání je problém s parkováním zejména u vlakového nádraží. Hlavní parkoviště zde není schopno pojmout všechna přijíždějící auta, která tak často zaplňují přilehlé ulice a ztěžují život obyvatelům.",
      },
      {
        type: "paragraph",
        text: "Na začátku června jsme proto uskutečnili podrobný monitoring aut na parkovišti u nádraží. Cílem bylo získat přesná data o tom, odkud přijíždějí, jak často parkují a kolik lidí v autech jezdí. Výsledky ukazují, že největší část (28 %) tvoří řidiči z Haloun a Svinař, následováni obyvateli samotných Řevnic (20 %). Další skupiny vozidel přijížděly ze Zadní Třebaně, Litně a vzdálenějších obcí. Zajímavé je, že sousední Lety využívají hlavně parkovací kapacity v bývalém areálu EUROVIE, což potvrzuje pouze jedno zaznamenané auto z této oblasti parkující před nádražím.",
      },
      {
        type: "paragraph",
        text: "Z průzkumu také vyplývá, že téměř 70 % řidičů na nádraží parkuje každý den, přičemž jen 20 % vozidel přepravuje více než jednu osobu. Zejména důležité zjištění je, že přibližně 40 až 50 aut na nádraží parkovalo dlouhodobě, což představuje kolem 35 % kapacity parkoviště s 135 místy.",
      },
      {
        type: "paragraph",
        text: "Řešení parkovací situace není jednoduché a nebude bez výzev pro všechny. Přibývání aut mezi lidmi je realitou, která vyžaduje také rostoucí osobní odpovědnost. Každý, kdo pořizuje další vůz, by měl zvážit, zda může zajistit parkování na vlastním pozemku. Zároveň je vhodné přemýšlet o alternativách – chůzi, cyklistice nebo spolujízdě – a efektivně plánovat cesty autem. Pro nalezení nejvhodnějšího řešení plánuje město zadat odbornou dopravní studii.",
      },
      {
        type: "paragraph",
        text: "Pozitivním signálem je také rozšiřování poptávkové dopravy Go Berounka, kterou město finančně podporuje a která nabízí obyvatelům Řevnic pohodlnou a dostupnou alternativu k osobní dopravě. Občanům postačí stáhnout si aplikaci a mohou si za velmi příznivou cenu objednat dopravu po okolí.",
      },
      {
        type: "paragraph",
        text: "Naším cílem do budoucna není omezovat řidiče, ale vytvářet podmínky, i ve spolupráci s okolními dotčenými obcemi, aby nádražní parkoviště sloužilo skutečně jen krátkodobému parkování spojenému s cestou vlakem. Chceme, aby náměstí a přilehlé ulice sloužily k rychlému vyřízení osobních záležitostí a obytné zóny nebyly přeplněné auty. Společně tak zajistíme, že naše město bude příjemným místem k životu pro všechny.",
      },
      {
        type: "paragraph",
        text: "Kateřina Hlaváčková, radní, PRO Řevnice",
      },
    ],
  },
  {
    slug: "klidove-zony-v-honitbe",
    title: "Klidové zóny v honitbě",
    date: "2026-06-28",
    excerpt:
      "Rozhovor radního pro životní prostředí Libora Kvasničky s myslivcem Ondřejem Lánským o přemnožené zvěři, rušení přírody a klidových zónách v řevnickém lese.",
    content: [
      {
        type: "paragraph",
        text: "Rozhovor radního v jehož gesci je životní prostředí Libora Kvasničky s novým členem komise životního prostředí a myslivcem Ondřejem Lánským o klidových zónách v řevnickém lese.",
      },
      {
        type: "paragraph",
        text: "V poslední době řešíme stále větší tlak na příměstské lesy. Jak to z vašeho pohledu vypadá přímo v terénu?",
      },
      {
        type: "paragraph",
        text: "Ten tlak je opravdu výrazný. Les musí zvládat rekreaci, ekologické funkce, hospodaření i ochranu krajiny. Tento souběh funkcí vytváří konflikty, které se dnes projevují výrazněji než dřív. Největší problém je kombinace vyšších stavů spárkaté zvěře, vysoké návštěvnosti a nedostatku klidových míst.",
      },
      { type: "heading", text: "Přemnožená zvěř" },
      {
        type: "paragraph",
        text: "O přemnožené zvěři se mluví dlouho. Jak vážná je situace?",
      },
      {
        type: "paragraph",
        text: "Jedná se o dlouhodobý problém, který ovšem nelze označit jako přemnožení. Populace jelení a dančí zvěře jsou dlouhodobě na vyšší hranici, ale to především v době, kdy se na zemědělsky obhospodařovaných plochách vyskytují atraktivní plodiny jako např. kukuřice. Oproti tomu zvěř srnčí svým početním stavem zapadá do únosnosti svého habitatu. Početní stav černé zvěře se v posledních letech podařilo razantně snížit a věřím, že tento trend bude pokračovat i v dalších obdobích. Je nutné zmínit, že právě pohyb lidí v okolí přirozených stávanišť zvěře vede ke stresu, který si zvěř kompenzuje poškozováním lesních porostů a zemědělských kultur. Vlivem stresu má zvěř nadměrný výdej energie, který musí kompenzovat příjmem potravy. Důsledky stresu jsou jasné, okus mladých stromků, poškozování plodin, zvýšené riziko střetů člověka se zvěří a narušení přirozené rovnováhy ekosystému. V příměstských lesích je navíc regulace lovem velmi složitá — kvůli lidem, psům, cyklistům a husté síti cest.",
      },
      { type: "heading", text: "Návštěvníci a rušení přírody" },
      {
        type: "paragraph",
        text: "Návštěvnost lesů roste. Jak to ovlivňuje zvěř?",
      },
      {
        type: "paragraph",
        text: "Zásadně. Lidé často chodí mimo cesty, mají psy na volno, pořádají noční aktivity. Zvěř se kvůli tomu stává stresovanou, mění své chování, často opouští tradiční klidová stanoviště, a především tvoří vyšší škody na lesích a přilehlých zemědělsky využívaných plochách.",
      },
      { type: "heading", text: "Mláďata potřebují klid" },
      {
        type: "paragraph",
        text: "Proč je jaro tak kritické období?",
      },
      {
        type: "paragraph",
        text: "Protože se rodí srnčata, kolouši, dančata i selata divokých prasat. Mláďata jsou ukrytá v trávě a podrostu, matky se pohybují v blízkém okolí a každé vyrušení může mít fatální dopad. Rušení může vést k opuštění mláďat nebo i k jejich úhynu. A to se skutečně děje — stačí jeden pes na volno nebo turista, který prochází houštiny. U divokých prasat je situace ještě složitější, protože hrozí riziko konfliktu bachyně se psem, popř. jeho majitelem.",
      },
      { type: "heading", text: "Klidové zóny jako řešení" },
      {
        type: "paragraph",
        text: "Proto navrhujeme klidové zóny. Jak je vnímáte vy?",
      },
      {
        type: "paragraph",
        text: "Jako nezbytné. Klidové zóny umožní zvěři nerušeně vyvádět mláďata, snižují stres zvířat a podporují jejich přirozené chování. Ale musí být respektované. Každý vstup do klidové části lesa může znamenat vyplašení matky nebo opuštění mláděte. Pokud chceme se zvěří dobře hospodařit a snížit poškození lesa, musíme jí dát alespoň nějaký prostor, kde se bude cítit bezpečně.",
      },
      { type: "heading", text: "Krajinný plán Řevnic" },
      {
        type: "paragraph",
        text: "Na veřejném projednání krajinného plánu zaznělo mnoho podnětů. Co podle vás plán přináší?",
      },
      {
        type: "paragraph",
        text: "Je to krok správným směrem a je skvělé, že dochází také k veřejným debatám na toto téma. Plán úpravy extravilánu města na jedné straně navrhuje obnovu remízků a biokoridorů, zabývá se protierozními a částečně protipovodňovými opatřeními a zadržováním vody v krajině. To je naprosto správné pojetí, které bude mít kladný vliv na zvýšení, nebo minimálně zachování biodiverzity krajiny v extravilánu města. Oproti tomu však navrhuje další zprůchodnění krajiny v několika lokalitách, kde je průchodnost již dostatečně zajištěna stávající cestní sítí. Tím se živočichům zbytečně ubere životní prostor a v těchto lokalitách dojde paradoxně spíše ke snížení biodiverzity. Jedná se o lokalitu v okolí Nezabudického potoka, která je již v současné době lemována třemi cestami, které směřují k Pišťáku. Samostatnou kapitolou je lokalita v Tůních, která je velmi zranitelná a biologicky hodnotná. Oproti navrhovanému krajinnému plánu si zaslouží citlivější zacházení. S ohledem na zachování biodiverzity této lokality, je zde vytvoření cestní sítě zcela nepřípustné.",
      },
      { type: "heading", text: "Budoucnost lesa" },
      {
        type: "paragraph",
        text: "Co je podle vás klíčem k budoucnosti příměstských lesů?",
      },
      {
        type: "paragraph",
        text: "Jednoznačně rovnováha. Lesy budou vždy sloužit lidem i živočichům, kteří v něm žijí. Současná změna klimatu klade vyšší nároky na les, jeho druhovou skladbu, jeho variabilitu, vyžaduje vyšší zastoupení odolných dřevin, než tomu bylo dříve. Aktuálně tak nabývá na významu vyvážený vztah lesa a zvěře, která v něm nachází své útočiště. Klidové zóny nejsou zbytečným omezením, ale investicí do budoucnosti – do lesa, který bude fungovat pro všechny.",
      },
    ],
  },
  {
    slug: "uvodni-clanek",
    title: "Pokračujeme v práci pro Řevnice",
    date: "2026-05-01",
    excerpt:
      "Krátký úvodní článek — proč znovu kandidujeme, na co navazujeme a co považujeme za nejdůležitější v příštích čtyřech letech.",
  },
  {
    slug: "doprava-2026",
    title: "Doprava v Řevnicích: co dál",
    date: "2026-04-14",
    excerpt:
      "Bezpečnější cesty do škol, parkování v centru a údržba komunikací. Shrnujeme, co se povedlo a co je před námi.",
  },
  {
    slug: "verejny-prostor",
    title: "Veřejný prostor, který má smysl",
    date: "2026-03-28",
    excerpt:
      "Náměstí, okolí nádraží, zeleň a lavičky. Malé věci, které dělají velký rozdíl v každodenním životě města.",
  },
];
