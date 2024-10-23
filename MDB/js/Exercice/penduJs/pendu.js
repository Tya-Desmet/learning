// Ce jeu du pendu permet à l'utilisateur de deviner des mots cachés dans une liste prédéfinie

// Liste des mots cachés à deviner
let listeMots = [
    "mangue", "noix", "abricot", "banane", "pamplemousse", "orange",
    "poivre", "sel", "sucre", "farine", "eau", "lait", "fromage", "jus",
    "vin", "biere", "cafe", "pain", "croissant", "chocolat",
    "fraise", "citron", "kiwi", "pomme", "poire", "cassis",
    "cerise", "framboise", "mure", "asperge", "brocolis",
    "choux", "carotte", "poivron", "oignon", "ail", "epinard", "salade",
    "tomate", "concombre", "courgette", "aubergine", "piment", "patate",
    "betterave", "radis", "haricot", "lentille", "pois", "riz", "semoule",
    "oeuf", "jambon", "saucisse", "steak", "poulet", "veau", "agneau",
    "poisson", "crevette", "mouton", "boeuf", "lapin", "chevre", "canard",
    "pigeon", "faisan", "perdrix", "tortue", "oiseau", "hirondelle",
    "aigle", "faucon", "corbeau", "tourterelle", "perroquet", "poule",
    "coq", "vache", "cheval", "mouton", "chien", "chat", "abeille",
    "fourmi", "araignee", "souris", "rat", "lion", "tigre", "ours",
    "singe", "gorille", "elephant", "hippopotame", "crocodile",
    "serpent", "grenouille", "crapaud"
];

// Fonction pour vérifier si une lettre est valide
function verifLettre(input) {
    const accepter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return accepter.includes(input);
}

// Variable pour contrôler l'état du jeu
let quitter = false;

// Boucle principale du jeu
while (!quitter) {
    
    // Sélection aléatoire d'un mot à deviner
    let motAleatoire = listeMots[Math.floor(Math.random() * listeMots.length)];
    
    // Initialisation des variables pour le jeu
    let motCache = Array(motAleatoire.length).fill("_");
    let lettresUtilisees = [];
    let vie = 7;

    // Affichage du mot caché à deviner et de la longueur du mot
    console.log("Devinez le mot caché qui comporte: " + motAleatoire.length + " lettres. Mot: " + motCache.join(" "));

    // Boucle pour deviner les lettres du mot caché
    while (motCache.join("") !== motAleatoire && vie > 0) {
        // Demande à l'utilisateur de saisir une lettre
        let lettreUtilisateurChoix = prompt("Veuillez rentrer une lettre").toLowerCase();

        // Vérifier si c'est une lettre valide
        if (!verifLettre(lettreUtilisateurChoix)) {
            console.log("Veuillez entrer une lettre valide.");
            continue;
        }

        // Vérifier si la lettre a déjà été utilisée
        if (lettresUtilisees.includes(lettreUtilisateurChoix)) {
            console.log("Lettre déjà utilisée : " + lettresUtilisees.join(", "));
            continue;
        }

        // Ajouter la lettre à la liste des lettres utilisées
        lettresUtilisees.push(lettreUtilisateurChoix);
        let lettreTrouver = false;

        // Vérifier si la lettre est présente dans le mot caché
        for (let i = 0; i < motAleatoire.length; i++) {
            if (motAleatoire[i] === lettreUtilisateurChoix) {
                motCache[i] = lettreUtilisateurChoix;
                lettreTrouver = true;
            }
        }

        // Afficher le résultat de la lettre trouvée ou non
        if (lettreTrouver) {
            console.log("Bonne lettre ! Mot actuel : " + motCache.join(" "));
            if (motCache.join("") === motAleatoire) {
                console.log("Vous avez gagné ! Le mot était : " + motAleatoire);
                break; // Sortir de la boucle si le mot a été trouvé
            }
        } else {
            vie--;
            console.log("La lettre n'est pas dans le mot. Il vous reste " + vie + " vie(s).");
        }
    }

    // Afficher le résultat du jeu (victoire ou défaite)
    if (vie === 0) {
        console.log("Vous avez perdu ! Le mot était : " + motAleatoire);
    }

    // Demander à l'utilisateur s'il veut jouer à nouveau
    let choixQuitter = prompt("Voulez-vous jouer à nouveau ? Oui ou Non ?");
    if (choixQuitter.toLowerCase() === "non") {
        console.log("Fermeture du programme");
        quitter = true;
    }
}

