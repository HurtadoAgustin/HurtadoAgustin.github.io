/*************** FETCH ***************/
const getSomething = async () => {
  let request = await fetch("http://URL.com");
  let response = await request.json();
  console.log(response);
}

/*************** AXIOS ***************/
const getSomething2 = async () => {
  let request2 = await fetch("http://URL.com");
  console.log(request2.data);
}