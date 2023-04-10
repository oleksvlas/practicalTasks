const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')

const app = express()

const port = 3000

let name = ""
let questions = []

let answers = []

app.use(bodyParser.urlencoded({ extended: true }))
app.set('views', __dirname);
app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`Started - ${port}`)
})

app.get('/', (req, res) => {
    res.render('login.ejs')
})

app.post('/login', (req, res) => {
    clearData();

    let name = req.body.name
    if (name === undefined || name === "") {
        res.redirect('/login')
        return
    }

    this.name = name;
    res.redirect('/game')
})

app.get('/game', (req, res) => {
    if (this.name === undefined || this.name === "") {
        res.redirect('/');
        return;
    }

    questions = readData();

    res.render('game.ejs', {
        name: this.name,
        questions: questions,
        answers: answers,
    })
})

app.post('/game', (req, res) => {
    let answ = req.body

    for (let i = 0; i < questions.length; i++) {
        let question = questions[i]
        answers.push({
            number: question.number,
            isValid: isValid(answ[i + 1], i)
        })
    }

    writeResult()

    res.redirect('/game');
})

function readData() {
    return JSON.parse(fs.readFileSync(__dirname + '\\questions.json').toString())
}

function isValid(answer, questionNumber) {
    return questions[questionNumber].correct === answer
}

function writeResult() {
    let corrected = 0

    for (let i = 0; i < answers.length; i++) {
        if (answers[i].isValid) {
            corrected++
        }
    }

    let result = {
        name: name,
        total: questions.length,
        corrected: corrected,
        date: new Date().toISOString()
    }

    let results = JSON.parse(fs.readFileSync(__dirname + '\\results.json').toString())

    results.push(result)

    fs.writeFileSync(__dirname + '\\results.json', JSON.stringify(results))
}

function clearData() {
    answers = []
    name = ""
}
