//On va génerer un nombre aléatoir entre 0 et 0.99999 
let aleatoire = Math.random();

//on passe le nombre aléatoire à un intervalle 0 à 99.9999
aleatoire *= 100; //aleatoire = aleatoire * 100

//on arrondit à l'entier inférieur
aleatoire = Math.floor(aleatoire);

//on ajoute 1
aleatoire++; 

const genere = Math.floor(Math.random() * 100) + 1;

console.log(GENERE); //console.log(aleatoire)

do{
    //on demande une proposition à l'utilisateur
    let proposition = prompt ("Entrez un nombre entre 1 et 100");

    if(proposition > GENERE){
        console.log (`Le nombre est plus petit que ${proposition}`);
    }else{
        if(proposition < GENERE){
            console.log (`Le nombre est plus grand que ${proposition}`);
        }else{
            console.log ("Gagné");
        }
    }

}while(proposition != GENERE)
