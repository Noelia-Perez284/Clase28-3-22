let btnEnviar = document.getElementById("btnEnviar");
let rotulo = document.getElementById("rotulo");
let dato = <HTMLInputElement>document.getElementById("dato");
btnEnviar.addEventListener("click", () => {
  console.log("ingreso " + dato.value);
  let nombre = dato.value;
  // Acá va nuestro código
  console.log(nombre);
  //dato.value = "hola" ;
  // console.log("rotulo");
}); //
