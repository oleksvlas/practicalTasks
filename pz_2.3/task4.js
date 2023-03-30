const readline = require("readline-sync");

function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}
for (let i =0; i < 100; i++){
    console.log(getRandomInt(2));
}
console.log("Ласкаво просимо до гри Орел і Решка");

while (true) {

    console.log("Введіть свій вибір: 1 - Орел, 2 - Решка");
    const userChoice = readline.question();

    if (!(userChoice === '1' || userChoice === '2')) {
        console.log("Неправильний ввід, будь ласка введіть 1 або 2");
        continue;
    }

    const randomNum = getRandomInt(2);
    const result = randomNum === 1 ? 'Орел' : 'Решка';

    if (userChoice === randomNum.toString()){
        console.log(`Вітаємо! Монета впала на ${result}. Ви виграли.`)
    } else {
        console.log(`На жаль, ви програли. Монета впала на ${result}`)
    }

    console.log("Ви бажаєте продовжити? Y - для продовження, N - закінчити гру");
    const isContinue = readline.question();

    if (isContinue.toUpperCase() !== 'Y'){
        break;
    }
}






