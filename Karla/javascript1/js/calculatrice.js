//Ecrire l'lgorithme pour le programme suivant
//-L'utilisateur donnera 2 nombres et une opération (+, -, *, /)
//-Le programme répondra avec le résultat de l'opération demandée


/**
 * Cette fonction additionnne 2 nombres
 * @param {number} nb1
 * @param {number} nb2
 * @param {string} op
 * @returns {number}
 */


function calculer(nb1, nb2, op){
    if(op === "+"){         //sortie OUI
        return nb1 + nb2;
    }else{                  //sortie NON
        if(op === "-"){
            return nb1 - nb2;
        }else{  
            if(op === "*"){
                return nb1 * nb2;
            }else{
                return nb1 / nb2;  
            }
        }
    }
}

let nombre1 = Number(prompt("Enter the first number"));
let nombre2 = parsInt(prompt("Enter a second number"));
let operation = prompt("Enter the operation you want (+, -, *, /)"); 

let resultat = calculer(nombre1, nombre2, operation);

console.log(resultat);