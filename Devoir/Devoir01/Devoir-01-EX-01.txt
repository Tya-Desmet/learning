//exercice 1  Calculer la surface d'un rectangle.

START
WRITE "Bonjour user, nous allons calculer l'air d'un rectangle."

quit = false 

WHILE (quit == false) {
    WRITE " Qu'elle est la longueur de votre rectangle ?"
    INPUT longueur

    WRITE "Très bien"

    WRITE "Veuillez maintenant nous indiquer sa largeur."
    INPUT largeur

    WRITE "Nous effectuons le calcul pour vous."

    surface = longueur*largeur

    WRITE "3" 
    WRITE "2" 
    WRITE "1" 

    WRITE "La surface de votre rectangle est de " + surface + "m²"

    WRITE "Souhaitez vous effectuer un autre calcul ? OUI OU NON ?"
    INPUT choiceCalcul
    IF choiceCalcul == "NON" {
        quit = true;
        
        WRITE Fermeture du programme.
    }
} 
FIN

