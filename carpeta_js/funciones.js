const Div1 = document.createElement("div");
document.body.appendChild(Div1);

const boton1 = document.createElement("button")
boton1.setAttribute('id', 'boton-1');
boton1.textContent = "Click aquí para el ejercicio 1";
boton1.onclick= ejercicio1;
Div1.appendChild(boton1);

const boton2 = document.createElement("button")
boton2.setAttribute('id', 'boton-2');
boton2.textContent = "Click aquí para el ejercicio 2";
boton2.onclick= ejercicio2;
Div1.appendChild(boton2);

function ejercicio1(precio, iva) {
    var precio = Number(prompt("¿Cuál es el precio?"))
    var iva = Number(prompt("¿Qué impuesto tiene?"))

    if (iva > 0) {
        alert("El total es: " + precio*iva)
    }
    else {
        alert("El total es: " +  (precio + precio*0.21))
    }
};

function ejercicio2 (texto) {
    var texto = prompt("Escribe un texto entre 5 y 10 palabras")

        var texto1 = texto.split("");
        var texto2 = texto1.reverse("");
        var texto3 = texto2.join("");

        alert(texto3)
};


/*  1.Crea una función que reciba 2 parámetros, precio e iva, y devuelva el precio con iva 
incluido. Si no recibe el iva, aplicará el 21 por ciento por defecto. */

/*  2.Crea una función que reciba un texto y lo devuelva al revés */

