function guessNumber() {
    let now = new Date()
    let counter = 0
    let inp_num = 0
    let dif = 0
    let rand_num = Math.round(Math.random() * (100))
    do {
        inp_num = getInput("Enter number: " + rand_num)
        dif = Math.abs(inp_num - rand_num)
        counter++

        if (dif > 75 && dif < 100 && inp_num > rand_num) {
            alert("very cold, try smaller")
        } else if (dif > 75 && dif < 100 && inp_num < rand_num) {
            alert("very cold, try bigger")
        } else if (dif > 50 && dif < 75 && inp_num > rand_num) {
            alert("cold, try smaller")
        } else if (dif > 50 && dif < 75 && inp_num < rand_num) {
            alert("cold, try bigger")
        } else if (dif > 25 && dif < 50 && inp_num > rand_num) {
            alert("hot, but try smaller")
        } else if (dif > 25 && dif < 50 && inp_num < rand_num) {
            alert("hot, but try bigger")
        } else if (dif > 0 && dif < 25 && inp_num > rand_num) {
            alert("very hot, but try smaller")
        } else if (dif > 0 && dif < 25 && inp_num < rand_num) {
            alert("very hot, but try bigger")
        }
        if(inp_num !== rand_num)
        console.log(now.getDate() + "." +(parseInt(now.getMonth())+1) + "." + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + " Спроба: " + counter + ": число " + inp_num + " - не правильно")
    }
    while (inp_num !== rand_num)
    console.log(now.getDate() + "." + now.getMonth() + "." + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + " Спроба: " + counter + ": число " + inp_num + " - правильно")
    alert("You are winner. You guessed the number" + rand_num + " in " + counter + " tries")
    let askPlayAgain = confirm("Do you want to play again?")
    console.log(askPlayAgain)
    if (askPlayAgain) {
        guessNumber(rand_num)
    }
}

function getInput(text) {
    let number = parseInt(prompt(text));

    if (isNaN(number)) {
        getInput(text)
        return
    }

    return number
}
console.log(2)
guessNumber()
