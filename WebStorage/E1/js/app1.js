// Pag Principal
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("myFormulary").addEventListener("submit",function(e) {
        
        e.preventDefault();

        let userName = document.getElementById("userName").value;
        let pwd = document.getElementById("pwd").value;

        localStorage.setItem("userName",userName);
        localStorage.setItem("pwd",pwd);

        document.getElementById("myFormulary").send();
    });
});