let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");
let dato4 = document.getElementById("dato4");

let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");
let rotulo4 = document.getElementById("rotulo4");

rotulo1.innerHTML = "Ingrese tiempo primera vuelta";
rotulo2.innerHTML = "Ingrese tiempo segunda vuelta";
rotulo3.innerHTML = "Ingrese tiempo tercer vuelta";
rotulo4.innerHTML = "Ingrese tiempo cuarta vuelta";

btnEnviar.addEventListener("click", () => {
  let vuelta1: number = Number(dato1.value);
  let vuelta2: number = Number(dato2.value);
  let vuelta3: number = Number(dato3.value);
  let vuelta4: number = Number(dato4.value);

  let tiempototal = vuelta1 + vuelta2 + vuelta3 + vuelta4;
  console.log("Tiempo total: ", tiempototal);
  console.log("Promedio de vuelta: ", tiempototal / 4);
});
