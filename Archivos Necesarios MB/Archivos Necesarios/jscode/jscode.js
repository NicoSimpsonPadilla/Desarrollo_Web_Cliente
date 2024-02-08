window.onload = function() {
    document.querySelectorAll("input[type='text']")[1].addEventListener("keyup", function () {
        let correo = document.querySelectorAll("input[type='text']")[1].value;
        document.querySelectorAll("input[type='text']")[2].value = correo;
    });

    function aficiones(aficion) {
        if(aficion.checked){
            document.getElementsByTagName("textarea")[0].value += aficion.value + "\n";
        }else{
            document.getElementsByTagName("textarea")[0].value = document.getElementsByTagName("textarea")[0].value.replace(aficion.value + "\n", "");
        }
    }

    let cajas = document.querySelectorAll("input[type='checkbox']")
    cajas[0].addEventListener("click", function () {
        aficiones(cajas[0]);
    });
    cajas[1].addEventListener("click", function () {
        aficiones(cajas[1]);
    });
    cajas[2].addEventListener("click", function () {
        aficiones(cajas[2]);
    });

    document.querySelectorAll("input[type='submit']")[0].onclick = function() {
        let textos = document.querySelectorAll("input[type='text']");
        let contrasenas = document.querySelectorAll("input[type='password']");
        let comprobacion = true;
        if (textos[0].value == "") {
            alert("El nombre NO es valido. No se envia");
            comprobacion = false;
        }
        if (contrasenas[0].value.length < 8 || contrasenas[0].value == textos[0].value) {
            alert("La clave NO es valido. No se envia");
            comprobacion = false;
        }
        if (contrasenas[1].value.length < 8 || contrasenas[1].value != contrasenas[0].value) {
            alert("La repeticion de clave NO es valido. No se envia");
            comprobacion = false;
        }
        if (textos[1].value == "") {
            alert("El correo NO es valido. No se envia");
            comprobacion = false;
        }

        if (comprobacion) location:"resultado.html";
    }
}