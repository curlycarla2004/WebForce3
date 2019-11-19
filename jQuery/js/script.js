//On attend que le document soit chargé .. = windows.onload in JS
$(function(){
    //Equivalent window.onload
    //let baliseH1 = $("h1"); pas besoin faire ca in jQuery
    console.log($("h1").html());

    $("h1").html("Nouveau titre"); //  or shorter is direct .css("color", "blue")
    $("h1").css("color", "blue");
    
    $("#conteneur").append("<h2>Nouvelle partie</h2>");//ajoute apres le contenu qui est deja en site

    
    //$("#conteneur").hover(titreRouge,titreBleu)  //option2
   // $("#conteneur").mouseenter(titreRouge); //option1
    //$("#conteneur").mouseleave(titreBleu);//option1
    $("#conteneur").on("mouseenter", titreRouge);  //we can say .on can replace .addeventlistener
    $("#conteneur").on("mouseleave", titreBleu);
});//fermeture $function


function titreRouge(){
    $("h1").css("color", "red"); //option1  //option2
}

function titreBleu(){
    $("h1").css("color","blue");//option1  //option2
}
//$("h1").hover(function(){       //complet option3
    //$("h1").css("color", "red");
    //}, function(){
    //$("h1").css("color", "blue");
  //});
