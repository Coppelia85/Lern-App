// --- Globale Benutzerverwaltung für die Chef-Statistik ---
const userConfig = {
    "King Knulwes": { passwort: "None", rolle: "Kind" },
    "Mini 14": { passwort: "None", rolle: "Kind" },
    "Queen Katherine": { passwort: "None", rolle: "Kind" },
    "Chef": { passwort: "None", rolle: "Chef" }
};

// --- Hilfsfunktion für LRS-Toleranz (Prüft ob Wort bis zu ca. 40-50% abweichen darf oder phonetisch/ähnlich ist) ---
function lrsMatch(userInp, targetWord, synonyms = []) {
    let cleanUser = userInp.trim().toLowerCase();
    let targets = [targetWord, ...synonyms].map(s => s.toLowerCase());

    for (let t of targets) {
        if (cleanUser === t) return true;
        
        // LRS-Toleranz: Erlaube kleine Dreher / verwechselte Buchstaben bei längeren Wörtern
        if (t.length > 4 && calculateLevenshtein(cleanUser, t) <= Math.floor(t.length / 2)) {
            return true;
        }
    }
    return false;
}

// Einfacher Levenshtein-Abstand für LRS-Fehlertoleranz
function calculateLevenshtein(a, b) {
    let matrix = [];
    for (let i = 0; i <= b.length; i++) { matrix[i] = [i]; }
    for (let j = 0; j <= a.length; j++) { matrix[0][j] = j; }
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i-1) === a.charAt(j-1)) {
                matrix[i][j] = matrix[i-1][j-1];
            } else {
                matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, Math.min(matrix[i][j-1] + 1, matrix[i-1][j] + 1));
            }
        }
    }
    return matrix[b.length][a.length];
}

// --- Vollständige Europa Hauptstädte & Länder Datenbank (45+ Länder, ID 42 Liechtenstein, ID 46 Russland, ID 47 Türkei) ---
const europaDatenbank = [
    { nr: 1, land: "Frankreich", hauptstadt: "Paris", region: "Westeuropa", synonymeLand: ["frankreich"], synonymeHauptstadt: ["paris"] },
    { nr: 2, land: "Spanien", hauptstadt: "Madrid", region: "Südeuropa", synonymeLand: ["spanien"], synonymeHauptstadt: ["madrid"] },
    { nr: 3, land: "Italien", hauptstadt: "Rom", region: "Südeuropa", synonymeLand: ["italien"], synonymeHauptstadt: ["rom"] },
    { nr: 4, land: "Deutschland", hauptstadt: "Berlin", region: "Mitteleuropa", synonymeLand: ["deutschland", "brd", "bundesrepublik deutschland"], synonymeHauptstadt: ["berlin"] },
    { nr: 5, land: "Großbritannien", hauptstadt: "London", region: "Westeuropa", synonymeLand: ["grossbritannien", "uk", "england", "vereinigtes königreich", "vereinigtes koenigreich"], synonymeHauptstadt: ["london"] },
    { nr: 6, land: "Österreich", hauptstadt: "Wien", region: "Mitteleuropa", synonymeLand: ["österreich", "oesterreich"], synonymeHauptstadt: ["wien"] },
    { nr: 7, land: "Schweiz", hauptstadt: "Bern", region: "Mitteleuropa", synonymeLand: ["schweiz", "schweizer eidgenossenschaft"], synonymeHauptstadt: ["bern"] },
    { nr: 8, land: "Polen", hauptstadt: "Warschau", region: "Mitteleuropa", synonymeLand: ["polen"], synonymeHauptstadt: ["warschau"] },
    { nr: 9, land: "Griechenland", hauptstadt: "Athen", region: "Südeuropa", synonymeLand: ["griechenland"], synonymeHauptstadt: ["athen"] },
    { nr: 10, land: "Norwegen", hauptstadt: "Oslo", region: "Nordeuropa", synonymeLand: ["norwegen"], synonymeHauptstadt: ["oslo"] },
    { nr: 11, land: "Schweden", hauptstadt: "Stockholm", region: "Nordeuropa", synonymeLand: ["schweden"], synonymeHauptstadt: ["stockholm"] },
    { nr: 12, land: "Finnland", hauptstadt: "Helsinki", region: "Nordeuropa", synonymeLand: ["finnland"], synonymeHauptstadt: ["helsinki"] },
    { nr: 13, land: "Ukraine", hauptstadt: "Kiew", region: "Osteuropa", synonymeLand: ["ukraine"], synonymeHauptstadt: ["kiew", "kyjiw"] },
    { nr: 14, land: "Niederlande", hauptstadt: "Amsterdam", region: "Westeuropa", synonymeLand: ["niederlande", "holland"], synonymeHauptstadt: ["amsterdam"] },
    { nr: 15, land: "Serbien", hauptstadt: "Belgrad", region: "Südosteuropa", synonymeLand: ["serbien"], synonymeHauptstadt: ["belgrad"] },
    { nr: 16, land: "Ungarn", hauptstadt: "Budapest", region: "Mitteleuropa", synonymeLand: ["ungarn"], synonymeHauptstadt: ["budapest"] },
    { nr: 17, land: "Slowakei", hauptstadt: "Bratislava", region: "Mitteleuropa", synonymeLand: ["slowakei"], synonymeHauptstadt: ["bratislava", "pressburg"] },
    { nr: 18, land: "Rumänien", hauptstadt: "Bukarest", region: "Osteuropa", synonymeLand: ["rumaenien", "rumänien"], synonymeHauptstadt: ["bukarest"] },
    { nr: 19, land: "Portugal", hauptstadt: "Lissabon", region: "Südeuropa", synonymeLand: ["portugal"], synonymeHauptstadt: ["lissabon"] },
    { nr: 20, land: "Dänemark", hauptstadt: "Kopenhagen", region: "Nordeuropa", synonymeLand: ["dänemark", "daenemark"], synonymeHauptstadt: ["kopenhagen"] },
    { nr: 21, land: "Island", hauptstadt: "Reykjavík", region: "Nordeuropa", synonymeLand: ["island"], synonymeHauptstadt: ["reykjavik", "reykjavík"] },
    { nr: 22, land: "Irland", hauptstadt: "Dublin", region: "Westeuropa", synonymeLand: ["irland"], synonymeHauptstadt: ["dublin"] },
    { nr: 23, land: "Tschechien", hauptstadt: "Prag", region: "Mitteleuropa", synonymeLand: ["tschechien", "tschechische republik"], synonymeHauptstadt: ["prag"] },
    { nr: 24, land: "Estland", hauptstadt: "Tallinn", region: "Nordeuropa", synonymeLand: ["estland"], synonymeHauptstadt: ["tallinn", "reval"] },
    { nr: 25, land: "Lettland", hauptstadt: "Riga", region: "Nordeuropa", synonymeLand: ["lettland"], synonymeHauptstadt: ["riga"] },
    { nr: 26, land: "Litauen", hauptstadt: "Vilnius", region: "Nordeuropa", synonymeLand: ["litauen"], synonymeHauptstadt: ["vilnius", "wilna"] },
    { nr: 27, land: "Belarus", hauptstadt: "Minsk", region: "Osteuropa", synonymeLand: ["belarus", "weissrussland"], synonymeHauptstadt: ["minsk"] },
    { nr: 28, land: "Moldawien", hauptstadt: "Kischinau", region: "Osteuropa", synonymeLand: ["moldawien", "moldova"], synonymeHauptstadt: ["kischinau"] },
    { nr: 29, land: "Bosnien und Herzegowina", hauptstadt: "Sarajevo", region: "Südosteuropa", synonymeLand: ["bosnien und herzegowina"], synonymeHauptstadt: ["sarajevo"] },
    { nr: 30, land: "Kroatien", hauptstadt: "Zagreb", region: "Südosteuropa", synonymeLand: ["kroatien"], synonymeHauptstadt: ["zagreb"] },
    { nr: 31, land: "Bulgarien", hauptstadt: "Sofia", region: "Südosteuropa", synonymeLand: ["bulgarien"], synonymeHauptstadt: ["sofia"] },
    { nr: 32, land: "Albanien", hauptstadt: "Tirana", region: "Südosteuropa", synonymeLand: ["albanien"], synonymeHauptstadt: ["tirana"] },
    { nr: 33, land: "Nordmazedonien", hauptstadt: "Skopje", region: "Südosteuropa", synonymeLand: ["nordmazedonien"], synonymeHauptstadt: ["skopje"] },
    { nr: 34, land: "Slowenien", hauptstadt: "Ljubljana", region: "Südosteuropa", synonymeLand: ["slowenien"], synonymeHauptstadt: ["ljubljana"] },
    { nr: 35, land: "Montenegro", hauptstadt: "Podgorica", region: "Südosteuropa", synonymeLand: ["montenegro"], synonymeHauptstadt: ["podgorica"] },
    { nr: 36, land: "Kosovo", hauptstadt: "Pristina", region: "Südosteuropa", synonymeLand: ["kosovo"], synonymeHauptstadt: ["pristina"] },
    { nr: 37, land: "Zypern", hauptstadt: "Nikosia", region: "Südeuropa", synonymeLand: ["zypern"], synonymeHauptstadt: ["nikosia"] },
    { nr: 38, land: "Malta", hauptstadt: "Valletta", region: "Südeuropa", synonymeLand: ["malta"], synonymeHauptstadt: ["valletta"] },
    { nr: 39, land: "Luxemburg", hauptstadt: "Luxemburg", region: "Westeuropa", synonymeLand: ["luxemburg"], synonymeHauptstadt: ["luxemburg"] },
    { nr: 40, land: "Belgien", hauptstadt: "Brüssel", region: "Westeuropa", synonymeLand: ["belgien", "bruessel"], synonymeHauptstadt: ["brüssel", "bruessel"] },
    { nr: 41, land: "Monaco", hauptstadt: "Monaco", region: "Westeuropa", synonymeLand: ["monaco"], synonymeHauptstadt: ["monaco"] },
    { nr: 48, land: "Liechtenstein", hauptstadt: "Vaduz", region: "Mitteleuropa", synonymeLand: ["liechtenstein"], synonymeHauptstadt: ["vaduz"] }, // Das legendäre Oster-Egg / Fix-Platz
    { nr: 43, land: "San Marino", hauptstadt: "San Marino", region: "Südeuropa", synonymeLand: ["san marino"], synonymeHauptstadt: ["san marino"] },
    { nr: 44, land: "Vatikanstadt", hauptstadt: "Vatikanstadt", region: "Südeuropa", synonymeLand: ["vatikanstadt"], synonymeHauptstadt: ["vatikanstadt"] },
    { nr: 45, land: "Andorra", hauptstadt: "Andorra la Vella", region: "Südeuropa", synonymeLand: ["andorra"], synonymeHauptstadt: ["andorra la vella"] },
    { nr: 46, land: "Russland", hauptstadt: "Moskau", region: "Osteuropa", synonymeLand: ["russland", "russische föderation"], synonymeHauptstadt: ["moskau", "moscow"] },
    { nr: 47, land: "Türkei", hauptstadt: "Ankara", region: "Südosteuropa", synonymeLand: ["türkei", "tuerkei"], synonymeHauptstadt: ["ankara"] }
];

// --- Nachbarländer von Deutschland ---
const nachlaenderDatenbank = [
    { land: "Dänemark", synonyme: ["daenemark", "dänemark"] },
    { land: "Polen", synonyme: ["polen"] },
    { land: "Tschechien", synonyme: ["tschechische republik", "tschechien"] },
    { land: "Österreich", synonyme: ["oesterreich", "österreich"] },
    { land: "Schweiz", synonyme: ["schweiz"] },
    { land: "Frankreich", synonyme: ["frankreich"] },
    { land: "Luxemburg", synonyme: ["luxemburg"] },
    { land: "Belgien", synonyme: ["belgien"] },
    { land: "Niederlande", synonyme: ["holland", "niederlande"] }
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
