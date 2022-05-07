//EJERCICIO QUE NUMERO ES MAYOR

let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");

let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");

rotulo1.innerHTML = "Ingrese primer cifra";
rotulo2.innerHTML = "Ingrese segunda cifra";
rotulo3.innerHTML = "Ingrese tercer cifra";

btnEnviar.addEventListener("click", () => {
  let numero1: number = Number(dato1.value);
  let numero2: number = Number(dato2.value);
  let numero3: number = Number(dato3.value);

  if (numero1 > numero2 && numero1 > numero3) {
    console.log("El " + numero1 + " es el mayor");
  } else if (numero2 > numero1 && numero2 > numero3) {
    console.log("El " + numero2 + " es el mayor");
  } else if (numero3 > numero1 && numero3 > numero2) {
    console.log("El " + numero3 + " es el mayor");
  }
});
