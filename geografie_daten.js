// --- Globale Benutzerverwaltung (Zentrale Datenbasis) ---
const userConfig = {
    "King Knulwes": { passwort: "None", rolle: "Kind" },
    "Mini 14": { passwort: "None", rolle: "Kind" },
    "Queen Katherine": { passwort: "None", rolle: "Kind" },
    "Chef": { passwort: "None", rolle: "Chef" }
};

// --- Europa Hauptstädte & Länder Datenbank ---
const europaDatenbank = [
    { nr: 1, land: "Island", hauptstadt: "Reykjavík", synonymeLand: ["island"], synonymeHauptstadt: ["reykjavik"] },
    { nr: 2, land: "Norwegen", hauptstadt: "Oslo", synonymeLand: ["norwegen"], synonymeHauptstadt: ["oslo"] },
    { nr: 3, land: "Schweden", hauptstadt: "Stockholm", synonymeLand: ["schweden"], synonymeHauptstadt: ["stockholm"] },
    { nr: 4, land: "Finnland", hauptstadt: "Helsinki", synonymeLand: ["finnland"], synonymeHauptstadt: ["helsinki"] },
    { nr: 5, land: "Russland", hauptstadt: "Moskau", synonymeLand: ["russland", "russische föderation"], synonymeHauptstadt: ["moskau", "moscow"] },
    { nr: 6, land: "Estland", hauptstadt: "Tallinn", synonymeLand: ["estland"], synonymeHauptstadt: ["tallinn", "reval"] },
    { nr: 7, land: "Lettland", hauptstadt: "Riga", synonymeLand: ["lettland"], synonymeHauptstadt: ["riga"] },
    { nr: 8, land: "Litauen", hauptstadt: "Vilnius", synonymeLand: ["litauen"], synonymeHauptstadt: ["vilnius", "wilna"] },
    { nr: 9, land: "Dänemark", hauptstadt: "Kopenhagen", synonymeLand: ["dänemark"], synonymeHauptstadt: ["kopenhagen"] },
    { nr: 10, land: "Deutschland", hauptstadt: "Berlin", synonymeLand: ["deutschland", "brd"], synonymeHauptstadt: ["berlin"] },
    { nr: 11, land: "Polen", hauptstadt: "Warschau", synonymeLand: ["polen"], synonymeHauptstadt: ["warschau"] },
    { nr: 12, land: "Tschechien", hauptstadt: "Prag", synonymeLand: ["tschechien", "tschechische republik"], synonymeHauptstadt: ["prag"] },
    { nr: 13, land: "Slowakei", hauptstadt: "Bratislava", synonymeLand: ["slowakei"], synonymeHauptstadt: ["bratislava", "pressburg"] },
    { nr: 14, land: "Ungarn", hauptstadt: "Budapest", synonymeLand: ["ungarn"], synonymeHauptstadt: ["budapest"] },
    { nr: 15, land: "Österreich", hauptstadt: "Wien", synonymeLand: ["österreich"], synonymeHauptstadt: ["wien"] },
    { nr: 16, land: "Schweiz", hauptstadt: "Bern", synonymeLand: ["schweiz", "schweizer eidgenossenschaft"], synonymeHauptstadt: ["bern"] },
    { nr: 17, land: "Niederlande", hauptstadt: "Amsterdam", synonymeLand: ["niederlande", "holland"], synonymeHauptstadt: ["amsterdam"] },
    { nr: 18, land: "Belgien", hauptstadt: "Brüssel", synonymeLand: ["belgien"], synonymeHauptstadt: ["brüssel"] },
    { nr: 19, land: "Luxemburg", hauptstadt: "Luxemburg", synonymeLand: ["luxemburg"], synonymeHauptstadt: ["luxemburg", "luxemburg-stadt"] },
    { nr: 20, land: "Frankreich", hauptstadt: "Paris", synonymeLand: ["frankreich"], synonymeHauptstadt: ["paris"] },
    { nr: 21, land: "Vereinigtes Königreich", hauptstadt: "London", synonymeLand: ["grossbritannien", "uk", "england", "vereinigtes königreich"], synonymeHauptstadt: ["london"] },
    { nr: 22, land: "Irland", hauptstadt: "Dublin", synonymeLand: ["irland"], synonymeHauptstadt: ["dublin"] },
    { nr: 23, land: "Spanien", hauptstadt: "Madrid", synonymeLand: ["spanien"], synonymeHauptstadt: ["madrid"] },
    { nr: 24, land: "Portugal", hauptstadt: "Lissabon", synonymeLand: ["portugal"], synonymeHauptstadt: ["lissabon"] },
    { nr: 25, land: "Italien", hauptstadt: "Rom", synonymeLand: ["italien"], synonymeHauptstadt: ["rom"] },
    { nr: 26, land: "Griechenland", hauptstadt: "Athen", synonymeLand: ["griechenland"], synonymeHauptstadt: ["athen"] }
];

// --- Nachbarländer von Deutschland ---
const nachlaenderDatenbank = [
    { land: "Dänemark", synonyme: ["daenemark"] },
    { land: "Polen", synonyme: [] },
    { land: "Tschechien", synonyme: ["tschechische republik"] },
    { land: "Österreich", synonyme: ["oesterreich"] },
    { land: "Schweiz", synonyme: [] },
    { land: "Frankreich", synonyme: [] },
    { land: "Luxemburg", synonyme: [] },
    { land: "Belgien", synonyme: [] },
    { land: "Niederlande", synonyme: ["holland"] }
];

// --- Flüsse ---
const fluesseDatenbank = [
    { name: "Rhein", route: "Fließt von den Alpen durch Deutschland und die Niederlande in die Nordsee", info: "Wichtigster Handelsfluss in Mitteleuropa", synonyme: ["rhein"] },
    { name: "Donau", route: "Fließt vom Schwarzwald nach Osten zum Schwarzen Meer", info: "Zweitlängster Fluss Europas", synonyme: ["donau"] },
    { name: "Wolga", route: "Längster Fluss Europas, fließt durch Russland ins Kaspische Meer", info: "Mütterchen Wolga", synonyme: ["wolga"] },
    { name: "Elbe", route: "Fließt von Tschechien durch Deutschland in die Nordsee (Hamburg)", info: "Mündet bei Cuxhaven", synonyme: ["elbe"] },
    { name: "Seine", route: "Fließt durch Paris in den Atlantik / Ärmelkanal", info: "Der Fluss der französischen Hauptstadt", synonyme: ["seine"] }
];

// --- Gebirge ---
const gebirgeDatenbank = [
    { name: "Alpen", laender: ["Schweiz", "Österreich", "Frankreich", "Italien", "Deutschland"], synonyme: ["alpen"] },
    { name: "Pyrenäen", laender: ["Spanien", "Frankreich"], synonyme: ["pyrenaeen", "pyrenäen"] },
    { name: "Skandinavisches Gebirge", laender: ["Norwegen", "Schweden"], synonyme: ["skandinavisches gebirge", "fjelle"] },
    { name: "Karpaten", laender: ["Rumänien", "Slowakei", "Polen"], synonyme: ["karpaten"] }
];

// --- Meere & Ozeane ---
const meereDatenbank = [
    { name: "Nordsee", lage: "Zwischen Großbritannien, Skandinavien und dem europäischen Festland", info: "Flachmeer mit Gezeiten (Ebbe und Flut)" },
    { name: "Ostsee", lage: "Binnenmeer in Nordeuropa, umgeben von Skandinavien, Osteuropa und Deutschland", info: "Sehr salzarm im Vergleich zum Ozean" },
    { name: "Mittelmeer", lage: "Zwischen Südeuropa, Nordafrika und Vorderasien", info: "Verbunden mit dem Atlantik über die Straße von Gibraltar" },
    { name: "Atlantischer Ozean", lage: "Westlich von Europa, trennt Europa von Amerika", info: "Zweitgrößter Ozean der Erde" }
];

// --- Inseln & Halbinseln ---
const inselnDatenbank = [
    { name: "Großbritannien", bezug: "Vereinigtes Königreich", tipp: "Größte Insel der Britischen Inseln" },
    { name: "Sizilien", bezug: "Italien", tipp: "Größte Mittelmeerinsel, liegt südlich des italienischen Stiefels" },
    { name: "Sardinien", bezug: "Italien", tipp: "Insel im westlichen Mittelmeer westlich des italienischen Stiefels" },
    { name: "Island", bezug: "Island", tipp: "Vulkaninsel im Nordatlantik" },
    { name: "Skandinavische Halbinsel", bezug: "Nordeuropa", tipp: "Umfasst Norwegen und Schweden" }
];

// --- Verdichtungsräume ---
const verdichtungsraeumeDatenbank = [
    { name: "Rhein-Ruhr", städte: ["Köln", "Düsseldorf", "Essen", "Dortmund"], land: "Deutschland" },
    { name: "Rhein-Main", städte: ["Frankfurt", "Wiesbaden", "Mainz"], land: "Deutschland" },
    { name: "Paris", städte: ["Paris"], land: "Frankreich" },
    { name: "London", städte: ["London"], land: "Großbritannien" },
    { name: "Mailand", städte: ["Mailand"], land: "Italien" }
];
