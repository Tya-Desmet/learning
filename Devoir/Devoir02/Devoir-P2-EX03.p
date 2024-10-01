/*Calcul de la remise en fonction du montant total
*Vous devez créer un algorithme qui demande à l’utilisateur de saisir un montant total d’achats. Si ce montant est supérieur à 100 €, une remise de 5 % est appliquée. Sinon, aucun rabais n'est effectué.
*L’algorithme doit afficher le montant total après application de la remise (si elle s’applique).
*Entrée : Le montant total des achats.
*Sortie : Le montant à payer après application de la remise. */


START
REMISE100 = 5
REMISE500 = 10

WRITE "Bonjour et bienvenu dans notre programme de vérification des promotions !" 

quit = false
WHILE(!quit) {
    WRITE "Veuillez rentrez le montant total de vos achats." 
    INPUT pannierUser
    
    IF (pannierUser >= 100 && pannierUser < 500) {
        remise = pannierUser*REMISE100 / 100
        WRITE "Vous avez le droit a une promotion de: " + REMISE100  +" % " + "Avec réduction le prix de vos achats reviendrons à " + (pannierUser - remise) + (" €.)
 
    } ELSE IF (pannierUser >= 500) {
        remise = pannierUser*REMISE500 / 100
        WRITE "Vous avez le droit a une promotion de: " + REMISE500  +" % " + "Avec réduction le prix de vos achats reviendrons à " + (pannierUser - remise) + (" €.)
 
    } ELSE {
        WRITE "Vous n'avez le droit a aucune promotion"
    }

    WRITE "souhaitez vous vérifier a nouveau votre éligibilité a une promotion en entrant un nouveaux montant ? Oui ou non ?" 
    INPUT choixUser

    IF(choixUser.toLowerCase == "non") {
        quit = true 
        WRITE "Fermeture du programme"
    }

}
END 
