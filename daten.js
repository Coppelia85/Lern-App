const userConfig = {
    "King Knulwes": { passwort: "None", rolle: "Kind" },
    "Mini 14": { passwort: "None", rolle: "Kind" },
    "Queen Katherine": { passwort: "None", rolle: "Kind" },
    "Chef": { passwort: "None", rolle: "Chef" }
};

// Hier deine bestehenden Datenbanken für Geografie einbinden (europaDatenbank, nachlaenderDatenbank, fluesseDatenbank, gebirgeDatenbank, meereDatenbank, inselnDatenbank, verdichtungsraeumeDatenbank).


// EUROPA-DATENBANK (Komplett mit 1 bis 47)
const europaDatenbank = [
    { nr: 1, land: "Frankreich", hauptstadt: "Paris", region: "Westeuropa", tipp: "Die Pyrenäen sind wie Mauern, hinter denen die Spanier lauern.", x: 34, y: 58 },
    { nr: 2, land: "Spanien", hauptstadt: "Madrid", region: "Südeuropa", tipp: "Iberische Halbinsel im Südwesten.", x: 22, y: 74 },
    { nr: 3, land: "Italien", hauptstadt: "Rom", region: "Südeuropa", tipp: "Der Stiefel pennt (Apennin) im Mittelmeer.", x: 44, y: 68 },
    { nr: 4, land: "Deutschland", hauptstadt: "Berlin", region: "Mitteleuropa", tipp: "Der Rhein fließt rein in die Nordsee.", x: 42, y: 52 },
    { nr: 5, land: "Großbritannien", hauptstadt: "London", region: "Westeuropa", tipp: "Inselstaat im Nordwesten.", x: 28, y: 50 },
    { nr: 6, land: "Österreich", hauptstadt: "Wien", region: "Mitteleuropa", tipp: "Östlicher Nachbar der Schweiz an der Donau.", x: 48, y: 58 },
    { nr: 7, land: "Schweiz", hauptstadt: "Bern", region: "Mitteleuropa", tipp: "Alpen-Herzland im Süden von Deutschland.", x: 40, y: 61 },
    { nr: 8, land: "Polen", hauptstadt: "Warschau", region: "Mitteleuropa", tipp: "Östlich von Deutschland an der Oder.", x: 52, y: 48 },
    { nr: 9, land: "Griechenland", hauptstadt: "Athen", region: "Südeuropa", tipp: "Südlichste Spitze des Balkans.", x: 58, y: 78 },
    { nr: 10, land: "Norwegen", hauptstadt: "Oslo", region: "Nordeuropa", tipp: "Skandinavisches Küstenland im Westen.", x: 38, y: 32 },
    { nr: 11, land: "Schweden", hauptstadt: "Stockholm", region: "Nordeuropa", tipp: "Östlicher Teil der skandinavischen Halbinsel.", x: 44, y: 34 },
    { nr: 12, land: "Finnland", hauptstadt: "Helsinki", region: "Nordeuropa", tipp: "Land der tausend Seen im hohen Norden.", x: 52, y: 30 },
    { nr: 13, land: "Ukraine", hauptstadt: "Kiew", region: "Osteuropa", tipp: "Flächenstaat im Osten Europas.", x: 64, y: 55 },
    { nr: 14, land: "Niederlande", hauptstadt: "Amsterdam", region: "Westeuropa", tipp: "Direkt an der Nordsee nördlich von Belgien.", x: 38, y: 48 },
    { nr: 15, land: "Serbien", hauptstadt: "Belgrad", region: "Südosteuropa", tipp: "Balkanstaat an der Donau.", x: 55, y: 68 },
    { nr: 16, land: "Ungarn", hauptstadt: "Budapest", region: "Mitteleuropa", tipp: "Pannonisches Tiefland, Donau fließt mitten durch.", x: 53, y: 60 },
    { nr: 17, land: "Slowakei", hauptstadt: "Bratislava", region: "Mitteleuropa", tipp: "Nördlich von Ungarn, Nachbar von Österreich.", x: 53, y: 56 },
    { nr: 18, land: "Rumänien", hauptstadt: "Bukarest", region: "Osteuropa", tipp: "Am Schwarzen Meer, umgeben von den Karpaten.", x: 62, y: 64 },
    { nr: 19, land: "Portugal", hauptstadt: "Lissabon", region: "Südeuropa", tipp: "Äußerster Westen der Iberischen Halbinsel.", x: 16, y: 74 },
    { nr: 20, land: "Dänemark", hauptstadt: "Kopenhagen", region: "Nordeuropa", tipp: "Halbinsel Jütland vor Deutschland.", x: 43, y: 42 },
    { nr: 21, land: "Island", hauptstadt: "Reykjavík", region: "Nordeuropa", tipp: "Inselstaat im Nordatlantik.", x: 10, y: 22 },
    { nr: 22, land: "Irland", hauptstadt: "Dublin", region: "Westeuropa", tipp: "Insel westlich von Großbritannien.", x: 22, y: 52 },
    { nr: 23, land: "Tschechien", hauptstadt: "Prag", region: "Mitteleuropa", tipp: "Östlicher Nachbar von Bayern und Sachsen.", x: 48, y: 53 },
    { nr: 24, land: "Estland", hauptstadt: "Tallinn", region: "Nordeuropa", tipp: "Nördlichster baltischer Staat.", x: 53, y: 36 },
    { nr: 25, land: "Lettland", hauptstadt: "Riga", region: "Nordeuropa", tipp: "Mittlerer baltischer Staat.", x: 53, y: 40 },
    { nr: 26, land: "Litauen", hauptstadt: "Vilnius", region: "Nordeuropa", tipp: "Südlichster baltischer Staat.", x: 53, y: 44 },
    { nr: 27, land: "Belarus", hauptstadt: "Minsk", region: "Osteuropa", tipp: "Östlich von Polen und Litauen.", x: 60, y: 42 },
    { nr: 28, land: "Moldawien", hauptstadt: "Kischinau", region: "Osteuropa", tipp: "Zwischen Rumänien und der Ukraine.", x: 63, y: 60 },
    { nr: 29, land: "Bosnien und Herzegowina", hauptstadt: "Sarajevo", region: "Südosteuropa", tipp: "Auf dem Westbalkan.", x: 51, y: 68 },
    { nr: 30, land: "Kroatien", hauptstadt: "Zagreb", region: "Südosteuropa", tipp: "Mit langer Adriaküste.", x: 48, y: 64 },
    { nr: 31, land: "Bulgarien", hauptstadt: "Sofia", region: "Südosteuropa", tipp: "Südlich der Donau am Schwarzen Meer.", x: 60, y: 68 },
    { nr: 32, land: "Albanien", hauptstadt: "Tirana", region: "Südosteuropa", tipp: "An der Adria gegenüber von Italien.", x: 54, y: 73 },
    { nr: 33, land: "Nordmazedonien", hauptstadt: "Skopje", region: "Südosteuropa", tipp: "Binnenstaat auf dem Balkan.", x: 57, y: 71 },
    { nr: 34, land: "Slowenien", hauptstadt: "Ljubljana", region: "Südosteuropa", tipp: "Nördlich von Kroatien, östlich der Alpen.", x: 47, y: 62 },
    { nr: 35, land: "Montenegro", hauptstadt: "Podgorica", region: "Südosteuropa", tipp: "An der südlichen Adriaküste.", x: 53, y: 70 },
    { nr: 36, land: "Kosovo", hauptstadt: "Pristina", region: "Südosteuropa", tipp: "Binnenstaat auf dem Balkan.", x: 56, y: 70 },
    { nr: 37, land: "Zypern", hauptstadt: "Nikosia", region: "Südeuropa", tipp: "Insel im östlichen Mittelmeer.", x: 74, y: 84 },
    { nr: 38, land: "Malta", hauptstadt: "Valletta", region: "Südeuropa", tipp: "Inselstaat südlich von Sizilien.", x: 45, y: 84 },
    { nr: 39, land: "Luxemburg", hauptstadt: "Luxemburg", region: "Westeuropa", tipp: "Kleinstaat zwischen DE, FR, BE.", x: 39, y: 53 },
    { nr: 40, land: "Belgien", hauptstadt: "Brüssel", region: "Westeuropa", tipp: "Zwischen Frankreich und den Niederlanden.", x: 37, y: 51 },
    { nr: 41, land: "Monaco", hauptstadt: "Monaco", region: "Westeuropa", tipp: "Zwergstaat an der Côte d'Azur.", x: 40, y: 66 },
    { nr: 48, land: "Liechtenstein", hauptstadt: "Vaduz", region: "Mitteleuropa", tipp: "Zwischen Schweiz und Österreich im Rheintal.", x: 43, y: 61 },
    { nr: 43, land: "San Marino", hauptstadt: "San Marino", region: "Südeuropa", tipp: "Eingeschlossen im nördlichen Italien.", x: 47, y: 67 },
    { nr: 44, land: "Vatikanstadt", hauptstadt: "Vatikanstadt", region: "Südeuropa", tipp: "Mitten in Rom (Italien).", x: 45, y: 69 },
    { nr: 45, land: "Andorra", hauptstadt: "Andorra la Vella", region: "Südeuropa", tipp: "In den Pyrenäen zwischen Frankreich und Spanien.", x: 30, y: 65 },
    { nr: 46, land: "Russland", hauptstadt: "Moskau", region: "Südosteuropa", x: 72, y: 32 },
    { nr: 47, land: "Türkei", hauptstadt: "Ankara", region: "Südosteuropa", x: 78, y: 78 }
];

// NACHBARLÄNDER VON DEUTSCHLAND
const nachlaenderDatenbank = [
    { id: "N1", land: "Frankreich" },
    { id: "N2", land: "Luxemburg" },
    { id: "N3", land: "Belgien" },
    { id: "N4", land: "Dänemark" },
    { id: "N5", land: "Liechtenstein" },
    { id: "N6", land: "Österreich" },
    { id: "N7", land: "Schweiz" },
    { id: "N8", land: "Tschechien" },
    { id: "N9", land: "Polen" },
    { id: "N10", land: "Niederlande" }
];

// HALBINSELN
const halbinselnDatenbank = [
    { id: "H1", name: "Iberische Halbinsel", laender: ["Spanien", "Portugal", "Andorra"] },
    { id: "H2", name: "Apenninhalbinsel", laender: ["Italien", "Vatikanstadt", "San Marino"] },
    { id: "H3", name: "Skandinavische Halbinsel", laender: ["Norwegen", "Schweden", "Finnland"] },
    { id: "H4", name: "Balkanhalbinsel", laender: ["Griechenland", "Albanien", "Bulgarien", "Nordmazedonien", "Montenegro", "Bosnien und Herzegowina", "Serbien", "Kosovo", "Kroatien zum Teil", "Türkei zum Teil"] }
];

// GEBIRGE
const gebirgeDatenbank = [
    { id: "G1", name: "Alpen", laender: ["Frankreich", "Monaco", "Italien", "Schweiz", "Liechtenstein", "Deutschland", "Österreich", "Slowenien"] },
    { id: "G2", name: "Pyrenäen", laender: ["Frankreich", "Spanien", "Andorra"] },
    { id: "G3", name: "Ural", laender: ["Russland", "Kasachstan"] },
    { id: "G4", name: "Karpaten", laender: ["Österreich", "Tschechien", "Polen", "Slowakei", "Ungarn", "Ukraine", "Rumänien", "Serbien"] },
    { id: "G5", name: "Apennin", laender: ["Italien"] },
    { id: "G6", name: "Skandinavisches Gebirge", laender: ["Norwegen", "Schweden", "Finnland"] }
];

// FLÜSSE
const fluesseDatenbank = [
    { id: "F1", name: "Rhein", route: "Schweiz - Niederlande (Nordsee)", info: "Eine der wichtigsten Wasserstraßen in Europa" },
    { id: "F2", name: "Donau", route: "Deutschland - Ukraine (Schwarzes Meer)", info: "Zweitlängster Fluss in Europa, fließt durch 10 Länder" },
    { id: "F3", name: "Elbe", route: "Tschechien - Deutschland (Nordsee)", info: "Vom größten deutschen Hafen ins Meer" },
    { id: "F4", name: "Oder", route: "Tschechien - Polen (Ostsee)", info: "Bildet die Grenze zwischen Deutschland und Polen" },
    { id: "F5", name: "Seine", route: "Frankreich - Frankreich (Atlantik)", info: "Fließendes Herz durch Paris" },
    { id: "F6", name: "Rhône", route: "Schweiz - Frankreich (Mittelmeer)", info: "Fließt durch Südfrankreich" },
    { id: "F7", name: "Po", route: "Italien - Italien (Mittelmeer)", info: "Längster Fluss in Italien" },
    { id: "F8", name: "Wolga", route: "Russland - Russland (Kaspisches Meer)", info: "Längster Fluss in Europa" }
];

// MEERE
const meereDatenbank = [
    { id: "M1", name: "Atlantischer Ozean", lage: "Im Westen von Europa" },
    { id: "M2", name: "Nordpolarmeer", lage: "Im Norden von Europa" },
    { id: "M3", name: "Nordsee", lage: "Zwischen Großbritannien, Skandinavien und Festland" },
    { id: "M4", name: "Ostsee", lage: "Zwischen Skandinavien, Osteuropa und Deutschland" },
    { id: "M5", name: "Mittelmeer", lage: "Zwischen Südeuropa, Nordafrika und Vorderasien" },
    { id: "M6", name: "Schwarzes Meer", lage: "Zwischen Südosteuropa, Ukraine und Kleinasien" },
    { id: "M7", name: "Kaspisches Meer", lage: "Im Osten an der Grenze zu Asien" }
];

// INSELN
const inselnDatenbank = [
    { id: "I5", name: "Großbritannien" },
    { id: "I22", name: "Irland" },
    { id: "I21", name: "Island" },
    { id: "I3", name: "Sizilien" },
    { id: "I4", name: "Sardinien" },
    { id: "I50", name: "Korsika" },
    { id: "I60", name: "Kreta" }
];
