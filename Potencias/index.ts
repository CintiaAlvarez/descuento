let titulo1 = document.getElementById("titulo1");
let titulo2 = document.getElementById("titulo2");
let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let btnCalcular = document.getElementById("Calcular");

titulo1.innerHTML = "Ingrese base";
titulo2.innerHTML = "Ingrese exponente";

let base: number = Number(numero1.value);
let exponente: number = Number(numero2.value);

btnCalcular.addEventListener("click", () => {

// function potenciaNumero (base: number, exponente: number): number {

let dato1: number = Number(numero1.value); 
let dato2: number = Number(numero2.value);

let resultado: number = 0;

if (exponente != 0){
    for (let i = 1; i<=exponente; i++) { 
  }else{
    return 1;
  };

  return resultado;
}

btnCalcular.addEventListener("click", () => {
let total: number = calcularResultado(Number(numero1.value),
                                      Number(numero2.value), 
                                      Number(operacion.value));
}
console.log("La potencia es: ", resultado(base, exponente));

}
