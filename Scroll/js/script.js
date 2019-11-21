//$(document).height() if i type this in a document it will give me the height of the document

//$(window).height() height of my window and same thing if typed in a console

//$(window).scrollTop()

$(function(){
  $(window).on("scroll", defile);
  $("#hidden").hide();
});

function defile(){
  let hauteurDoc = $(document).height();
  let hauteurFenetre = $(window).height();
  let hauteurCourante = $(window).scrollTop();

  if(hauteurCourante == 0){
    console.log("je suis en haut");
  }else{
    if(hauteurCourante == hauteurDoc - hauteurFenetre){
      console.log("Je suis en bas");
      $("#hidden").show();
    }
  }
  //Barre de progression
  //Hauteur du document, Position actuelle, Hauteur de la fenetre et largeur de la fenetre
  let largeurFenetre = $(window).width();
  let largeurBarre = hauteurCourante / (hauteurDoc - hauteurFenetre) * largeurFenetre;  

  $("#progress").css("width", largeurBarre);  //+"%" car si on precise pas c'est des pixels
}


