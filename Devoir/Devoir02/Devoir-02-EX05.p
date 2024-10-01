/*Trouver le plus grand de trois nombres
*Vous devez créer un algorithme qui demande trois nombres à l'utilisateur. L’algorithme doit ensuite déterminer lequel des trois nombres est le plus grand et l'afficher.
*Entrée : Trois nombres donnés par l’utilisateur.
*Sortie : Le plus grand des trois nombres */

WRITE "Bonjour et bienvenue dans notre système de tri des nombre"

quit = false

i = 1

WHILE(!quit) {
    WRITE "Veuillez rentrer votre premier nombre."    
    INPUT chiffre1User

    WRITE "Veuillez rentrer votre second nombre."
    INPUT chiffre2User

    WRITE "Veuillez rentrer votre troisième chiffre."
    INPUT chiffre3User

    les3Chiffre = [chiffre1User, chiffre2User, chiffre3User]

    FOR (i = 0, i < 2, i++ ){ 
        FOR (j = 0; j < 2 - i, j++){ 
            IF (les3Chiffre[j] > les3Chiffre[j+1] ) {
                temporaire = les3Chiffre[j] 
                les3Chiffre[j] = les3Chiffre[j + 1] 
                les3Chiffre[j + 1] = temporaire
            }

        } 
    }

    WRITE "Le plus grand chiffre que vous avez saisi est" + les3Chiffre[2]

}

CORRECTION 

il existe une fonction .tri (sort) exemple les3Chiffre
