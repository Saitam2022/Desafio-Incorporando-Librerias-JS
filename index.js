/*
// Creación de la clase Producto utilizando un constructor.

class Producto {
    constructor(nombre, precio, detalle, cantidad) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.detalle = detalle;
        this.cantidad = cantidad;
        this.vendido = false;
    }
    sumarIva() {
        return this.precio * 1.21
    }
    precioSugerido() {
        return this.precio * 1.21 * 1.25;
    }
}

// FUNCIONES
function consola (descripcion) {
    console.log (descripcion)
}

// Creacion de un array y de un push para agregar productos al array. Utilice el do - while, para que haga la comprobación del ESC despues de al menos un ciclo

const arrayProductos = [];

let comprobacion = ""
do{
    comprobacion = prompt("Ingrese un nombre de producto o escriba 'ESC' para terminar de agregar. Por favor, ingrese minimo 3 productos");
    if (comprobacion === "ESC" || comprobacion ==="esc" || comprobacion === "Esc" || comprobacion === "ESc" || comprobacion === "eSC"){
        break;
    } else {
        let nombreP = comprobacion;
        let precioP = prompt("Ingrese el precio del producto");
        let detalleP = prompt("Ingrese la descripcion del producto");
        let cantidadP = prompt("Ingrese la cantidad de unidades del producto");
        arrayProductos.push(new Producto(nombreP, precioP, detalleP, cantidadP));
    }
} while (comprobacion != "ESC" || comprobacion != "esc" || comprobacion != "Esc" || comprobacion != "ESc" || comprobacion != "eSC")
alert("En la consola podrás encontrar el detalle de los productos ingresados");    
consola (arrayProductos);

//Sumando IVA a los productos y mostrandolo en la consola
for (let producto of arrayProductos) {
//    alert("Ahora en la consola aparecerán los distintos productos ingresados, con el precio actualizado, agregándole el IVA") -  - Esto lo comenté ya que me gustaba que hubiera alertas, pero en la rubrica decia que estos no debían interrumpir el procesamiento
    consola ("------PRODUCTO CON IVA INCLUIDO------")
    consola ("Nombre del producto: " + producto.nombre);
    consola ("Descripción: " + producto.detalle);
    consola ("Unidades disponibles: " + producto.cantidad);
    consola ("Precio con IVA incluido: " + producto.sumarIva());
}

//Mostrar los productos del array que tienen poco Stock (menos de 10unidades)
let pocoStock = arrayProductos.filter(producto => producto.cantidad < 10);
// alert ("Se mostraran los productos con poco stock - menos de 10 unidades")  - Esto lo comenté ya que me gustaba que hubiera alertas, pero en la rubrica decia que estos no debían interrumpir el procesamiento
consola("-------POCO STOCK--------")
consola ("Productos con poco stock, comprar nuevamente")
consola (pocoStock);

//Ordenar por cantidad de stock ascendente

let ordenarCantidadAsc = [];
ordenarCantidadAsc = arrayProductos.map (elemento => elemento);
ordenarCantidadAsc.sort(function(a, b) { 
    return a.cantidad - b.cantidad;
});
// alert ("Se mostraran los objetos del array en orden ascendente")  - Esto lo comenté ya que me gustaba que hubiera alertas, pero en la rubrica decia que estos no debían interrumpir el procesamiento
consola("-------ORDEN ASCENDENTE--------")
consola("Productos ordenados por Cantidad (ascendente): ");
consola(ordenarCantidadAsc)

//Ordenar por cantidad de stock descendente

let ordenarCantidadDesc = [];
ordenarCantidadDesc = arrayProductos.map (elemento => elemento);
ordenarCantidadDesc.sort(function(a, b) { 
    return b.cantidad - a.cantidad;
});
// alert ("Se mostraran los objetos del array en orden descendente") - Esto lo comenté ya que me gustaba que hubiera alertas, pero en la rubrica decia que estos no debían interrumpir el procesamiento
consola("-------ORDEN DESCENDENTE--------")
consola("Productos ordenados por Cantidad (descendente): ");
consola(ordenarCantidadDesc)
*/