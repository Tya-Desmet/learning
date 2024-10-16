console.log("Bonjour utilisateur, nous allons jouer au pendu. ");
let quitter = false;
let vie = 7;
let listeMots = [
    "manger",
    "poulet",
    "poisson",
    "chat",
    "oiseau",
    "soleil",
    "pluie",
    "neige",
    "fleur",
    "arbre",
    "maison",
    "voiture",
    "bicyclette",
    "piscine",
    "plage",
    "mer",
    "montagne",
    "riviere",
    "lac",
    "foret",
    "champs",
    "vigne",
    "fromage",
    "pain",
    "vin",
    "biere",
    "frites",
    "coca",
    "pepsi",
    "soda",
    "eau",
    "jus",
    "cafe",
    "the",
    "sucre",
    "sel",
    "poivre",
    "huile",
    "vinaigre",
    "moutarde",
    "piment",
    "paprika",
    "curry",
    "gingembre",
    "cannelle",
    "cloudegirolle",
    "cumin",
    "coriandre",
    "thym",
    "persil",
    "basilic",
    "origan",
    "menthe"
];

function verifLettre(input) {
    let accepter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (accepter.indexOf(input) === -1) {
        console.log("Veuillez entrer une lettre");
        return false;
    }
    return true;
}

while (!quitter) {
    let motAleatoire = listeMots[Math.floor(Math.random() * listeMots.length)];
    let motCacheStr = "";
    let lettresUtilisees = [];
    vie = 7;
    
    for (i = 0; i < motAleatoire.length; i++) {
        motCacheStr += "_";
    }
    let motCache = motCacheStr.split("");
    console.log("Devinez le mot caché qui comporte: " + motAleatoire.length + " lettre" + motCache);

    while (motCache.join("") !== motAleatoire && vie > 0) {
        let lettreUtilisateurChoix = prompt("Veuillez rentrer une lettre").toLowerCase();

        //Verif si c'est une lettre
        if (!verifLettre(lettreUtilisateurChoix)) {
            continue;
        }

        //Verif si la lettre a été utilisée
        if (lettresUtilisees.includes(lettreUtilisateurChoix)) {
            console.log("Lettre déjà utilisée !");
            continue;
        }  
        //Verif si la lettre est dans le mot
        else {
            lettresUtilisees.push(lettreUtilisateurChoix);

            let lettreTrouver = false;
            for (let i = 0; i < motAleatoire.length; i++) {
                if (motAleatoire[i] === lettreUtilisateurChoix) {
                    motCache[i] = lettreUtilisateurChoix;
                    lettreTrouver = true;

                } 
            }
            if (lettreTrouver) {
                console.log("Bonne lettre ! Mot actuel : " + motCache);
                if (motCache.join("") === motAleatoire) {
                    break;
                }
            } else {
                vie--;
                console.log("La lettre n'est pas dans le mot. Il vous reste " + vie + " vie(s).");
            }

        }
    }

    if (motCache.join("") === motAleatoire) {
        console.log("Vous avez gagné ! Le mot était : " + motAleatoire);
    } else {
        console.log("Vous avez perdu ! Le mot était : " + motAleatoire);
    }
    let choixQuitter = prompt("Voulez-vous jouer a nouveau ? Oui ou Non ?");
    if (choixQuitter.toLowerCase() === "non") {
        console.log("Fermeture du programme");
        quitter = true;
    }
}

