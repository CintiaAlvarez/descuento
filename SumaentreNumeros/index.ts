let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");

let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "Ingrese el primer número";
rotulo2.innerHTML = "Ingrese el primer número";
btnEnviar.addEventListener("click", () => {

let numeroinicial: number = Number (dato1.value);
let numerofinal: number = Number (dato2.value);
let numeroactual, resultado: number;
numeroactual = numeroinicial;
resultado = 0;

while (numeroactual <= numerofinal){
  resultado = resultado + numeroactual;
  numeroactual++;
}
console.log("El resultado es: ", resultado);