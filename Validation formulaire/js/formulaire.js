window.onload = function(){

let pass1 = document.getElementById('pass1');
let pass2 = document.getElementById('pass2');


function validate password()
{
    if(pass1.value.length > 5)
    {
        pass1.style.backgroundColor = "green";
    }
    else
    {
        pass1.style.backgroundColor = "red";
        return;
    }
  
    if(pass1.value == pass2.value)
    {
        pass2.style.backgroundColor = "green";
    }
	else
    {
        pass2.style.backgroundColor = "red";

    }
}  


}//Window onload