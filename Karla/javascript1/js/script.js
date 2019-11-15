console.time("Chargement");

let nombre = 12; //on déclare une variable appelée nombre 

document.write("<h1>Bonjour</h1>"); 

//ajouter 5 à un nombre
nombre = nombre + 5; 
//Ecriture "simplifiée" pour ajouter 5 à un nombre
nombre += 5;

document.write(nombre); 

const MACONSTANTE = "Benoit"; 

//MACONSTANTE = "Brouette"; INTERDIT

//Concaténation de chaînes de caractères
document.write("<p>Bonjour " + MACONSTANTE +"</p>");

//ES6 : Injection de valeur dans une chaîne de caractères !use this ${} better than line 17!
document.write(`<p>Bonjour ${MACONSTANTE}</p>`);

console.log(nombre); //affiche un message sur la console

console.info("Ca fonctionne");//affiche une information

console.error("Une erreur est survenu"); //affiche un message d'erreur

console.warn("Attention danger");

console.timeEnd("Chargement");

//nombre = prompt("Entrez un nombre");
{}
//on teste si le nombre est plus grand que 100
if(nombre > 100){
    console.log(`le nombre ${nombre} est plus grand que 100`);
}else{  
    //Injection de valeur
    console.log(`Le nombre ${nombre} est plus petit ou égal à 100`);
    //Même la
} 

//afficher dans la console les nombres de 23 à 45
for(let nb = 23;  nb <= 45; nb ++){
    console.log(nb);
    }

//afficher les nombres de 1046 à 53 en descendant de 5 en 5
for(var nb = 1046; nb >= 53; nb -=5){
    console.log(nb);
}
//utiliser let de que possible pour conserver la mémoire
console.log(nb) ;