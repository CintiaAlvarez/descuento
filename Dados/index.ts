let dato1 = document.getElementById("dato1");
let btnEnv = document.getElementById("BtnEnviar");
let rotulo1 = document.getElementById("rotulo1");

rotulo1.innerHTML = "Cuantas veces vas a tirar?";

btnEnviar.addEventListener("click", () => {
  
let n: number = (dato1.value);

let cara: number = 1 / 6;

let final: number = 1;

for (let contador: number = 1; contador <= n; contador ++){
final = final * cara;
}
console.log ("La probabilidad es: ", final); 
}
}