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

let cifra1: number = document.getElementById("dato1");
let cifra2: number = document.getElementById("dato2");
let cifra3: number = document.getElementById("dato3");

btnEnviar.addEventListener("click", () => {
  if (cifra1 > cifra2 && cifra1 > cifra3) {
    console.log("La" + cifra1 + "es la mayor");
  } else if (cifra2 > cifra1 && cifra2 > cifra3) {
    console.log("La" + cifra2 + "es la mayor");
  } else if (cifra3 > cifra1 && cifra3 > cifra2) {
    console.log("La" + cifra3 + "es la mayor");
  }
});
