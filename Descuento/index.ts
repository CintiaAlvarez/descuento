// RESULTADO ORIGINAL

let dato = document.getElementById("dato");
let btnEnv = document.getElementById("BtnEnviar");
let rotulo = document.getElementById("rotulo");

rotulo.innerHTML = "Ingrese costo del producto";

btnEnviar.addEventListener("click", () => {
  
let precio: number = 450.5;
let porcentaje: number = 0.1;

let descuento: number = precio * porcentaje;
let resultado: number = precio - descuento;
console.log("Precio final con descuento ", resultado);
}
