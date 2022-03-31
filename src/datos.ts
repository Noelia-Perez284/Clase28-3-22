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
  
  
  // Acá va nuestro código
  
  //dato.value = "hola" ;
  // console.log("rotulo");
}); //



//let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
//let dato = <HTMLInputElement>document.getElementById("dato");

//let rotulo = <HTMLParagraphElement>document.getElementById("rotulo");
//let nombre: string;

//btnEnviar.addEventListener("click", () => {
  // Acá va nuestro código
  //rotulo.innerHTML = "Dato"
  //nombre = dato.value;
//});