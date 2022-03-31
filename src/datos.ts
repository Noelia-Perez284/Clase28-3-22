let btnEnviar = document.getElementById("btnEnviar");
let rotulo1 = document.getElementById("rotulo1");
let dato1 = <HTMLInputElement>document.getElementById("dato1");
let rotulo2 = document.getElementById("rotulo2");
let dato2 = <HTMLInputElement>document.getElementById("dato2");



btnEnviar.addEventListener("click", () => {
  let base = Number(dato1.value);
  let altura = Number(dato2.value);
  let area = base * altura
  console.log("el area es" base * altura);
  
  