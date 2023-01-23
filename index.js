writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")

const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names, event) {
   return  names.map(name=> `Thank you, ${name}, for the wonderful ${event} gift!`)
}

console.log(writeCards(names, "surprise"))

function countDown() {
    for (let countup = 0; countup < 11; countup++) {
        console.log(countup);
      }
}











// writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

// const writeCards = ["Guadalupe", "Ollie", "Aki"];
// const gift = "surprise";
// const messages = writeCards(names, gift);
// console.log(messages);

