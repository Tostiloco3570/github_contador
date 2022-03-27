const contador = document.getElementById("contar");
const suma = document.getElementById("sumar");
const resta = document.getElementById("restar");

let numero=0;

suma.addEventListener("click", ()=>{
	numero++;
	contador.innerHTML=numero;
});
resta.addEventListener("click", ()=>{
	numero--;
	contador.innerHTML=numero;
});