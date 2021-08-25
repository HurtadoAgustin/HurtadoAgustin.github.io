/*** Fibonacci
 * El primer y segundo número es 1
 * Despúes se suman los anteriores
 * 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...
*/
const fibo_in = parseInt(document.getElementById("fibonacci-input"));
const fibo_bu = document.getElementById("fibonacci-button");
const fibo_results = fibo_bu.addEventListener("click", fibonacci);
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
var coll_in = document.getElementById("collatz-input");
var coll_bu = document.getElementById("collatz-button");
coll_bu.addEventListener("click", collatz);
function collatz(){
  let coll = [];
  let last = 19;
  if (last < 0 || last == undefined) return last;
  while (last != 1){
    if(last % 2 == 0){
      last /= 2;
    }else{
      last = (last * 3) + 1;
    }
    coll.push(last);
  }
  return coll;
}

/*** Proporcion aurea
 * Es un cuadrado, que se corta a la mitad,
 * y después la mitad se corta en otra mitad, etc.
 * la razon entre cada corte es la del numero Phi
*/