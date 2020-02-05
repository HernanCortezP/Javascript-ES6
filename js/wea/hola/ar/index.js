var arreglo = 
[ 7, 10, 14];

var arregloObjetos = [
    {
      nombre: "Duffy Duck",
      negro: true,
      skills: ["Pico Elastico", "Supervivencia"]
    },
    {
      nombre: "Donald",
      negro: false,
      skills: ["Habla muy raro", "Tiene dinero"]
    },
    {
        nombre: "Patito Juan",
        negro: false,
        skills: ["Bendecido", "Tiene Suerte"]
    },
    {
        nombre: "Elsa Pato",
        negro: true,
        skills: []
    }
]

// Destructuring o asignacion por destructuring
const {nombre, negro, ...resto} = arregloObjetos; // estoy usando las 2 primeras y las demas las asigno a "resto"
 
// agregar nuevo elemento al final de un arreglo
arreglo.push("caguama");
arreglo.push(99);

// eliminando el ultimo elemento del arreglo
arreglo.pop();

// eliminando el primer elemento del arreglo
arreglo.shift();

// Encontrar un elemento en el arreglo
let indiceArreglo = arreglo.indexOf("caguama"); // agregar el valor del indice a variable
console.log(arreglo.indexOf("caguama")); // para ver en consola el valor del indice
console.log(arreglo[indiceArreglo]); // imprimir el contenido de dicho indice

// Clonar Arreglo
let copiaArreglo = arreglo.slice();

console.log(arreglo);

// if ternarios para no escribir tanto codigo
console.log(arregloObjetos[1].negro ? "este pato es prieto" : "este pato es werito");
// el signo significa si esa propiedad es verdadero y los dos puntos significa de lo contrario o si es false

// recorrer arreglos con ciclo for
for(let x=0; x < arregloObjetos.length; x++){
console.log("Nomkbre del pato:"+ arregloObjetos[x].nombre);
console.log("Posicion del pato:"+ x);
}

// Estructura del for
//for("indice"; "condicion"; "Incremento"){
 // aqui va lo que quieres que se repita
// }

// ciclo ForEach
arregloObjetos.forEach( pato => { // recorrer arreglos con ciclo forEach
 console.log(pato.nombre);

if(pato.skills.length > 0) {

pato.skills.forEach(skills => {
    console.log("habilidades de patos: "+skills);
})
} else {
    console.log("Este pato no tiene habilidades");
}
   console.log("##################");
})

// Funcion normal
function HolaMundo() {
    console.log("hola mundo");
}

HolaMundo();

// Funcion tipo Flecha, estas funciones siempre son anonimas, y se usan porque son mas ligeras
// Funcion de tipo flecha anonima () =>{}
// las funciones de tipo felcha se suelen guardar en una constante, abarcan menos espacio en memoria
const miNombre = (nombre, apellido) => {
    return `Me llamo ${nombre},${apellido}`;
}

let nombre = miNombre("Hernán", "Cortez");
console.log(nombre);

// Sumar 2 numeros con una funcion de tipo flecha
const Suma2 = (numero1, numero2) => {
    let resultado = numero1+numero2;
return `La suma de ${numero1} + ${numero2} es igual a :${resultado}`
}

let contenedor = Suma2(5,4);
console.log(contenedor);


// Funciones de espera de tiempo
console.log("carga completa.");


const miFuncion = edad => {

  console.log("Estamos calculando tu edad...");

  setTimeout( () => {
       miEdad(edad);
  }, 5000);
  
}

const miEdad = (edad) => {
   console.log("tu edad es de:" +edad);
}

miFuncion(23);

// El metodo/Funcion .map() es para recorrer un array y siempre tiene q devolver algo
const numeros = [2,10,15,20];
const dobles = numeros.map( (numero)=> { // calculando el doble de cada numero del arreglo
  return numero*2;
})
console.log(dobles);

// Formateando un array con la ayuda de .map()
array1 = [
    {clave: "nombre", valor: "Hernan"},
    {clave: "apellido", valor: "Cortez"},
    {clave: "apellidoDos", valor: "Perales"}
];

const reFormatearArray = array1.map( (objeto) => {
let obj = {};
obj[objeto.clave] = objeto.valor;
return obj;

})

console.log(reFormatearArray);

// la funcion .filter() sirve para crear un filtro de un arreglo 

const arrayHeroes = [
    "Deadpool",
    "Flash",
    "Batman",
    "Iron Man",
    "Spider Man",
    "Thor"
];

const resultHeroesFilter = arrayHeroes.filter((heroe) => {
return heroe.length == 8; // nos devuelve al heroe que tiene 8 caracteres.
});
console.log(resultHeroesFilter);

const arregloMezclado = ["Perro", "Gato", false, 8,9,"Pato",5.5,true];

const arregloFiltrado = arregloMezclado.filter((item)=> {

    return typeof item === "boolean";
});

console.log(arregloFiltrado);

// Convertir variables de tipo number a string y de string a number
var numeroUno = "20";
var numeroDos = 40;

 // numeroUno = parseInt(numeroUno);
var nuevo = numeroDos.toString();
console.log(typeof nuevo);
var total = numeroUno + numeroDos;

console.log(total);

// Reemplazar el valor de una variable, la funcion replace solo trabaja con strings.
var texto = "mi coche es color rojo";
console.log(texto);
var corregida = texto.replace("rojo", "Plateado");

console.log(corregida);

// Transformar un objeto a formato JSON con la funcion Stringify
const carro = {
    nombre: "Ferrari",
    modelo: 1996,
    precio: 8888888
}
console.log(carro);
const carroJson = JSON.stringify(carro);
console.log(carroJson);

// Transformar un JSON a un objeto con la funcion JSON.parse
const jsonRecibido = '{"nombre":"Ferrari","modelo":1996,"precio":8888888}';

const jsonAobjeto = JSON.parse(jsonRecibido);
console.log(jsonAobjeto);

// palabra reservada NEW para crear objetos con tipo...
function Animal(nombre, edad, tipo) {
    this.nombre = nombre;
    this.edad = edad;
    this.tipo = tipo;
}

let pirata = new Animal("Pirata",12,"Perro");
let pitufa = new Animal("Pitufa",6,"Gato");
pirata.velocidad = "22Km";
console.log(pirata);
console.log(pitufa);

// Funciones Asincronas (Async Await) es para que la ejecucion de algo lleve un orden
var comida = null;

function actualizarComida() {
    console.log("actualizacion Iniciada");
    return new Promise ( (resolve, reject)=> {
       setTimeout( ()=> {
            console.log("actualizacion Completada");
            resolve("Pozole");
        
       }, 2000);
     // reject("occurrio un error")
    })

}
// Para decirle a una funcion que se espere, esta tiene que devolver una promesa, y asi poder usar el await
// una peticion Fetch ya devuelve una promesa en caso de no ser una peticion de este tipo si es necesario devolver promesa
async function saludar() {
     let comida = await actualizarComida();
      console.log("Actualizacion finalizada");
      console.log("El nombre de la comida es:"+ comida);
}

saludar();



