const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve("Do Something Async"), 4000)
      : reject(new Error("Error!"));
  });
}

const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
}

console.log("before");
doSomething();
console.log("after");

const anotherFunction = async () => {
  try{
    const something2 = await doSomethingAsync();
    console.log(something2);
  }catch{
    console.error("Error!");
  }
}

console.log("before 2");
doSomething();
console.log("after 2");