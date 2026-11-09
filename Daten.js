// ==========================================
// ZENTRALE DATENBANK & KONFIGURATION
// ==========================================

// PASSWÖRTER & USER CONFIG (Ganz oben wie gewünscht!)
// "None" bedeutet kein Passwort. Du kannst hier Strings eintragen (z.B. "1234").
const userConfig = {
    "Cecilia": { passwort: "None", rolle: "Kind" },
    "Cedric":  { passwort: "None", rolle: "Kind" },
    "Test":    { passwort: "None", rolle: "Test" }
};

// VOKABEL-DATENBANK (Hierarchisch aufgebaut nach Klassenstufe -> Sprache -> Unit -> Seite)
const vokabelDatenbank = [
    { klasse: "Klasse 7", sprache: "Englisch", unit: "Unit 1", seite: "176", fremd: "feedback", deutsch: "Rückmeldung, Feedback", merksatz: "The hotel wants to get some feedback from the people who have stayed there." },
    { klasse: "Klasse 7", sprache: "Englisch", unit: "Unit 1", seite: "176", fremd: "to improve", deutsch: "verbessern, sich verbessern", merksatz: "This book helps you to improve your English." },
    { klasse: "Klasse 7", sprache: "Englisch", unit: "Unit 1", seite: "176", fremd: "to react (to)", deutsch: "reagieren (auf)", merksatz: "I called him but he didn't react." },
    { klasse: "Klasse 7", sprache: "Englisch", unit: "Unit 1", seite: "177", fremd: "remote control", deutsch: "Fernbedienung", merksatz: "Use the remote control to switch channels." },
    { klasse: "Klasse 7", sprache: "Französisch", unit: "Unité 1", seite: "12", fremd: "un chien", deutsch: "ein Hund", merksatz: "Le chien court dans le jardin." }
];

// GEOGRAFIE-DATENBANK (Europa 1-45)
const europaDatenbank = [
    { nr: 1, land: "Frankreich", hauptstadt: "Paris", region: "Westeuropa", fluesse: "Seine, Rhône", gebirge: "Alpen, Pyrenäen", tipp: "Die Pyrenäen sind wie Mauern, hinter denen die Spanier lauern." },
    { nr: 2, land: "Spanien", hauptstadt: "Madrid", region: "Südeuropa", fluesse: "", gebirge: "Pyrenäen", tipp: "Iberisch fängt an wie Ich – ganz unten links auf der Karte." },
    { nr: 3, land: "Italien", hauptstadt: "Rom", region: "Südeuropa", fluesse: "Po", gebirge: "Alpen, Apennin", tipp: "Der Stiefel pennt (Apennin) im Mittelmeer." },
    { nr: 4, land: "Deutschland", hauptstadt: "Berlin", region: "Mitteleuropa", fluesse: "Rhein, Donau, Elbe, Oder", gebirge: "Alpen", tipp: "Der Rhein fließt rein in die Nordsee." },
    { nr: 5, land: "Großbritannien", hauptstadt: "London", region: "Westeuropa", fluesse: "", gebirge: "", tipp: "Inselstaat im Nordwesten." },
    { nr: 6, land: "Österreich", hauptstadt: "Wien", region: "Mitteleuropa", fluesse: "Donau", gebirge: "Alpen", tipp: "Donau fließt durch Wien und mündet ins Schwarze Meer." },
    { nr: 7, land: "Schweiz", hauptstadt: "Bern", region: "Mitteleuropa", fluesse: "Rhein, Rhône", gebirge: "Alpen", tipp: "Alpen-Herzland." },
    { nr: 8, land: "Polen", hauptstadt: "Warschau", region: "Mitteleuropa", fluesse: "Oder", gebirge: "Karpaten", tipp: "Nachbarstaat östlich von Deutschland." }
    // Beliebig erweiterbar bis 45...
];
