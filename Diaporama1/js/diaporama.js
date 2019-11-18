//Les tableaux
//Déclarer un tableau
let monJoliTableau = [123, "Bonjour", true];
console.log(monJoliTableau);

//Afficher "Bonjour" dans la console
console.log(monJoliTableau[1]);

//Ajouter une valeur "red" à la fin de mon tableau
monJoliTableau.push("red"); //.push will push at the end the valeur
console.log(monJoliTableau);

//Ajouter la valeur "#f00" au début  du tableau
monJoliTableau.unshift("#f00"); // .unshift will put the valeur at the beginning
console.log(monJoliTableau);

//Retirer la derniere valeur du tableau
let valeur = monJoliTableau.pop();
console.log(monJoliTableau); // it s not necessary to write console.log always it is just to see step by step whats going on if we want
console.log(valeur);

//Retirer la première valeur d'un tableau
valeur = monJoliTableau.shift();
console.log(monJoliTableau);
console.log(valeur);

//Parcourir tout le valeur d'un tableau n'importe quelle la taille
for(let ligne = 0; ligne < monJoliTableau.length; ligne++){ //for(let ligne = 0; ligne <= monJoliTableau.length -1; ligne++){
    console.log(monJoliTableau[ligne]);
}

//en Javascript on va parcourir le tableau avec boucle fort