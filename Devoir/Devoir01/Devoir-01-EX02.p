//exercice 2  convertir une somme en euro en dollar

START
EXCHANGERATE = 1.11 // taux de convertion le 25/09 à 21h50

quit = false

WHILE(quit == false){
    WRITE "Bonjour user bienvenue dans notre convertisseur EURO ---> DOLLAR."
    WRITE "Veuillez entrer votre somme en EURO."

    INPUT euro

    WRITE "Calcul en cours"

    result = euro*EXCHANGERATE
        
    WRITE "3" 
    WRITE "2" 
    WRITE "1" 

    WRITE "La somme de: " + euro + "  est égale a " + result " USD"

    WRITE "Souhaitez vous effectuer un autre calcul ? OUI ou NON ?" 
    INPUT choiceConvert


    IF (choiceConvert == "NON") {
        quit = true

        WRITE "Fermeture du programme."
    }

}
END