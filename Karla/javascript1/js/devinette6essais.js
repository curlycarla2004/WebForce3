const GENERE = Math.floor(Math.random() * 100) + 1;

console.log(GENERE);

for(var essais = 1; essais <= 6; essais++){
    //if i keep let instead of var than on the bottom my if will not be taken in account
    //on demande une proposition à l'utilisateur
    var proposition = prompt ("Entrez un nombre entre 1 et 100");

    if(proposition > GENERE){
        console.log (`Le nombre est plus petit que ${proposition}`);
    }else{
        if(proposition < GENERE){
            console.log (`Le nombre est plus grand que ${proposition}`);
        }else{
            console.log ("Gagné");
            break;
        }
    }
}

if(essais > 6){
    console.log("Vous avez perdu");
}