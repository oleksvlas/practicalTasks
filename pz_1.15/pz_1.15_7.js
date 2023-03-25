function startGame() {
    let options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    }
    let formatter = Intl.DateTimeFormat('uk-UA', options)

    let numberToGuess = Math.floor(Math.random() * 100)
    alert("Try to guess the number!")
    let counter = 0
    while (true) {
        counter++
        let inputtedNumber = parseInt(prompt("Enter the number"))
        let date = new Date()
        console.log(`${formatter.format(date)}Inputted number - ${inputtedNumber}, attempt - ${counter}`)
        let diff = Math.abs(numberToGuess - inputtedNumber)
        if (diff > 50) {
            alert('Cold')
        } else if (diff > 25) {
            alert('Warmer')
        } else if (diff > 10) {
            alert('Hot')
        } else if (diff > 0) {
            alert('Too hot')
        } else {
            let date = new Date()

            alert(`${formatter.format(date)}\nGuessed!\nNumber is - ${numberToGuess}\nAttempts - ${counter}`)
            break
        }
    }
}

