let dato = document.getElementById("dato");

let btnEnviar = document.getElementById("enviar");
let rotulo = document.getElementById("rotulo");

rotulo.innerHTML = "Ingrese su altura";

btnEnviar.addEventListener("click", () => {
  let altura: number = Number(dato.value);

  if (altura >= 1.3) {
    console.log("Felicitaciones, usted puede pasar!");
  } else {
    console.log("su altura es menor a 1,30, no tiene permitido pasar.");
  }
});
