const divPrincipal = document.createElement("div");
document.body.appendChild(divPrincipal);
divPrincipal.setAttribute('id', 'div-1');

const pagina1 = document.createElement("a");
pagina1.setAttribute('href', 'ejercicioFor-1.html');
pagina1.setAttribute('id', 'pagina-1');
pagina1.textContent = ("Click para ir a ejercicio 1");
divPrincipal.appendChild(pagina1);

const pagina2 = document.createElement("a");
pagina2.setAttribute('href', 'ejercicioFor-2.html')
pagina2.setAttribute('id', 'pagina-2');
pagina2.textContent = ("Click para ir a ejercicio 2");
divPrincipal.appendChild(pagina2);

const pagina3 = document.createElement("a");
pagina3.setAttribute('href', 'ejercicioFor-3.html')
pagina3.setAttribute('id', 'pagina-3');
pagina3.textContent = ("Click para ir a ejercicio 3");
divPrincipal.appendChild(pagina3);

const pagina4 = document.createElement("a");
pagina4.setAttribute('href', 'ejercicioFor-4.html')
pagina4.setAttribute('id', 'pagina-4');
pagina4.textContent = ("Click para ir a ejercicio 4");
divPrincipal.appendChild(pagina4);

const pagina5 = document.createElement("a");
pagina5.setAttribute('href', 'ejercicioFor-5.html')
pagina5.setAttribute('id', 'pagina-5');
pagina5.textContent = ("Click para ir a ejercicio 5");
divPrincipal.appendChild(pagina5);


/* 1. Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666 */

/* 2. Haz un script que escriba una pirámide inversa 
de los números del 1 al número que indique el usuario de la siguiente forma:
(suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22 */

/* 3. Crea script para generar pirámide siguiente con los números 
del 1 al número que indique el usuario (no mayor de 50):

1
12
123
1234
12345
123456 */

/* 4. Un script que escriba los números del 1 al 500, 
que indique cuales son múltiplos de 4 y de 9 
y que cada 5 líneas muestre una línea horizontal. Por ejemplo:

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10 */

/* 5. Realiza un script que pida número de filas y columnas y escriba una tabla. 
Dentro cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 
Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1. */
























































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
