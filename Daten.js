// ==========================================
// ZENTRALE DATENBANK & KONFIGURATION
// ==========================================

// 1. BENUTZER & PASSWÖRTER (Ganz oben zum schnellen Ändern!)
// "None" = Kein Passwort. Du kannst hier z.B. "geheim123" eintragen.
const userConfig = {
    "Cecilia": { passwort: "None", rolle: "Kind" },
    "Cedric":  { passwort: "None", rolle: "Kind" },
    "Test":    { passwort: "None", rolle: "Test" }
};

// 2. VOKABEL-DATENBANK (Hierarchisch: Klassenstufe -> Sprache -> Unit -> Seite)
const vokabelDatenbank = [
    { klasse: "Klasse 7", sprache: "Englisch", unit: "Unit 1", seite: "176", fremd: "feedback", deutsch: "Rückmeldung, Feedback", merksatz: "The hotel wants to get some feedback from the people who have stayed there." },
    { klasse: "Klasse 7", sprache: "Englisch", unit: "Unit 1", seite: "176", fremd: "to improve", deutsch: "verbessern, sich verbessern", merksatz: "This book helps you to improve your English." },
    { klasse: "Klasse 7", sprache: "Französisch", unit: "Unité 1", seite: "12", fremd: "un chien", deutsch: "ein Hund", merksatz: "Le chien court dans le jardin." }
];

// 3. GEOGRAFIE-DATENBANK (Europa 1-45)
const europaDatenbank = [
    { nr: 1, land: "Frankreich", hauptstadt: "Paris", region: "Westeuropa", tipp: "Die Pyrenäen sind wie Mauern, hinter denen die Spanier lauern." },
    { nr: 2, land: "Spanien", hauptstadt: "Madrid", region: "Südeuropa", tipp: "Iberisch fängt an wie Ich – ganz unten links auf der Karte." },
    { nr: 3, land: "Italien", hauptstadt: "Rom", region: "Südeuropa", tipp: "Der Stiefel pennt (Apennin) im Mittelmeer." },
    { nr: 4, land: "Deutschland", hauptstadt: "Berlin", region: "Mitteleuropa", tipp: "Der Rhein fließt rein in die Nordsee." }
];
