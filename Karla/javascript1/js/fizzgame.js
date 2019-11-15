//Ecrire l'algorithme pour le programme suivant
//afficher dans la console les nombres de 1 à 100
//- si le nombre est divisible par 3, écrire fizz
//- si le nombre est divisible par 5, écrire buzz
//- si le nombre est divisible par 3 et 5, écrire fizzbuz

//for (var i=1; i < 101; i++){
   // if (i % 15 == 0) console.log("FizzBuzz");
    //else if (i % 3 == 0) console.log("Fizz");
   // else if (i % 5 == 0) console.log("Buzz");
    //else console.log(i);
//}

//for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)

for(let compteur = 1; compteur <=100; compteur++){
    let texte = ""; //on déclare un texte vide
    if(compteur % 3 == 0){
        texte += "Fizz";
    }
    if(compteur % 5 == 0){
        texte += "Buzz";
    }
    if(texte != ""){
        console.log(texte);
    }else{
        console.log(compteur);
    }
}

