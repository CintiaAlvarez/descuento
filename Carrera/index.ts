let dato = document.getElementById("dato");

let btnEnviar = document.getElementById("Enviar");
let rotulo = document.getElementById("rotulo");

rotulo.innerHTML = "Ingrese puesto en la carrera";

btnEnviar.addEventListener("click", () => {
  let puesto: number = "dato.value";

  if (puesto === 1) {
    console.log("Usted recibe medalla de oro");
  } else if (puesto === 2) {
    console.log("Usted recibe medalla de plata");
  } else if (puesto === 3) {
    console.log("Usted recibe medalla de bronce");
  }
});
