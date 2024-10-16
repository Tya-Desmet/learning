

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
while (!quit) {
    /* 
    * Math.random donne un nombre aleatoire entre 0 et 1 
    * Le Math.floor arrondit le nombre
    *  et donc on fais cela * le nombre de mots contenu dans la liste
    */
    let motaleatoire = listedemotsMath.floor(Math.random() * listedemots.length);
    let motcache = "";
    for (let i = 0; i < motaleatoire.length; i++) {
        motcache += "_";
    }
    console.log(motcache);
    let motuser = prompt("Quel est le mot que vous avez deviner ?");
    while (motaleatoire !== motuser) {
        lettre = prompt("Veuillez entrer une lettre");
        for (let i = 0; i < motaleatoire.length; i++) {
            if (motaleatoire[i] === lettre) {
                motcache[i] = lettre;
            }
        }
        console.log(motcache);
        motuser = prompt("Quel est le mot que vous avez deviner ?");
    }


    let choiceQuit = prompt("Voulez-vous jouer a nouveau ? Oui ou Non ?");
    if (choiceQuit.toLowerCase() === "non") {
        console.log("Fermeture du programme");
        quit = true;
    }

}

