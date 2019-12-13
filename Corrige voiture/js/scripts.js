var images = [
	"images/background.jpg",
 	"images/background2.jpg",
  	"images/background3.jpg"
];
var index = 0;

$(function(){
	setInterval(changeHeader, 15000);
});

function changeHeader(){
  //Vérifier si on est a la dernére image
  if (index == images.length - 1) {
    index = 0;
  }
  else{
    index++;
  }
  $("header").css("background-image", "url("+images[index]+")");
}