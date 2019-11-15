/**
 * Cette fonction écrit Bonjour dans la console
 */
function ecrireBonjour(){//il faut ecrire () meme si il n'y a rien dedans
    console.log("Bonjour");
}

/**
 * Cette fonction écrit Bonjour plus le prénom proposé
 * @param {string} prenom  //*means whatever thing we can put inside
 */
function ecrirePrenom(prenom){
    console.log(`Bonjour ${prenom}`);
}

/**
 * Cette fonction additionnne 2 nombres
 * @param {number} nombre1 
 * @param {number} nombre2
 * @returns {number} 
 */
function addition(nombre1, nombre2){
    return nombre1 + nombre2;
}


//On appelle la fonction
ecrireBonjour();

ecrirePrenom("Karla"); 

let some = addition(12, 54);

console.log(somme);
