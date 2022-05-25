let maximo, minimo, promedio, contador, num, suma: number;
let num = Number(prompt("Ingrese un número (0 para cortar)"));
contador = 0;
suma = 0;
promedio = 0;

while (num !=0){

if (num < minimo) {
   minimo = num;
} else if (num > maximo) {
   maximo = num;
}
}
suma+=num;
contador++;
let num = Number(prompt("Ingrese un número"));
}

if (contador > 0){
 promedio = suma / contador;
 console.log ("El mínimo es: ", minimo);
 console.log ("El máximo es: ", maximo);
 console.log ("El promedio es: ", promedio);
}else{
 console.log ("No ingresó un número");
}