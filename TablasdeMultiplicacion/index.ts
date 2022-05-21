let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");

let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "Ingrese el primer número";
rotulo2.innerHTML = "Ingrese el segundo número";
btnEnviar.addEventListener("click", () => {
  let tabla: number = Number(dato1.value);
  let numerofinal: number = Number(dato2.value);
  let resultado: number = 0;
  for (let contador: number = 1; contador <= numerofinal; contador++) {
    resultado = tabla * contador;
    console.log(tabla + " x " + contador + " = " + resultado);
  }
});
