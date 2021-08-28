/*** Fibonacci
 * El primer y segundo número es 1
 * Despúes se suman los anteriores
 * 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...
*/
document.getElementById("fibonacci_button").onclick = function(){
  const fibo_in = document.getElementById("fibonacci_input");
  let fibo_out = document.getElementById("fibonacci_output");
  if (fibo_in == undefined) document.write(fibo_in);
  let fibo = [];
  let a = b = 1; let c;
  for (let i = 0; i < fibo_in.value; i++) {
    (i==0 || i==1)
    ? c=1
    : c=a+b; a=b; b=c;
    fibo.push(c);
  }
  fibo_out.value = fibo;
}


/***   Conjetura de Collatz (3N + 1)
 * Numeros impar: 3x + 1
 * Numeros par: x / 2
*/
document.getElementById("collatz_button").onclick = () => {
  const coll_in = document.getElementById("collatz_input");
  let coll_out = document.getElementById("collatz_output");
  let coll = [];
  let last = coll_in.value;
  if (last <= 0 || last == undefined) return coll_out.value=last;
  do{
    coll.push(last);
    if(last % 2 == 0){
      last /= 2;
    }else{
      last = (last * 3) + 1;
    }
  }while (last != 1)
  coll.push(1);
  coll_out.value = coll;  
}


/*** Proporcion aurea
 * Es un cuadrado, que se corta a la mitad,
 * y después la mitad se corta en otra mitad, etc.
 * la razon entre cada corte es la del numero Phi
*/