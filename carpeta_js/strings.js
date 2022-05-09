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


function ejercicio1() {
    var texto = prompt("Escribe un texto entre 5 y 10 palabras")

    texto = texto.toUpperCase()

    alert(texto)
};

function ejercicio2(texto) {
    var texto = prompt("Escribe un texto entre 5 y 10 palabras")

    var contar = texto.match(/[aeiou]/gi).length;

    alert("El numero de vocales es: " + contar);
};

function ejercicio3() {
    var texto = prompt("Escribe un texto entre 5 y 10 palabras")

        var texto1 = texto.split("");
        var texto2 = texto1.reverse("");
        var texto3 = texto2.join("");

        alert(texto3)
};


/* 1.Realiza un script que pida un texto y lo muestre en mayúsculas.
Investigar e implementar:  .toUpperCase */

/* 2.Realiza un script que cuente el número de vocales que tiene un texto. */

/* 3.Realiza un script que pida una cadena de texto y la devuelva al revés. 
Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”. */

































/* let respuesta = "OTTAWA"; 	 	 
let acierto = false; 	 	 
let contador = 0;	 	 

while(contador < 3 && acierto === false) {	 	 
    let respUsuario = prompt("Capital de Canada: (Tenes 3 intentos)").toUpperCase();	 	 
 if (respUsuario === respuesta) { 	 	 
 acierto = true; 	 	 
 document.write("Felicitaciones, acertaste");	 	 
 }	 	 
 contador++;	 	 
}	 	 
if (!acierto) {
    document.write("Lo sentimos, has consumido tus 3 intentos")
}; 	 	 

 */
