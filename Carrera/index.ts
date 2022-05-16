let dato1 = document.getElementById("dato1");

let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");

rotulo1.innerHTML = "Ingrese su puesto en la carrera";

btnEnviar.addEventListener("click", () => {
  let puesto: number = Number(dato1.value);

  if (puesto === 1) {
    console.log("Felicitaciones, su medalla es de Oro!");
  } else if (puesto === 2) {
    console.log("Felicitaciones! su medalla es de plata!");
  } else if (puesto === 3) {
    console.log("felicitaciones! su medalla es de bronce");
  }
});
