//Variables globales
let nomOk, emailOk, passOk;

//1.On attend que le DOM soit chargé
window.onload = function(){

    //2.On récupère les champs "nom", email2....
    let nom = document.getElementById("nom");
    let email2 = document.getElementById("email2");
    let pass2 = document.getElementById("pass2");
    let button = document.getElementById("voir");
    let valider = document.getElementById("valider");

    //On masque le button valider
    valider.style.display = "none";

    //3.On écoute l'évènement "change" ou "blur"
    nom.addEventListener("change", verifyNom);
    email2.addEventListener("change", verifyEmail);  
    pass2.addEventListener("change", verifyPass); 
    button.addEventListener("click", togglePass);
    
}//window.onload
  
/**
 * 4.Cette fonction vérifie la longeur de la valeur saisie dans le champs nom
 */
function verifyNom(){

    //on vérifie si la valeur saisie dans nom est >= à 5 caractères

    if(this.value.length >= 5){ //
        this.style.border ="3px solid green"; 
        nomOk = true; //ou 1 means also true
    }else{
        this.style.border ="3px solid red"; 
        nomOk= false;
    }
    afficherButton();
}

//function verifyNom(){ it is possible like this but better with "this"
    //let nom =document.getElementById("nom")

    //on vérifie si la valeur saisie dans nom est >= à 5 caractères

    //if(nom.value.length >= 5){ 
      //  nom.style.border ="3px solid green"; 
    //}else{
       // nom.style.border ="3px solid red"; 
   // }
//}

function verifyEmail(){
    //je récupère le champs email1
    let  email1 = document.getElementById("email1");

    //this correspond à email2
    if(this.value === email1.value){
        email1.style.border="3px solid green";
        this.style.border="3px solid green";
        emailOk = true;
    }else{
        email1.style.border="3px solid red";
        this.style.border="3px solid red";
        emailOk = false;
    }  
    afficherButton();
}

function verifyPass(){
    //je récupère le champs email1
    let  pass1 = document.getElementById("pass1");

    //this correspond à email2
    if(this.value === pass1.value){
        pass1.style.border="3px solid green";
        this.style.border="3px solid green";
        passOk = true;
    }else{
        pass1.style.border="3px solid red";
        this.style.border="3px solid red";
        passOk = false;
        
    }  
    afficherButton();
}

/**
 * Cette fonction affiche ou masque le mot de passe
 */
function togglePass(){
    //On va chercher le champs pass1
    let pass1 = document.getElementById("pass1");
    if(pass1.type == "password"){
        pass1.type = "text";
    }else{
        pass1.type="password";
    }
    //pass1.type = (pass1.type == "password") ? "text"  : "password";     its the same thing just in one line
}

<<<<<<< HEAD
/**
 * Cette fonction affiche ou masque le bouton valider
 */
function afficherButton(){
    let valider = document.getElementById ("valider");
    if( nomOk && emailOk && passOk){ // at the base its considered true we do not have to put =true
        valider.style.display = "initial";
    }else{
        valider.style.display = "none";
    }
}
=======

}//Window onload
>>>>>>> a037db599f5af0028fb99aef1ae41bbbf54525cc
