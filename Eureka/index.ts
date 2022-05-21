let contador = 1;
let claveingresada: string;

while (contador <=3 && claveingresada != "eureka"{
  claveingresada = prompt ("introduzca la clave");
  contador++;
}
if (claveingresada == "eureka"){
  console.log("clave corecta");
}else{
  console.log("ha agotado los intentos");
}
});