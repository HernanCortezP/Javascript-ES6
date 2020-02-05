// las cookies son unos registros q se guardan en el navegador del cliente/usuario
// estas sirven para almacenar atos no sencibles (Nunca guardar contraseñas)
// se puede guardar el carrito de compras para el usuario y que se borre despues de 24hrs
// var nombre = escape("Hern;a:n"); // para pasar los simbolos a valor html
// console.log(nombre);
// console.log(unescape(nombre)); // para dejar los simbolos como tal
// document.cookie = "nombre=Hernan";
// document.cookie = "apellidos=Cortez Perales";

// let cookies = document.cookie;
// console.log(cookies);

const crearCookies = (clave, valor) => {

    const valorEscape = escape(valor);
    let mesSiguiente = new Date();
    mesSiguiente.setMonth(mesSiguiente.getMonth() +1);// para que expire 1 mes despues
    
    document.cookie = `${clave}=${valorEscape};expires=${mesSiguiente};`;
};

const borrarCookies = clave => {

    let mesAnterior = new Date();
    mesAnterior.setMonth(mesAnterior.getMonth() -1);// para que expire 1 mes despues
    
    document.cookie = `${clave}=Y;expires=${mesAnterior};`;
};

crearCookies("marcaCoche", "Honda");
crearCookies("fuerzaCoche", "170cw");

//borrarCookies("fuerzaCoche"); // para borrar la cookie con clave fuerzaCoche

const obtenerCookies = () => { // para separar la cookie y convertirlas en un arreglo de objeto
   const cookies = document.cookie;
   const arrayCookies = cookies.split('; ');
   let objetoCookies = {};

   arrayCookies.forEach(cookie => {
       const cookieArray = cookie.split("=");
       const keyItem = cookieArray[0];
       objetoCookies[keyItem] = unescape(cookieArray[1]);
   })

   return objetoCookies;
}

const cookies = obtenerCookies();
console.log(`
Mi carro de la marca ${cookies.marcaCoche} tiene ${cookies.fuerzaCoche} de potencia
`);

