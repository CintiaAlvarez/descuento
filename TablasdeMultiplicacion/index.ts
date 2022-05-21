let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");

let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "Ingrese el primer número";
rotulo2.innerHTML = "Ingrese el segundo número";
btnEnviar.addEventListener("click", () => {

let primernumero: number = Number (dato1.value);
let numerofinal: number = Number (dato2.value);
let cadena: string = " ";
for (primernumero = 1; primernumero <= numerofinal; primernumero++) {
  if (primernumero ) {
    cadena = cadena + primernumero + " ";
  }
}
console.log(cadena);

}
console.log("El resultado es:", primernumero, " x ", numeroactual, " = ", resultado);
}
}); 