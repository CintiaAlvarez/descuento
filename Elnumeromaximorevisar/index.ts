let num = Number(prompt("Ingrese un número"));
let coningresos: boolean = false;
let maximo: number = num;

while (num !== 0) {
  if (num > maximo) {
    maximo = num;
  }
  num = Number(prompt("Ingrese un número"));
}
if (coningresos) {
  console.log("El máximo es ", maximo);
}
