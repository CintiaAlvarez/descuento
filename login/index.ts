let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");

let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "Ingrese su usuario";
rotulo2.innerHTML = "Ingrese su contraseña";

btnEnviar.addEventListener("click", () => {
  let usuarioingresado: string = dato1.value;
  let contraseñaingresada: string = dato2.value;
  let usuario: string = "Juan";
  let contraseña: string = "claveJuan";

  if (usuarioingresado === usuario && contraseñaingresada === contraseña) {
    console.log("Puede ingresar");
  } else {
    console.log("Usuario y contraseña inválidos");
  }
});
