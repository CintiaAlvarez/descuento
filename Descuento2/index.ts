let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");

let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");

rotulo1.innerHTML = "Indique precio";
rotulo2.innerHTML = "Indique cantidad";
rotulo3.innerHTML = "Indique mes";

btnEnviar.addEventListener("click", () => {
  let precio: number = Number(dato1.value);
  let cantidad: number = Number(dato2.value);
  let mes: number = Number(dato3.value);
  let total: number = precio * cantidad;

  if (mes === "Octubre") {
    let descuento: number = total * 0.15;
    console.log(
      "Tu compra con el descuento de octubre queda en: ",
      total - descuento
    );
  } else {
    console.log("Usted no obtuvo descuento: ", total);
  }
});
