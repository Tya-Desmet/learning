/*
* Vous devez créer un algorithme qui demande à l'utilisateur de saisir un mot de passe. Si le mot de passe est correct (par exemple : "Secret123"), affichez un message de réussite. Dans le cas contraire, affichez un message d’erreur.
* Entrée : Le mot de passe saisi par l’utilisateur.
* Sortie : Un message indiquant si le mot de passe est correct ou incorrect.
 */
START

PASSWORD = "Secret123"

DO
    WRITE "Bonjour utilisateur, veuillez saisir le mot de passe: "
    INPUT userPasswordEntry

    IF (userPasswordEntry !== PASSWORD) {
        WRITE "Mot de passe erroné, veuillez réessayer."
    }
WHILE (userPasswordEntry != PASSWORD)

WRITE "Le mot de passe est correct."

END


