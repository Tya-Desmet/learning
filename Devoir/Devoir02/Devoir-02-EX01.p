//Calcul d’un moyenne de trois nombres

START

NUMBEROFNOTES = 3; 

WRITE "Bonjour user, nous allons dans ce programme réaliser une moyenne de 3 notes" 

quit = false; 

WHILE(!quit) {
    WRITE "Veuillez rentrer la note numéro 1."
    INPUT notes1

    WRITE "Veuillez rentrer la note numéro 2."
    INPUT notes2

    WRITE "Veuillez rentrer la dernière note."
    INPUT notes3

    WRITE "Nous effectuons la moyenne de vos 3 notes." 

    result = (notes1 + notes2 + notes3) / NUMBEROFNOTES;

    WRITE "La moyenne de vos 3 notes est: " + result "."

    WRITE "Voulez vous effectuer une nouvelle moyenne ? Oui ou Non ?"

    INPUT choiceUser

    IF (choiceUser.toLowerCase(); == "non"){
        quit = true 
        WRITE "Fermeture du programme."
    }
}

END   