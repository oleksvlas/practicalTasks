const userLogFilePath = __dirname + '\\' + 'user.log'
const levelLogFilePath = __dirname + '\\' + 'level.log'
const fs = require('fs')

let currentStat = []

function userLog(message) {
    fs.appendFileSync(userLogFilePath, message + "\n")
}

function levelLog() {
    let message = `First level - Answered: ${currentStat[0].total}, Corrected: ${currentStat[0].corrected},
Second level - Answered: ${currentStat[1].total}, Corrected: ${currentStat[1].corrected},
Third level - Answered: ${currentStat[2].total}, Corrected: ${currentStat[2].corrected},
Fourth level - Answered: ${currentStat[3].total}, Corrected: ${currentStat[3].corrected},`
    fs.writeFileSync(levelLogFilePath, message)
}

function updateLevelLog(stat) {
    let data = readLevelLog().toString();

    let rows = data.split("\n");

    currentStat = []

    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        let regMatchArray = row.match(new RegExp("Answered: (\\d+), Corrected: (\\d+)"));
        currentStat.push({
            total: parseInt(regMatchArray[1]) + stat[i].total,
            corrected: parseInt(regMatchArray[2]) + stat[i].corrected,
        })
    }

    levelLog()
}

function readLevelLog() {
    return fs.readFileSync(levelLogFilePath)
}

module.exports = {userLog, updateLevelLog}