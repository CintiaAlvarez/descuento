let total: number = 0;
let positivos: number = 0;
let porcentajepositivos: number = 0;

let num = Number(prompt("Ingrese un número"));
while (num !== 0) {
  if (num > 0) {
    positivos++;
  }
  total++;
  num = Number(prompt("Ingrese un número"));
  while (num !== 0) {
    if (num > 0) {
      positivos++;
    }
    total++;
    num = Number(prompt("Ingrese un número"));
  }

  if (total > 0) {
    porcentajepositivos = (positivos * 100) / total;
    console.log(
      "porcentaje de positivos: ",
      porcentajepositivos,
      "positivos: ",
      positivos
    );
  }
}
