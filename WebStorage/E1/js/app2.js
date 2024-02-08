// Pag Recepcion
document.addEventListener("DOMContentLoaded", function(){
    let userName = localStorage.getItem("userName");
    let pwd = localStorage.getItem("pwd");

    document.getElementById("userName").appendChild(userName);
});