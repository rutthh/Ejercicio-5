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

function ejercicio1() {
var d = new Date();

var dia=new Array(7);
dia[0]="domingo";
dia[1]="lunes";
dia[2]="martes";
dia[3]="miercoles";
dia[4]="jueves";
dia[5]="viernes";
dia[6]="sabado";

var meses=new Array(12);
meses[0]="Enero";
meses[1]="Febrero";
meses[2]="Marzo";
meses[3]="Abril";
meses[4]="Mayo";
meses[5]="Junio";
meses[6]="Julio";
meses[7]="Agosto";
meses[8]="Septiembre";
meses[9]="Octubre";
meses[10]="Noviembre";
meses[11]="Diciembre";
document.write('Hoy es ' + dia[d.getDay()] + ', ' + d.getDate() + ' de ' + meses[d.getMonth()] + ' de '+d.getFullYear(),' y son las '+d.getHours() + ': ' + d.getMinutes() + ' horas ');
};

function ejercicio2() {

    var nombre = prompt('Introduce tu nombre y dos apellidos');
    console.time("nombre");
    var tiempo = console.timeEnd("nombre");

    document.write('En escribir ' + nombre + ' tardaste ' + tiempo )
};

function ejercicio3() {
    var mes = prompt('Introduce tu mes ');
    var año = prompt('Introduce el año ');

    const tabla = document.createElement("table");
    document.body.appendChild(tabla);

}

/* 1. Realiza un script que escriba en el documento la fecha y hora actual. 
La salida deberá tener el siguiente formato:
Hoy es martes, 29 de Marzo de 2022 y son las 14:32 horas. */

/* 2. Realiza un script que pida un nombre y dos apellidos 
e indique el tiempo que se tardó en introducir los datos. 
La salida sería algo así como : En introducir Luís Perez Alonso ha tardado 25 segundos. */

/* 3. Realiza un script pida un mes y año e imprima su calendario. 
No hace falta esmerarse en la presentación del calendario, 
el calendario simplificado puede ser del tipo:
OCTUBRE – 2022 */
