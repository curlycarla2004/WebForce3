let sushiOk, makiOk,sashimiOk,yakitoriOk,onigriOk
$(function(){  //there are different versions how to write window.onload
    $("#chat").on("change",chooseCat);
    
   
});//fermeture $function

function chooseCat(){
    if($(this) = "" ){ //
        $(this).css("border-color", "red"); 
        
    }else{
        $(this).css("border-color", "green"); 
    }
}