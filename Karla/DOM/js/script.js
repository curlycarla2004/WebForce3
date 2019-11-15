//On s'assure que le DOM est chargé
window.onload = function(){
    //Ici le DOM est chargé

    //On charge toutes les balises H1 de la page
    let balisesH1 = document.getElementsByTagName("h1");

    //On charge lélément qui a l'id "titre"
    let titre = document.getElementById("titre");
    console.log(titre);  

    //On change le titre de la page
    titre.innerHTML = "Nouveau titre de la page";

    //On change le fond du titre
    titre.style.color = "red";

    //On va chercher l'élément qui a l'id "conteuneur"
    let box = document.getElementById(conteneur); //we can put whatever next to let
    conteneur.innerHTML = "<h2>Titre</h2>"; 

    //On crée la balise h2
    let baliseH2 = document.createElement("h2");

    //On ajoute le texte
    baliseH2.innerHTML = "Le texte que on veut";

    //On ajoute un id "sous-titre"
    baliseH2.id = "sous-titre";

    //On ajoute la balise H2 au conteneur
    conteneur.appendChild(baliseH2);


    //On ajoute une balise A
    let baliseA = document.createElement("a");
    
    //On ajoute le texte
    baliseA.innerHTML = "Lien vers Facebook";

    //On ajoute le href
    baliseA.href = "https://facebook.com";

    //On ajoute le target
    baliseA.target = "_blank";

    //On ajoute la balise(enfant) au conteneur
    conteneur.appendChild(baliseA);

    
    console.log(baliseH2);







}//window.onload always but this on the site and the rest is in between





//tag=balises in french
//in console we can choose from the list items like inner.HTML etc
//tout les propriete sont variables