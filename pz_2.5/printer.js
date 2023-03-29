function printGreen(message) {
    console.log('\x1b[32m%s\x1b[0m', message)
}

function print(messages) {
    console.log(messages)
}

function blueOutput(message) {
    console.log('\x1b[34m%s\x1b[0m', message)
}

function printDelimiter() {
    console.log("===================================")
}

function printRed(message) {
    console.log('\x1b[31m%s\x1b[0m', message)
}

module.exports = { blueOutput, print, printDelimiter, printGreen, printRed }