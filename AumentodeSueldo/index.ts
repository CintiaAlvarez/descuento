let dato1 = document.getElementById("dato1");

let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");

rotulo1.innerHTML = "Ingrese su sueldo";

btnEnviar.addEventListener("click", () => {
  let sueldoingresado: number = Number(dato1.value);
  

  if (0 < sueldoingresado && sueldoingresado <= 15000 ) {
    console.log("Usted recibirá un aumento del 20%");
  } else if (15001 < sueldoingresado && sueldoingresado <= 20000 ) {
    console.log("Usted recibirá un aumento del 10%");
  } else if (20001 < sueldoingresado && sueldoingresado <= 25000 ) {
    console.log("Usted recibirá un aumento del 5%");
  } else if (sueldoingresado > 25000) {
    console.log("Usted no recibirá aumento");
});
