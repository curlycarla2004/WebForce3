let raisonOk,chatOk
$(function(){  //window.onload
    $("#chat").on("change",chooseCat);
    $("#raison").on("change",chooseRaison);
    $("button").hide();
    $("form").on("submit", valider);
});//fermeture $function

function chooseCat(){
    if($(this).val() == ""){
        $(this).css("border-color", "red"); 
        chatOk=false;
    }else{
        $(this).css("border-color", "green"); 
        chatOk=true;
    }
    afficherButton();
}

function chooseRaison(){
    if($(this).val().length >= 15){
        $(this).css("border-color", "green"); 
        raisonOk=true;
    }else{
        $(this).css("border-color", "red"); 
        raisonOk=false;
    }
    afficherButton();
}

function afficherButton(){
    if( raisonOk && chatOk){  
        $("button").show(1000);
    }else{
        $("button").hide();
    }
}

function valider(e){ 
    e.preventDefault(); 
    if(chatOk && raisonOk){
        $("form").hide();
        $("#envoye").show();
    }
}