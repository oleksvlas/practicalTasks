const readline = require('readline-sync');
const Console = require("console");

const user_choice = readline.question("choose: eagle or tails: ");


let FIFTY_FIFTY = ['eagle','tails']
let generator = FIFTY_FIFTY[Math.floor(Math.random()*FIFTY_FIFTY.length)]
console.log("Random renerated: " + generator)
if (generator === user_choice) {
    console.log("Ви виграли");
} else {
    console.log("Ви програли");
}