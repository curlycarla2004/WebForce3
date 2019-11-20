//variables globales ne change pas en jquery
let diaporama = ["images/img1.jpg", "images/image2.jpg", "images/metsky.jpg"];
let index = 0; // ou pointeur
let intervalle;

$(function(){  //there are different versions how to write window.onload

    intervalle = setInterval(suivante,3000);

    $("#fleche-droite").on("click", suivante);
    $("#fleche-gauche").on("click", precedente);
    $("#diaporama").on("mouseenter", stopIntervalle);
    $("#diaporama").on("mouseleave", startIntervalle);
    $("#red-circle").on("click", circleMoves);

    setTimeout(masquerLoader, 3000);
    //$("#loader").fadeIn(1000).delay(3000).fadeOut(3000);

});//fermeture $function

function suivante(){
    if(index < diaporama.length -1){
        index++;
    }else{
        index = 0;
    }

    $("#image").fadeTo(1000, 0.05 , function(){   //opacite inside fadeTo entre 0 et 1 // fadeOut([time milisec], [complete-put function inside])
        $("#image").attr("src", diaporama[index]);
    }).fadeTo(1000, 1);
    //$("#image").attr("src", diaporama[index]);
    
}

function precedente(){
    if(index > 0){
        index--;
    }else{
        index = diaporama.length -1;
    }

    $("#image").fadeTo(1000, 0.05 , function(){   
        $("#image").attr("src", diaporama[index]);
    }).fadeTo(1000, 1);
    //i could put fadeOut or fadeIn instead of fadeTo but my mouseenter and mouseleave will not work
}

function stopIntervalle(){
        clearInterval(intervalle);
}

function startIntervalle(){
    intervalle = setInterval(suivante,1000);
}

function masquerLoader(){
    $("#loader").hide();
}
    
function circleMoves(){
    //$("#red-circle").animate({left: "1100px"})//colors ,borders and others u have to do with .css
    $(this).animate({
        right: 0
    }, 2000, function(){
        $(this).animate({
            top: "+=400"
        },2000, function(){
            $(this).animate({
                top:"-=400",
                left: 0
            },2000, function(){
                $("#fini").fadeIn();
            })
        }) 
    });
}
    ///we could put this instead of "red-circle"
    //"0px" can be used also
    //we could put this instead of "fini"

