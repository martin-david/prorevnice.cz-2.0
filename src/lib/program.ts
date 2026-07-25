// Shared election-program data used by both the topic list page (`/program`)
// and the individual topic detail pages (`/program/$slug`). Transcribed
// verbatim from `src/assets/VOLEBNÍ PROGRAM 2026_5.0.pdf` — wording is not
// altered, only split into structured blocks for rendering.
import type { LucideIcon } from "lucide-react";
import { Car, GraduationCap, Leaf, Building2, Landmark, HeartHandshake } from "lucide-react";

import { slugify } from "@/lib/candidates";

export { slugify };

/** A single rendering unit inside a topic's full text. */
export type ProgramBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type ProgramTopic = {
  order: number;
  icon: LucideIcon;
  title: string;
  /** Short "Ve zkratce" bullet points from the PDF, used as the list-page excerpt. */
  summary: string[];
  /** Full verbatim content of the topic, in original order. */
  content: ProgramBlock[];
};

export function getProgramTopicBySlug(slug: string): ProgramTopic | undefined {
  return programTopics.find((t) => slugify(t.title) === slug);
}

export const programTopics: ProgramTopic[] = [
  {
    order: 1,
    icon: Building2,
    title: "Územní rozvoj a charakter města",
    summary: [
      "Zachování základní urbanistické koncepce města – zahušťování centra a rozvolněné rodinné bydlení v zeleni",
      "Příprava a realizace regulačních plánů a územních studií na vybraná území",
      "Znovu otevření veřejné diskuze o využití areálu bývalé betonárky",
      "Rozšíření a úprava hřbitova a jeho okolí",
    ],
    content: [
      {
        type: "paragraph",
        text: "Vnímáme naše město jako harmonický celek, který tvoří centrální území kolem náměstí tvořené hustší zástavbou a rekreační plochy v okolí řeky Berounky. Na toto území navazují původní letní vily s velkými pozemky (Sochorova ulice) a rodinné domy v zeleni (charakter zahradního města).",
      },
      {
        type: "paragraph",
        text: "Zachováme základní urbanistickou koncepci města a nebudeme podporovat plošné zahušťování vilových čtvrtí ani změny, které by zásadně narušily charakter zahradního města.",
      },
      { type: "heading", text: "Hřbitov" },
      {
        type: "list",
        items: [
          "Rozšíření Řevnického hřbitova a stavební úpravy márnice – architektonická ověřovací studie. (2.4.2026)",
          "Arch. Sodomková – projektová dokumentace pro přestavbu márnice vč. parkovacích ploch (RM 144, 20.4. 2026)",
        ],
      },
      { type: "heading", text: "Územní plán – stabilita, předvídatelnost, rozumné úpravy" },
      {
        type: "paragraph",
        text: "Územní plán a jeho regulativy určují charakter zástavby v jednotlivých lokalitách. Pro platný územní plán jsme hlasovali a respektujeme jej. U územního plánu je velmi složité nastavit jeho parametry tak, aby chránil zájmy města a zároveň nepřiměřeně neomezoval budoucí investory (a to jak ty malé, tak ty velké). Ve hře jsou navíc protichůdné zájmy jednotlivých aktérů. Prostě všem vyhovět nelze. To ale neznamená, že se s ÚP nemá průběžně pracovat a upravovat jej. Podporujeme rozumné úpravy ÚP v návaznosti na vyhodnocení funkčnosti stávajícího ÚP a nové poznatky vyplývající z jeho realizace.",
      },
      {
        type: "list",
        items: [
          "Dokončíme Změnu č. 1 (standardizace) a Změnu č. 2 (věcné úpravy). V rámci postupu realizace ÚP budeme realizovat územní studie.",
          "Územní studie Za vodou – město je většinovým vlastníkem všech pozemků a v současné chvíli neplánuje zástavbu ani prodej těchto pozemků. Prodloužení povinnosti vypracování studie bude zahrnuto do Změny č.1 Územního plánu.",
          "Územní studie U Zámečku - město je většinovým vlastníkem všech pozemků a v současné chvíli neplánuje zástavbu ani prodej těchto pozemků. Zástavbě bude předcházet veřejná debata. Prodloužení povinnosti vypracování studie bude zahrnuto do Změny č.1 Územního plánu.",
          "Územní studie Pod lesem - studie je zpracovávána.",
          "Územní studie Za Nádražím (Eurovia) – probíhá veřejná debata s vlastníkem, kterému byl předán návrh zadání územní studie.",
        ],
      },
      { type: "heading", text: "Regulační plán" },
      {
        type: "list",
        items: [
          "Regulační plán Na Vrážce – Je připraveno zadání regulačního plánu a projednáváno s dotčenými orgány. Budeme postupovat tak, aby byl dodržen termín pěti let od pořízení ÚP, nebo prodloužení povinnosti vypracování Regulačního plánu bude zahrnuto do změny č.1 Územního plánu.",
        ],
      },
      { type: "heading", text: "Bývalá betonárna" },
      {
        type: "list",
        items: [
          "Jsme přesvědčeni, že současné podmínky využití areálu bývalé betonárny nevedou k jeho obnově. Chceme otevřít věcnou veřejnou debatu o budoucnosti tohoto území tak, aby zde vzniklo funkční a kvalitní prostředí respektující zájmy obyvatel i vlastníka.",
          "Zatím to vypadá na zakonzervování stávajícího neutěšeného vzhledu. A to nechceme. Proto otevřeme veřejnou debatu, jejímž výstupem by mělo být nové referendum, jehož součástí bude jednak stávající otázka (případně nějak modifikovaná), a pak druhá otázka, nabízející funkční využití území, které bude veřejně prodiskutované se stávajícím vlastníkem.",
        ],
      },
      { type: "heading", text: "Praktické kroky" },
      {
        type: "list",
        items: [
          "Co se týká praktických kroků, podporujeme zahušťování centra, v rámci stávajících regulativů. U zón bydlení žádné změny neplánujeme.",
        ],
      },
    ],
  },
  {
    order: 2,
    icon: Car,
    title: "Bezpečné město",
    summary: [
      "Rekonstrukce náměstí krále Jiřího z Poděbrad",
      "Rekonstrukce krajské silnice II/115",
      "Řešení parkování ve městě",
      "Odstraňování bariér pro pěší",
    ],
    content: [
      { type: "heading", text: "Doprava a bezpečný pohyb po městě" },
      { type: "heading", text: "Rekonstrukce krajské silnice II/115 – největší investice desetiletí" },
      {
        type: "list",
        items: [
          "Budeme koordinovat práce s krajem tak, aby město neplatilo zbytečné vícenáklady.",
          "Současně opravíme chodníky, veřejné osvětlení, vodovod a přechody.",
          "Tuto akci budeme koordinovat s ostatními obcemi, aby nedocházelo k nelogickým uzavírkám.",
        ],
      },
      { type: "heading", text: "Rekonstrukce náměstí Krále Jiřího z Poděbrad" },
      {
        type: "list",
        items: [
          "Realizace po koordinaci s krajskou silnicí.",
          "Nové povrchy, zeleň, mobiliář, vodní prvky, retenční opatření.",
        ],
      },
      { type: "heading", text: "Ulice a chodníky" },
      {
        type: "list",
        items: [
          "Sestavíme jednoduchý přehled (semafor) kvality místních komunikací",
          "Dokončíme připravené rekonstrukce: – 28. října – Podbrdská – Mírová",
          "Připravíme projekty pro další lokality, aby byly připravené na získání dotací.",
          "Chceme odstraňovat bariéry pro seniory, hendikepované a rodiče s kočárky.",
        ],
      },
      { type: "heading", text: "Parkování a klidná doprava" },
      {
        type: "list",
        items: [
          "Na základě monitoringu u nádraží zadáme studii dopravy a parkování ve městě.",
          "Připravíme konkrétní plán parkování v okolí nádraží a v centru města včetně etapizace jednotlivých opatření.",
          "Zavedeme opatření pro zklidnění dopravy v obytných zónách.",
          "Projednáme možnosti zřízení zastávky autobusů na znamení v oblasti křižovatky 5. května / ČS. armády",
          "Oživíme projekt záchytného parkoviště u hřbitova pro dojíždějící z okolních obcí",
        ],
      },
      { type: "heading", text: "Cyklodoprava" },
      {
        type: "list",
        items: [
          "Vybudujeme cyklostezku Na Stránce – Komenského.",
          "Podpoříme bezpečné cyklotrasy v návaznosti na krajské projekty.",
        ],
      },
    ],
  },
  {
    order: 3,
    icon: GraduationCap,
    title: "Kvalitní život pro všechny generace",
    summary: [
      "Výstavba nového školního pavilonu",
      "Podpora stávajících zdravotnických služeb včetně rozvoje jejich bezbariérovosti",
      "Kvalitní sociální služby reagující na požadavky obyvatel",
    ],
    content: [
      { type: "heading", text: "Školství – investice do budoucnosti" },
      { type: "heading", text: "Nový školní pavilon" },
      {
        type: "list",
        items: [
          "12 učeben, jídelna, kuchyně, aula, dílny, kabinety.",
          "Budeme usilovat o dotaci a o spoluúčast spádových obcí.",
          "Cílem je kvalita výuky, ne nekontrolované navyšování kapacity.",
        ],
      },
      { type: "heading", text: "Zdravotnictví" },
      {
        type: "list",
        items: [
          "Podpora stávajících zdravotnických služeb včetně rozvoje jejich bezbariérovosti.",
          "Udržení stávajících ordinací praktických lékařů ve městě.",
          "Aktivní podpora příchodu nových specialistů.",
          "Pomoc při hledání prostor pro zdravotnické služby.",
        ],
      },
      { type: "heading", text: "Sociální služby" },
      {
        type: "list",
        items: [
          "V reakci na požadavky obyvatel zajistíme kvalitní sociální služby, a to jak v rámci pečovatelské služby, tak mimo ni (senior taxi, vzdělávací a kulturní akce pro seniory apod.).",
          "Zasadíme se také o:",
          "rozvoj terénních služeb,",
          "podporu domácí péče,",
          "informační servis pro seniory a jejich rodiny,",
          "podpora mezigeneračních aktivit.",
        ],
      },
    ],
  },
  {
    order: 4,
    icon: HeartHandshake,
    title: "Kultura, sport a komunitní život",
    summary: [
      "Lesní divadlo jako dominanta kulturního života",
      "Podpora spolků a práce s dětmi",
      "Vybudování volnočasového hřiště pro mládež",
    ],
    content: [
      { type: "heading", text: "Lesní divadlo" },
      {
        type: "list",
        items: [
          "I nadále budeme podporovat Lesní divadlo jako dominantu kulturního života v obci.",
          "Ve spolupráci se zainteresovanými stranami připravíme koncepci užívání Lesního divadla tak, aby se nastavil konsensus mezi zájmy města, protagonistů a uživatelů, okolních vlastníků nemovitostí a zájmy přiléhajícího lesního hospodářství.",
        ],
      },
      { type: "heading", text: "Sportoviště" },
      {
        type: "list",
        items: [
          "Pomůžeme vyřešit situaci ohledně fotbalového hřiště (pozemky).",
          "Podpoříme modernizaci sportovišť a jejich využití veřejností.",
          "Zasadíme se o nalezení vhodného pozemku a následné vybudování volnočasového hřiště pro mládež – například skateparku nebo univerzálního hřiště pro neorganizovaný sport.",
        ],
      },
      { type: "heading", text: "Komunitní centra a spolky" },
      {
        type: "list",
        items: [
          "Zachováme granty pro spolky a práci s dětmi.",
          "Spolkům zajistíme vhodný prostor pro jejich činnost.",
        ],
      },
    ],
  },
  {
    order: 5,
    icon: Leaf,
    title: "Místo, kde se nám dobře žije",
    summary: [
      "Péče o zeleň a veřejná prostranství včetně lesa jako výjimečného přírodního bohatství Řevnic.",
      "Moderní hospodaření s energiemi s důrazem na udržitelnost.",
      "Efektivní vodní hospodářství – nové zdroje pitné vody, zadržování vody v krajině.",
    ],
    content: [
      { type: "heading", text: "Voda, krajina a životní prostředí" },
      { type: "heading", text: "Protipovodňová a retenční opatření" },
      {
        type: "list",
        items: [
          "Zrealizujeme kroky k naplnění opatření z krajinného plánu a protipovodňového manuálu – poldry, přehrážky, vsakování, zadržování vody v lese.",
          "Budeme jednat s majiteli malé vodní nádrže v Selci o údržbě a zajištění trvalé udržitelnosti tohoto dříve městského majetku.",
        ],
      },
      { type: "heading", text: "Vodohospodářství" },
      {
        type: "list",
        items: [
          "Dokončíme propojení levobřežní části na městský vodovod.",
          "V reakci na dopady změnu klimatu připravíme studii rozšíření vodních zdrojů pro pitnou vodu v oblasti městského lesa",
          "Jako zdroj užitkové vody zrevitalizujeme vodojem v Selci a dokončíme obnovu vodojemu Domov",
        ],
      },
      { type: "heading", text: "Zeleň ve městě" },
      {
        type: "list",
        items: [
          "Budeme usilovat o koncepční údržbu stávající zeleně.",
          "Budeme vysazovat jen tolik stromů a zeleně, o kolik se dokážeme kvalitně starat.",
          "Nově nastavíme systém náhradní výsadby a příspěvku do fondu obnovy zeleně za pokácené dřeviny v intravilánu obce.",
          "Zavedeme systematický boj s křídlatkou a dalšími invazními druhy.",
        ],
      },
      { type: "heading", text: "Les" },
      { type: "paragraph", text: "Městský les představuje výjimečné přírodní bohatství Řevnic." },
      {
        type: "list",
        items: [
          "Budeme pokračovat v posilování rekreační funkce lesa při zachování jeho produkční schopnosti",
          "Pěstebními zásahy budeme zvyšovat odolnost městského lesa vůči klimatické změně",
          "Ve spolupráci s vědeckými odborníky zrealizujeme projekt přechodu exponované části lesa na ekologicky stabilní střední les.",
          "Na vodních tocích v lese zintenzivníme úsilí o realizaci projektů k zadržování vody v lese, povedeme jednání o revitalizaci stávajících přehrážek sloužících ke zpomalení odtoku vody",
          "Budeme iniciovat spolupráci s okolními vlastníky lesů nad veřejně prospěšnými projekty",
        ],
      },
      {
        type: "paragraph",
        text: "Vyvineme úsilí o nastavení vyrovnaného vztahu lesnického, zemědělského a mysliveckého managementu.",
      },
      {
        type: "paragraph",
        text: "Otevřeme odbornou i veřejnou debatu o rozvoji rekreační infrastruktury v lesích, včetně možnosti vyznačených cyklistických tras či přírodě šetrných sigletracků.",
      },
      { type: "heading", text: "Kompostárna" },
      { type: "list", items: ["Rozšíříme kapacitu kompostárny – i bez dotačních titulů."] },
      { type: "heading", text: "Energie a moderní technologie" },
      { type: "heading", text: "Úspory energií" },
      {
        type: "list",
        items: [
          "Prověříme aktuální stav u všech budov v majetku města.",
          "Připravíme možné kroky a projekty pro zlepšení kvality a efektivního provozu budov.",
          "Zavedeme energetický management (aktivní řízení) u relevantních staveb.",
        ],
      },
      { type: "heading", text: "Fotovoltaika" },
      { type: "list", items: ["Prověříme možnosti FVE na dalších městských objektech."] },
      { type: "heading", text: "Odpadové hospodářství" },
      { type: "heading", text: "Door-to-door systém" },
      {
        type: "list",
        items: [
          "Stabilizujeme provoz, optimalizujeme svozy.",
          "Otevřeme debatu o přechodu na platbu podle množství směsného odpadu.",
        ],
      },
      { type: "heading", text: "Sběrný dvůr" },
      {
        type: "list",
        items: [
          "Rozšíříme možnosti dotřiďování objemného odpadu.",
          "Podpoříme rozvoj svozové společnosti POBERO.",
        ],
      },
    ],
  },
  {
    order: 6,
    icon: Landmark,
    title: "Finance a řízení města",
    summary: [
      "Otevřené a přehledné hospodaření města",
      "Efektivní čerpání dotací a odpovědné investice",
      "Včasné informování občanů o připravovaných akcích",
    ],
    content: [
      { type: "heading", text: "Odpovědné hospodaření" },
      {
        type: "list",
        items: [
          "Velké projekty (náměstí, II/115, školní pavilon) budeme realizovat pouze s jasným finančním plánem.",
          "Budeme aktivně vyhledávat dotace a u každého většího projektu budeme veřejně prezentovat předpokládané investiční náklady, provozní náklady a možné dotační zdroje ještě před zahájením realizace.",
        ],
      },
      { type: "heading", text: "Transparentnost" },
      {
        type: "list",
        items: [
          "Zveřejníme přehledné rozpočtové grafy a pravidelné roční zprávy o investicích na webových stránkách města.",
          "Zpřehledníme v současné době špatně čitelnou prezentaci schváleného rozpočtu města.",
        ],
      },
      { type: "heading", text: "Zapojování veřejnosti" },
      { type: "heading", text: "Otevřená radnice" },
      {
        type: "list",
        items: [
          "Velké projekty budeme projednávat před zahájením projektování, ne až před realizací.",
          "Budeme aktivně sbírat podněty občanů a vyhodnocovat je.",
        ],
      },
    ],
  },
];

/** Closing statement from the end of the PDF, shown below the topic list. */
export const programClosingVision = {
  title: "Závěrečná vize",
  paragraphs: [
    "Řevnice mají obrovský potenciál – krásnou krajinu, silnou komunitu, kvalitní školu a jedinečný charakter zahradního města. Náš program stojí na třech pilířích: Stabilita – Kvalita – Odpovědnost.",
    "Chceme město, které se rozvíjí s rozumem, chrání svou identitu a investuje tam, kde to dává smysl pro současné i budoucí generace.",
  ],
};
