const readline = require('readline-sync')
const logger = require("./logger");
let login = ""

let stat = [
    {
        total: 0,
        corrected: 0,
    },
    {
        total: 0,
        corrected: 0,
    },
    {
        total: 0,
        corrected: 0,
    },
    {
        total: 0,
        corrected: 0,
    },
]

function startGame(questions) {
    login = readline.question("Enter your name: ")
    shuffle(questions)

    for (let i = 0; i < questions.length; i++) {
        logger.userLog(`${new Date().toISOString()}, User: ${login}, Given questions: ${getTotalCount()}, Correct questions: ${getCorrectedCount()}`)
        let question = questions[i];
        stat[question.difficulty].total++;

        printQuestion(question);

        let input = parseInt(readline.question(`\nEnter number of correct answer: `));
        if (!checkIsCorrect(input, question)) {
            incorrectAnswer();
            if (isContinue()) {
                continue;
            }
            break;
        }

        stat[question.difficulty].corrected++;
    }

    endGame();
}

function checkIsCorrect(number, question) {
    switch (number) {
        case 1:
            return question.answer1 === question.correctAnswer
        case 2:
            return question.answer2 === question.correctAnswer
        case 3:
            return question.answer3 === question.correctAnswer
        case 4:
            return question.answer4 === question.correctAnswer
        default:
            return false;
    }
}

function printQuestion(question) {
    console.log(`${question.question} (Diff - ${question.difficulty})`);
    console.log('=============================');
    console.log(`1) ${question.answer1}`);
    console.log(`2) ${question.answer2}`);
    console.log(`3) ${question.answer3}`);
    console.log(`4) ${question.answer4}`);
    console.log('=============================');
}

function incorrectAnswer() {
    console.log('Your answer is incorrect\n');
}

function isContinue() {
    let isContinue = readline.question("Do you wanna continue? Y/N: ").toLowerCase();
    switch (isContinue) {
        case "y":
        case "yes":
            return true;
        default:
            return false;
    }
}

function endGame() {
    let total = getTotalCount();
    let corrected = getCorrectedCount()
    if (total === corrected) {
        console.log(`Congratulations! You won! Given questions: ${total}, Corrected Answers: ${corrected}`);
        return;
    }

    console.log(`The end; Given questions: ${total}, Corrected Answers: ${corrected}.`);

    logger.updateLevelLog(stat)
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function getTotalCount() {
    let total = 0;
    for (let i = 0; i < stat.length; i++) {
        total += stat[i].total;
    }
    return total;
}

function getCorrectedCount() {
    let total = 0;
    for (let i = 0; i < stat.length; i++) {
        total += stat[i].corrected;
    }
    return total;
}

module.exports = {startGame}
