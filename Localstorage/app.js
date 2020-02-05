// en el localstorage no se guarda informacion sencible ni muy importante

var nombre = "hernan";
var apellido = "cortez";
var edad = 23;

localStorage.setItem("nombre", nombre); // lo que esta en "" es el nombre de la key qe llevara ese valor
localStorage.setItem("apellido", apellido);
localStorage.setItem("edad", edad);
localStorage.setItem("nombre", "mermas"); // para actualizar un valor se pone la key y entre comillas el valor
console.log(localStorage.getItem("nombre"));
console.log(localStorage.getItem("apellido"));
console.log(localStorage.getItem("edad"));

localStorage.removeItem("apellido"); // para borrar se pone entre comillas el nombre de la key

const carro = {
    nombre: "Civic",
    marca: "Honda",
    modelo: 2004,
    precio: 45000
}

console.log(carro);

const carroJSON = JSON.stringify(carro);
localStorage.setItem("carro", carroJSON);
console.log(carroJSON);

let carroUpdated = localStorage.getItem("carro");
carroUpdated = JSON.parse(carroUpdated); // pasamos el json a objeto para poder modificarlo
carroUpdated.precio = 40000; // modificamos la propiedad precio
carroUpdated = JSON.stringify(carroUpdated); // lo devolvemos a formato JSON
localStorage.setItem("carro", carroUpdated); // le insertamos el nuevo valor al carro
console.log(carroUpdated);

function enviarFormulario(){
    event.preventDefault(); // para que no recargue la pagina y no se borre el clg
  console.log("Formulario Enviado..");
}


function getPeliculasPopulares() { // PETICIONES CON FETCH
    
const URL_API = "https://api.themoviedb.org/3/movie/popular?api_key=382baa856e9a8fa67631445db4c02bcd&language=es-ES&page=1";
 // Fetch devuelve una promesa por eso se trabajo con el then
fetch(URL_API).then(response => { // el then saca el contenido de esa promesa y se lo asigna a "response"
    return response.json() // todas las promesas tienen qe devolver algo...saca el body y lo convierte en JSON y lo retorna
// a su vez ese return esta devolviendo otra promesa y abajo se trabaja con ella para extraer su contenido
}).then(result =>{
    console.log(result);
    const peliculas = result.results

    peliculas.forEach(pelicula =>{ // recorremos el arreglo de la pagina 1 que contiene 20 peliculas
        const {title, vote_count, vote_average} = pelicula;

        console.log(title);

    });
})

}

getPeliculasPopulares();