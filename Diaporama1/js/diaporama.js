//variables globales
let diaporama = ["images/img1.jpg", "images/image2.jpg", "images/metsky.jpg"];
let index = 0; // ou pointeur
let intervalle;


window.onload = function(){ //everything inside is shown after the website is already charged
    
    //On démarre le défilement automatique
    intervalle = setInterval(suivante,1000);
    
    //On charge les éléments
    let flecheDroite = document.getElementById("fleche-droite");
    let flecheGauche = document.getElementById("fleche-gauche");
    let diapo = document.getElementById("diaporama");

    //On crée les écouters d'évènements
    flecheDroite.addEventListener("click", suivante);
    flecheGauche.addEventListener("click", precedente);
    diapo.addEventListener("mouseenter", stopIntervalle);// we put what we want next to "mouseenter"as a name
    diapo.addEventListener("mouseleave", startIntervalle);

    setTimeout(masquerLoader, 3000);
  }//Fermeture window.onload


    //Cette fonction avance d'une image
    function suivante(){
        if(index < diaporama.length -1){
            //Ici je ne suis pas a la dernier image
            index++;
        }else{
            //Ici je suis à la dernier image
            index = 0;
        }
        let image = document.getElementById("image");
        image.src = diaporama[index];
    }

    function precedente(){
        if(index > 0){
            //On n'est pas au début, on décrémente l'index
            index--;
        }else{
            //On est au début, on repart à la fin
            index = diaporama.length -1;
        }
        let image = document.getElementById("image");
        image.src = diaporama[index];

    }

    /**
     * cette fonction arret intervalle
     */
    function stopIntervalle(){
        clearInterval(intervalle);
    }

    /**
     * cette fonction demarre l'intervalle
     */
    function startIntervalle(){
        intervalle = setInterval(suivante,1000);
    }

    //cette fonction masque le loader
    function masquerLoader(){
        let loader = document.getElementById("loader");
        loader.style.display = "none";
    }
    