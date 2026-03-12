document.getElementById("main-site").style.display="none";

function login(){

let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;

if(user=="admin" && pass=="1234"){

document.getElementById("login-page").style.display="none";
document.getElementById("main-site").style.display="block";

}

else{
alert("Invalid Login");
}

}