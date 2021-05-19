const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click",  calcular);


function calcular() { 
  c.value = "Hipotenusa = " + (Math.hypot(Number(a.value), Number(b.value)));
}
