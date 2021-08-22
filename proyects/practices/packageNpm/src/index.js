const messages = [
  "David",
  "Ana",
  "Diana",
  "Isabel",
  "Antonio",
  "Agustin",
  "Cinthia"
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random()*messages.length)];
  console.log(message);
}

module.exports = {randomMsg};