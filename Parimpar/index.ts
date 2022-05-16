let dato1 = document.getElementById("dato1");

let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");

rotulo1.innerHTML = "Ingrese un número";

btnEnviar.addEventListener("click", () => {
  let numero: number = Number(dato1.value);

  if (numero === 0) {
    console.log("Ingrese un número válido");
  } else if (numero % 2 === 0) {
    console.log("Su número es par");
  } else {
    console.log("Su número es impar");
  }
});
