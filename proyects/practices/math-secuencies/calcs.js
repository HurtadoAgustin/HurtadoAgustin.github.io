/*** Fibonacci
 * El primer y segundo número es 1
 * Despúes se suman los anteriores
 * 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...
*/
const fibo_in = parseInt(document.getElementById("fibonacci-input"));
const fibo_bu = document.getElementById("fibonacci-button");
const resultado = fibo_bu.addEventListener("click", fibonacci);
function fibonacci(){
  let fibo = [];
  let a = b = 1; let c;
  for (let i = 0; i < fibo_in.value; i++) {
    (i==0 || i==1)
    ? c=1
    : c=a+b; a=b; b=c;
    fibo.push(c);
  }
  return fibo;
}
/***   Conjetura de Collatz (3N + 1)
 * Numeros impar: 3x + 1
 * Numeros par: x / 2
*/


/*** Proporcion aurea
 * Es un cuadrado, que se corta a la mitad,
 * y después la mitad se corta en otra mitad, etc.
 * la razon entre cada corte es la del numero Phi
*/