"use strict";
/*************** GEOLOCATION ***************/
const geolocation = navigator.geolocation;
const position = (pos) => {
  console.log(pos);
}
const err = e => console.log(e);
const options = {
  maxiumAge: 0,
  timeout: 3000,
  enableHighAccuracy: true
}
geolocation.getCurrentPosition(position, err, options);

/*************** HISTORY ***************/
console.log(window.history);
history.back();
history.forward();
let length = history.length;
history.go(0);
history.pushState();