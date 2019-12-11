//Recupérer la date courante
let maintenant = new Date(); //now is normally a date reserved so better not used

//Date de début de stage
let stage = new Date ("2020-02-19T08:00:00");

//Temps jusqu'a stage
let tempsRestant = stage - maintenant; 

//Nombre de jours dans le temps restant
// 1 jour = 1000ms * 60 secondes * 60minutes * 24heures = 86 400 000ms
let jours = Math.floor(tempsRestant / (1000 * 60 * 60 * 24));

//On calcule le temps restant après retrait des jours avec le modulo
tempsRestant = tempsRestant % (1000 * 60 * 60 * 24 ); // % serves pour avoir le reste

//Nombre d'heures dans le temps restant
let heures = Math.floor(tempsRestant / (60 * 60 * 1000));

//1 heure = 1000ms * 60s * 60m = 3 600 000ms
tempsRestant = tempsRestant % (1000 * 60 *60);

//1minute = 1000ms * 60s = 60 000ms
let minutes = Math.floor(tempsRestant / (60 * 1000));

//On calcule le temps restant après retrait des minutes avec le modulo
tempsRestant = tempsRestant % (1000 * 60);

//Nombres des seconds dans le temps restants
let secondes = Math.floor(tempsRestant / (1000));

//1 sec = 1000ms
tempsRestant = tempsRestant % (1000);

let intervalle;  //il faut declare avant la function si non ca ne serait pas applicable apres la function

$(function(){
    $("#jours").html(jours);
    $("#heures").html(heures);
    $("#minutes").html(minutes);
    $("#secondes").html(secondes);   

    intervalle = setInterval(decompte, 1000);
});

//cette fonction decompte le temps
function decompte(){
    if(secondes == 0){
        secondes = 59; //if its 0 then you go to 59
        if(minutes == 0){
            minutes = 59;
            if(heures == 0){
                heures = 23;
                if(jours > 0){
                    jours --;
                }
            }else{
                heures -- ;
            }
        }else{
            minutes -- ;
        }
    }else{
        secondes --; //if it is not equal 0 than you just take away 1sec
    }
    if(secondes == 0 && minutes == 0 && heures == 0 && jours == 0)
    {
    clearInterval(intervalle);
    }
    $("#secondes").html(secondes);
    $("#minutes").html(minutes);
    $("#heures").html(heures);
    $("#jours").html(jours);
        
}


