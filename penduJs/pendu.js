

console.log("Bonjour user, nous allons jouer au pendu. ");
let quit = false;
let vie = 7;
let listedemots = ["abc", "efg"]
/*
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
*/
function veriflettre(input) {
    accept = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (accept.indexOf(input) === -1) {
        console.log("Veuillez entrer une lettre");
        return false;
    }
    return true;
}

while (!quit) {
    let motaleatoire = listedemots[Math.floor(Math.random() * listedemots.length)];
    let motscacheStr = "";
    let lettresUtilisees = [];
    
    for (i = 0; i < motaleatoire.length; i++) {
        motscacheStr += "_";
    }
    let motscache = motscacheStr.split("");
    console.log("Devinez le mot cache qui comporte: " + motaleatoire.length + " lettre" + motscache);

    while (motscache !== motaleatoire && vie > 0) {
        let letteruserchoice = prompt("Veuillez rentrer une lettre").toLowerCase();

        //Verif si c'est une lettre
        if (!veriflettre(letteruserchoice)) {
            continue;
        }

        //Verif si la lettre a été utilisé
        if (lettresUtilisees.includes(letteruserchoice)) {
            console.log("Lettre déjà utilisée !");
            continue;
        }  
        //Verif si la lettre est dans le mot
        else {
            lettresUtilisees.push(letteruserchoice);

            let lettretrouver = false;
            for (let i = 0; i < motaleatoire.length; i++) {
                if (motaleatoire[i] === letteruserchoice) {
                    motscache[i] = letteruserchoice;
                    lettretrouver = true;

                } 
            }
            if (lettretrouver) {
                console.log("Bonne lettre ! Mot actuel : " + motscache);
                if (motscache === motaleatoire) {
                    console.log("Vous avez gagnez !");
                    break;
                }
            } else {
                vie--;
                console.log("La lettre n'est pas dans le mot. Il vous reste " + vie + " vie(s).");
            }

        }
    }

    if (motscache === motaleatoire) {
        console.log("Vous avez gagné ! Le mot était : " + motaleatoire);
    } else {
        console.log("Vous avez perdu ! Le mot était : " + motaleatoire);
    }
    let choiceQuit = prompt("Voulez-vous jouer a nouveau ? Oui ou Non ?");
    if (choiceQuit.toLowerCase() === "non") {
        console.log("Fermeture du programme");
        quit = true;
    }
}

