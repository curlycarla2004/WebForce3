let diaporama = [ "../images/background2.png" , "../images/background.png" , "../images/background3.png"]
let intervalle;

$(function(){
    $(window).on("scroll", moreCars);
    $("#hidden").hide();

});
  
function moreCars(){
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
}