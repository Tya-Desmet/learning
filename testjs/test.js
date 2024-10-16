
const test = document.querySelector("#root");
console.log(test);
function addition(chiffre1, chiffre2) {
    return chiffre1 + chiffre2;
}

function multiplication(chiffre1, chiffre2){
    return chiffre1*chiffre2;
}

function soustraction(chiffre1,chiffre2){
    return chiffre1 - chiffre2
}

function division (chiffre1, chiffre2) {
    return chiffre1 / chiffre2 ;
}

function menu(){
    console.log("Qu'elle opération voulez vous effectuer ?");
    console.log("0 = quit");
    console.log("1-Addition");
    console.log("2-Soustraction");
    console.log("3-Multiplication");
    console.log("4-Division");

    let choice = prompt("Veuillez entrer votre choix");

    switch(choice){
        case "0":
            console.log("Fermeture du programme");
            quit = true;
            break;
        case "1":
            let chiffre1 = prompt("Veuillez entrer un chiffre");
            let chiffre2 = prompt("Veuillez entrer un autre chiffre");
            let choiceuser = addition(chiffre1, chiffre2);
            console.log(choiceuser);
            test.innerHTML = choiceuser;
            break;
        case "2":
            let chiffre3 = prompt("Veuillez entrer un chiffre");
            let chiffre4 = prompt("Veuillez entrer un autre chiffre");
            break;
        case "3":
            let chiffre5 = prompt("Veuillez entrer un chiffre");
            let chiffre6 = prompt("Veuillez entrer un autre chiffre");
            break;
        case "4":
            let chiffre7 = prompt("Veuillez entrer un chiffre");
            let chiffre8 = prompt("Veuillez entrer un autre chiffre");
            break;
        default:
            console.log("Choix invalide");
            break;
    }
}

let quit = false;

while(!quit){
    menu();
}

