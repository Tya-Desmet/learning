

console.log("Bonjour user, nous allons jouer au pendu. ");
let quit = false;
let listedemots = [
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
function veriflettre(input) {
    accept = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (accept.indexOf(input) === -1) {
        console.log("Veuillez entrer une lettre");
        return false;
    }
    return true;
}

while (!quit) {
    motaleatoire = listedemots[Math.floor(Math.random() * listedemots.length)];
    motscache = "";
    for (i = 0; i < motaleatoire.length; i++) {
        motscache += "_";
    }
    console.log("Devinez le mot cache qui comporte: " + motaleatoire.length + " lettre" + motscache);
    while (motscache !== motaleatoire) {
        userletteruse = [];
        letteruserchoice = prompt("Veuillez rentrer une lettre");

        if (!veriflettre(letteruserchoice)) {
            console.log("Vous devez entrer une lettre");
            continue;
        }
        if (userletteruse.includes(letteruserchoice)) {
            console.log("Lettre déjà utilisée !");
        } else {
            userletteruse.push(letteruserchoice);
            console.log("La lettre n'est pas utilisée.");
            userletteruse.push(letteruserchoice);
            for (let i = 0; i < motaleatoire.length; i++) {
                if (motaleatoire[i] === letteruserchoice) {
                    motscache[i] = letteruserchoice;
                    console.log(motscache);
                } else {
                    console.log("La lettre n'est pas dans le mot vous perdez donc une vie" + motscache);
                    vie -= 1;
                    if (vie === 0) {
                        console.log("Vous avez perdu !");
                        break;
                        
                    } else {
                        console.log("il vous reste " + vie + " vie(s)");
                    }
                }
            }
        }

    }

    console.log("vous avez gagnez ! le mots était + motaleatoire");
    let choiceQuit = prompt("Voulez-vous jouer a nouveau ? Oui ou Non ?");
    if (choiceQuit.toLowerCase() === "non") {
        console.log("Fermeture du programme");
        quit = true;
    }
}

