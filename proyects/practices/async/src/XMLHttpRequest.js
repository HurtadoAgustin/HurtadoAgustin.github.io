/*************** AJAX ***************/
let request;
if(window.XMLHttpRequest) request = new XMLHttpRequest();
else request = new ActiveXObject("Microsoft.XMLHTTP"); //This is for Internet Explorer

/* GET */
request.addEventListener("load",()=>{
  let response;
  if (request.status == 200) response = request.response;
  else response = new Error("Error loading response");
  console.log(JSON.parse(response).name);
})

request.open("GET","http://URL.com");
request.send();

/* POST */
let request2;
request2.addEventListener("load",()=>{
  let response2;
  if (request2.status == 200 || request2.status == 201) response2 = request2.response;
  else response2 = new Error("Error loading response");
  console.log(JSON.parse(response2).name);
})

request2.open("POST","http://URL.com");
request2.setRequestHeader("Content-type","application/json;charset=UTF-8");
request2.send(JSON.stringify({
  "something": "hello",
  "something2": "world"
}));

/*************** FETCH ***************/
/* GET */
fetch("http://URL.com")
  .then(res => res.text())
  .then(res => res.json());

/* POST */
fetch("http://URL.com",{
  method: "POST",
  body: JSON.stringify({
    "something": "hello",
    "something2": "world"
  }),
  headers: {"content-type": "application/json"}
}).then(res => res.text()).then(res => res.json());

/*************** AXIOS ***************/
// install: https://github.com/axios/axios

/* GET */
axios("http://URL.com")
  .then(res => console.log(res));

/* POST */
axios.post("http://URL.com",{
  "something": "hello",
  "something2": "world"
}).then(res => console.log(res));

axios("http://URL.com",{
  method: "post",
  data: {"something": "hello"}
}).then(res => console.log(res));