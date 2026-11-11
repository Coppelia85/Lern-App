// --- Globale Benutzerverwaltung für die Chef-Statistik ---
const userConfig = {
    "King Knulwes": { passwort: "None", rolle: "Kind" },
    "Mini 14": { passwort: "None", rolle: "Kind" },
    "Queen Katherine": { passwort: "None", rolle: "Kind" },
    "Chef": { passwort: "None", rolle: "Chef" }
};

// --- Vokabeldatenbank (Französisch / Englisch) ---
const vokabelDatenbank = [
    // Französisch
    { sprache: "Französisch", frage: "Bonjour", antwort: "Guten Tag", synonyme: ["hallo", "guten tag"] },
    { sprache: "Französisch", frage: "Merci", antwort: "Danke", synonyme: ["danke schön", "danke sehr"] },
    { sprache: "Französisch", frage: "Au revoir", antwort: "Auf Wiedersehen", synonyme: ["tschüss"] },
    { sprache: "Französisch", frage: "L'école", antwort: "Die Schule", synonyme: ["schule"] },
    { sprache: "Französisch", frage: "Le livre", antwort: "Das Buch", synonyme: ["buch"] },

    // Englisch
    { sprache: "Englisch", frage: "Hello", antwort: "Hallo", synonyme: ["guten tag"] },
    { sprache: "Englisch", frage: "Thank you", antwort: "Danke", synonyme: ["danke schön"] },
    { sprache: "Englisch", frage: "Goodbye", antwort: "Auf Wiedersehen", synonyme: ["tschüss"] },
    { sprache: "Englisch", frage: "School", antwort: "Schule", synonyme: ["die schule"] },
    { sprache: "Englisch", frage: "Book", antwort: "Buch", synonyme: ["das buch"] }
];
