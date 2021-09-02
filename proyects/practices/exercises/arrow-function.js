"use strict";

/* Function */
const object = {
  name: "Agus",
  sayHello: function () {console.log(`Hello ${this.name}`);}
};
object.sayHello(); // output: "Hello Agus"

/* Arrow Function */
const object2 = {
  name: "Agus",
  sayHello: () => {console.log(`Hello ${this.name}`);}
};
window.nombre = "Puru";
object2.sayHello(); // output: "Hello Puru"