let divPrincipal = document.createElement("div");
document.body.appendChild(divPrincipal);

let boton1 = document.createElement("button");
boton1.setAttribute('id', 'boton-1');
boton1.textContent = "Click aquí para el ejercicio 1";
boton1.onclick= ejercicio1;
divPrincipal.appendChild(boton1);

let boton2 = document.createElement("button");
boton2.setAttribute('id', 'boton-2');
boton2.textContent = "Click aquí para el ejercicio 2";
boton2.onclick= ejercicio2;
divPrincipal.appendChild(boton2);

let boton3 = document.createElement("button");
boton3.setAttribute('id', 'boton-3');
boton3.textContent = "Click aquí para el ejercicio 3";
boton3.onclick= ejercicio3;
divPrincipal.appendChild(boton3);


// Ejercicio 1 Generar número aleatorio dentro de un rango

function ejercicio1() {

    alert('Bienvenido al ejercicio 1')
    
    var numAleatorio = Math.floor(Math.random() * 14 + 1);
    
    document.write(numAleatorio)

};

/*Ejercicio 2 investigar https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
    1. Obtener un número aleatorio entre 5 y 7.  
    2. Obtener una letra aleatoria de tu nombre. */

function ejercicio2() {

    alert('Bienvenido al ejercicio 2')

    var numVariado = Math.floor(Math.random() * 6 + 5);

    var nombre = prompt('Escribi tu nombre ')
    var nombreVariado = nombre[Math.floor(Math.random() * nombre.length -1)]

    document.write(numVariado + nombreVariado)
}


/* Ejercicio 3 Calculamos un número aleatorio en un rango comprendido entre 0 y el número de letras de tu nombre.
Utilizamos ese número aleatorio para obtener la letra de tu nombre que ocupa esa posición.
Mostramos la letra en la pagina. */

function ejercicio3() {
    alert('Bienvenido al ejercicio 3')

    var nom = prompt('Escribi tu nombre ')
    var cantidad = nom.length

    var nombreVariado = nom[Math.floor(Math.random() * cantidad + 0)]

    document.write(nombreVariado)
    }