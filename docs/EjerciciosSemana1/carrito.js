//Crear el carrito con 4 productos
const carrito = [
  { nombre: "Mango", precio: 5.50 },
  { nombre: "Aguaje", precio: 8.00 },
  { nombre: "Camu Camu", precio: 12.00 },
  { nombre: "Cocona", precio: 4.50 }
];

//Muestra cuántos productos hay usando length
console.log("Cantidad de productos:", carrito.length);

//Muestra el primer y último producto
const primerProducto = carrito[0];
const ultimoProducto = carrito[carrito.length - 1];

console.log("Primer producto:", primerProducto.nombre, "- S/", primerProducto.precio);
console.log("Último producto:", ultimoProducto.nombre, "- S/", ultimoProducto.precio);

//Calcular el total usando un bucle for
let total = 0;

for (let i = 0; i < carrito.length; i++) {
  total += carrito[i].precio;
}

console.log("Total a pagar: S/", total);