
window.onload = function() {

    let botones = document.querySelectorAll("input[type='button']");
    let cajas = document.querySelectorAll("div");
    let valor1 = 0;
    let valor2 = 0;
    let valor3 = 0;
    let v1 = 0;
    let v2 = 0;

    botones[1].setAttribute("disabled", true);
    
    botones[0].onclick = function() {

        if (valor3 != 0) {
            cajas[2].removeChild(valor3);
        }
        
        botones[0].setAttribute("disabled", true);
        botones[1].removeAttribute("disabled");
        
        v1 = parseInt(Math.random() * 50 + 1);
        v2 = parseInt(Math.random() * 50 + 1);

        valor1 = document.createTextNode(v1);
        valor2 = document.createTextNode(v2);
        
        cajas[0].appendChild(valor1);
        cajas[1].appendChild(valor2);


    }

    botones[1].onclick = function() {

        botones[1].setAttribute("disabled", true);
        botones[0].removeAttribute("disabled");
        
        if (v1 > v2) {
            valor3 = document.createTextNode(v1);
        } else {
            valor3 = document.createTextNode(v2);
        }

        cajas[2].appendChild(valor3);

        cajas[0].removeChild(valor1);
        cajas[1].removeChild(valor2);

    }
}