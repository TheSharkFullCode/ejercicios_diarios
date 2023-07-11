//alert("hola mundo")
// Utilice el objeto Date para realizar las siguientes actividades

// ¿Qué año es hoy?
console.log('***imprimir el año****');

const date = new Date();
console.log(date.getFullYear());

console.log('***imprimir el mes****');
// ¿Qué mes es hoy con un número?
const Months = date.getMonth();
console.log(Months);

console.log('***imprimir el la fecha****');
// ¿Qué fecha es hoy?
const dates = date.getUTCDate();
console.log(dates);


console.log('***imprimir el dia****');
// ¿Qué día es hoy con un número?
const date2 = date.getDay();
console.log(date2);

console.log('***imprimir las horas****');
// ¿Cuál es la hora actual?
const hours = date.getHours();
console.log(hours);

console.log('***imprimir las minutos****');
// ¿Cuántos minutos hay actualmente?
const minut = date.getMinutes();
console.log(minut);

console.log('***imprimir los segundos desde 1970****');
// Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.
const seconds = date.getTime();
console.log(seconds);

console.log('***imprimir los años de vida por medio de un prmpt****');
// Escriba un script que solicite por prompt al usuario que ingrese el número de años. Calcular el número de segundos que puede vivir una persona. Supongamos que alguien vive solo cien años

const useryears = 100;
// liveyears = liveyears.getTime();
// console.log(liveyears);
let livedates = new Date();
console.log(livedates.getTime*useryears);

// Ingrese el número de años de vida: 100
//  Viviste 3153600000 segundos.
livedates = new Date();
console.log(livedates.getTime/useryears);
// Cree un formato de hora legible por humanos usando el objeto Date.

// YYYY-MM-DD HH:mm
let yearsnew = new Date();
console.log(yearsnew.getFullYear`/`+`${date}/`+`${yearsnew}`);
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm