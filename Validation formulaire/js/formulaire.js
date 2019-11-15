window.onload = function(){

let pass1 = document.getElementById('pass1');
let pass2 = document.getElementById('pass2');
let goodColor = "green";
let badColor = "red";

function validate password()
{
    if(pass1.value.length > 5)
    {
        pass1.style.backgroundColor = "goodColor";
    }
    else
    {
        pass1.style.backgroundColor = "badColor";
        return;
    }
  
    if(pass1.value == pass2.value)
    {
        pass2.style.backgroundColor = "goodColor";
    }
	else
    {
        pass2.style.backgroundColor = "badColor";

    }
}  

}//Window onload