const readline = require('readline-sync')
const fileService = require('./fileService')
const fs = require('fs')

function getCsvDataFromPath() {
    let scvFilePath = readline.question("Enter the scv file`s path: \n");
    if (fileService.getExtension(scvFilePath) === 'csv') {
        return new Promise(function (resolve, reject) {
            fs.readFile(scvFilePath, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        })
    }

    return null;
}

function fromCsvToJson(csvData) {
    let csvDataArray = csvData.toString().split('\n');
    let fieldNamesArray = csvDataArray[0].toString().split(';');

    let dataArray = [];
    for (let i = 1; i < csvDataArray.length; i++) {
        let rowDataArray = csvDataArray[i].toString().split(';');
        let dataRow = {};
        for (let j = 0; j < fieldNamesArray.length; j++) {
            dataRow[fieldNamesArray[j]] = rowDataArray[j]
        }
        dataArray.push(dataRow);
    }

    return dataArray;
}

getCsvDataFromPath()
    .then(csvData => {
        let data = fromCsvToJson(csvData);
        let jsonFileName = readline.question("Enter name of file to write data:\n")

        fs.writeFile(__dirname + "\\" + jsonFileName, JSON.stringify(data), (err) => {
            if (err) {
                console.log("Failed to write file:\n", err);
            }
        })

    })
    .catch(err => {
        console.log("Failed to read data:\n", err)
    })