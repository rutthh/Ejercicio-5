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

const boton3 = document.createElement("button")
boton3.setAttribute('id', 'boton-3');
boton3.textContent = "Click aquí para el ejercicio 3";
boton3.onclick= ejercicio3;
Div1.appendChild(boton3);

function ejercicio1(nota) {
    var nota = Number(prompt("¿Cuál es tu nota?"));

        if (nota>=0 && nota<3) {
            alert("Muy deficiente")
        }
        else if (nota>=3 && nota<5) {
            alert("Insuficiente")
        }
        else if (nota>=5 && nota<6) {
            alert("Suficiente")
        }
        else if (nota>=6 && nota<7) {
            alert("Bien")
        }
        else if (nota>=7 && nota<9) {
            alert("Notable")
        }
        else if (nota>=9 && nota<=10) {
            alert("Sobresaliente")
        }
        else {
            alert("Lo escrito es incorrecto")
        }
    };

    function ejercicio2 () {
        var final = "";
        do {
            var texto = prompt("Escribe palabras");
            if (final == "") {
                final = final + texto;
            }
            else {
                final = final + "-" + texto;
            }
        } while (confirm("¿Quiere continuar?"));
        alert(final);
    }

    function ejercicio3 () {
        var suma = 0;
        do {
        var numero = prompt("Introduce un numero");
        if (Number(numero) == numero) {
        numero = Number(numero);
        suma = suma + numero;
        }
        else {
        if (numero != undefined) {
            alert(numero + " no es un número");
        }
        }
        } while (numero != undefined);
        alert(suma);
    }

/* 1. Crear un Programa que Pide una nota (número). Muestra la calificación según la nota:
0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente */

/* 2. Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -. */

/* 3. Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo. 
Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. */


