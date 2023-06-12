

// var numero = 10;
// switch (numero) {
//     case 1:
//         console.log("soy un uno")
//         break;
//     case 10:
//         console.log("soy un 10")
//         break;
//     case 100:
//         console.log("soy un 100")
//         break;

//     default:
//         Console.log("no soy nada")
//         break;
// }


// if (false === !true) { 
//     console.log(false == true + " el primero") 
// } else { 
//     console.log(true === !false + " el segundo") 
// }

// var frutas = ["Manzanas", "platano", "cereza", "Fresa"];

// function saludarFrutas(frutas){

//     console.log(`hola, ${frutas}`);
// }

// for (let index = 0; index < frutas.length; index++) {
//     saludarFrutas(frutas[index])
    
// }

// for (const fruta of frutas) {
//     saludarFrutas(fruta)
// }

// let familiares = ["misha", "Elvira", "karen", "Adriana", "Javier",]

// function cumpleaños(familiar){
//     console.log(`quiero pasar mi cumple con ${familiar}`)
// }

// for (const familiar of familiares) {
//     cumpleaños(familiar)
    
// }

// while (familiares.length>0) {
//     console.log(familiares)
//     var familiar = familiares.shift();
//     cumpleaños(familiar)

// }


// var nuevo = "santi";
// var estudiantes = ["Juan", "Juanita", "Daniela", "david"];
// var estudiante="";
// var deathCount = 2;
// switch (true) {
//     case (deathCount === 0):
//         estudiante=estudiantes.push(nuevo)
//         return(estudiantes)
//         break;
//     case (deathCount >= 0):
//         for (let i = 0 ;i !== deathCount ;i++) {
//             estudiante=estudiantes.pop();
//         }
//         estudiante=estudiantes.push(nuevo)
//         return(estudiantes)
//         break;
// }

// var miAuto = {
//     marca: 'Toyota',
//     modelo: 'Corola',
//     anno: 2020,
//     detalleDelAuto: function(){
//         console.log("hola")
//     }
// };

// console.log(miAuto.anno)
// console.log(miAuto.modelo)
// console.log(miAuto.detalleDelAuto())

// var marca = [
//     "Abarth",
//     "Alfa Romeo",
//     "Aston Martin",
//     "Audi",
//     "Bentley",
//     "BMW",	
//    "Cadillac",
//     "Caterham",
//     "Chevrolet",
//     "Citroen",
//     "Dacia",
//     "Ferrari",
//     "Fiat",
//     "Ford",
//     "Honda",
//     "Infiniti",
//     "Isuzu",
//     "Iveco",
//     "Jaguar"   	 	 
// ]
// var modelo = [
//     "C-Max",
//     "Fiesta",
//     "Focus",
//     "Mondeo",
//     "Ka",
//     "S-MA",
//    " B-MAX",
//     "Grand C-Max",
//     "Tourneo Custom",
//     "Kuga",
//     "Galaxy",
//     "Grand Tourneo Connect",
//     "Tourneo Connect",
//     "EcoSport",
//     "Tourneo Courier",
//     "Mustang",
//     "Transit Connect",
//     "Edge",
//     "Ka+"
// ]
// var annio = [
//     "1988",
//     "1989",
//     "1978",
//     "1989",
//     "1928",
//     "1989",
//     "1968",
//     "1989",
//     "1888",
//     "1989",
//     "1288",
//     "1989",
//     "1938",
//     "1989",
//     "1988",
//     "1999",
//     "1983",
//     "1989",
//     "1918"
// ]
// //* *//
// function auto(marca, modelo, annio){
//     this.marca=marca;
//     this.modelo=modelo;
//     this.annio=annio;
// }

// for (let i=0;i<19;i++){
//     var nuevoAuto = new auto (marca[i], modelo[i], annio[i]);
//     console.log(nuevoAuto)
// }

const valor1 = document.querySelector('#valor1');
const valor2 = document.querySelector('#valor2');
const resultado = document.querySelector('.resultado');
const button = document.querySelector('#button');

const valor3 = document.querySelector('#valor3');
const valor4 = document.querySelector('#valor4');
const answerd = document.querySelector('.answerd')
const button2 = document.querySelector ('#button2')

button.addEventListener('click', operacion)

function operacion(){
    const operation= +valor1.value + +valor2.value
    console.log(operation);
    resultado.innerHTML = operation;
}

button2.addEventListener('click', operation2)

function operation2(){
    const operation2= +valor3.value + +valor4.value;
    answerd.innerHTML=operation2
}