const csvFilePath = __dirname + "\\" + 'capital_country.csv';
const fs = require('fs/promises');
const tests = require("./tests");

function parseFromCsv(csvData) {
    let csvRowsArray = csvData.toString().split("\r\n");
    let fieldsArray = csvRowsArray[0].split(';');

    let dataArray = []
    for (let i = 1; i < csvRowsArray.length; i++) {
        let csvRowArray = csvRowsArray[i].split(';');
        let data = {}
        for (let j = 0; j < csvRowArray.length; j++) {
            data[fieldsArray[j]] = csvRowArray[j];
        }
        dataArray.push(data)
    }

    return dataArray;
}

async function readDataFromFile(csvFilePath) {
    let csvData = await fs.readFile(csvFilePath);

    return parseFromCsv(csvData)
}

readDataFromFile(csvFilePath)
    .then(data => {
       tests.startGame(data);
    })
    .catch(err => {
        console.log(err)
    })
