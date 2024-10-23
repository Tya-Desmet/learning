/*Vérification de l’année bissextile
*Vous devez créer un algorithme qui demande une année à l’utilisateur et détermine si cette année est bissextile. Une année est bissextile si elle est divisible par 4, mais pas par 100, sauf si elle est aussi divisible par 400.
*Entrée : Une année donnée par l’utilisateur.
*Sortie : Un message indiquant si l’année est bissextile ou non. */

WRITE "Verifions si une année est bisextile"

quit = false 

WHILE (!quit) {
    WRITE "veuillez entrer une année" 

    INPUT anneeUser

    IF (anneeUser % 4 === 0 && (anneeUser % 100 !== 0 || anneeUser % 400 === 0)) {
        WRITE "L'année " + anneeUser + " est bissextile"
    } else {
        WRITE "L'année " + anneeUser + " n'est pas bissextile"
    }

    WRITE "Voulez-vous vérifier une autre année ? Oui ou Non ?" 
    INPUT choixUser

    IF (choixUser.toLowerCase() === "non") {
        quit = true 
    }
}

