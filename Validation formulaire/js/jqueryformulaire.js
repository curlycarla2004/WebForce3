//Variables globales
let nomOk, emailOk, passOk;

$(function(){  //there are different versions how to write window.onload
    $("#nom").on("change",verifyNom);
    $("#email2").on("change",verifyEmail);
    $("#pass2").on("change",verifyPass);
    $("#voir").on("click",togglePass);
   


});//fermeture $function

function verifyNom(){

    //on vérifie si la valeur saisie dans nom est >= à 5 caractères

    if($(this).val().length >= 5){ //
        $(this).css("border-color", "green"); 
        nomOk = true; //ou 1 means also true
    }else{
        $(this).css("border-color", "red"); 
        nomOk= false;
    }
    //afficherButton();
}


function verifyEmail(){
    //this correspond à email2 
    if($(this).val() === $("#email1").val()){
        $("#email1,#email2").css("border-color", "green");
        //$(this).css("border-color", "green");
        emailOk = true;
    }else{
        $("#email1, #email2").css("border-color", "red");
        //$(this).css("border-color", "red");
        emailOk = false;
    }  
    //afficherButton();
}


function verifyPass(){
    $("#pass1");

    if($(this).val() === $("#pass1").val()){
        $("#pass1, #pass2").css("border-color", "green");
        //$(this).css("border-color", "green");
        passOk = true;
    }else{
        $("#pass1, #pass2").css("border-color", "red");
        //$(this).css("border-color", "red");
        passOk = false;
        
    }  
    //afficherButton();
}

function togglePass(){

    $("#pass1")
    if($("#pass1").attr(type) == "password"){
        $("#pass1").attr(type) = "text";
    }else{
        $("#pass1").type="password";
    }
    
}

//faire diaporama aussi