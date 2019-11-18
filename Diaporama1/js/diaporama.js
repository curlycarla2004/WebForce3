//let diaporama = ["images2", "img1", "metsky"];
//for(let ligne = 0; ligne < diaporama.length; ligne++){ 
    //console.log(diaporama[ligne])
//}

var i = 0;
var images = [];
var timle= 3000;

images[0] = "img1.jpg";
images[1] = "image2.jpg";
images[2] = "metsky.jpg";

function changeImg(){
    document.slide.src = images[i];

    if(i<images.length - 1){
        i++;
    }else{
        i=0;
    }
    setTimeout("changeImg()", time);
}   