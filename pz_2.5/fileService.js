const fs = require('fs')
const printer = require('./printer')

function printFilesAndFolders(folderPath) {
    let files = fs.readdirSync(folderPath)

    printer.printDelimiter()
    for (let i = 0; i < files.length; i++) {
        if (getStat(folderPath + '/' + files[i]).isDirectory()) {
            printer.blueOutput(files[i]);
        } else {
            printer.print(files[i])
        }
    }
    printer.printDelimiter()
}

function getStat(path) {
    return fs.statSync(path);
}

function readFile(path) {
    let buffer = fs.readFileSync(path)

    printer.print("")
    printer.printDelimiter()
    printer.printGreen(buffer.toString())
    printer.printDelimiter()
    printer.print("")
}

function createFolder(path) {
    if (!fs.existsSync(path)) {
        fs.mkdir(path, () => {})
    }
}

function createFile(path) {
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, "" ,() => {});
    }
}

function editFile(path, data) {
    if (fs.existsSync(path)) {
        fs.writeFileSync(path, data, () => {});
    }
}

function renameFileOrFolder(path, newPath) {
    if (fs.existsSync(path)) {
        fs.renameSync(path, newPath);
    }
}

function deleteFileOrFolder(path) {
    if (fs.existsSync(path)) {
        if (!getStat(path).isDirectory()) {
            fs.unlinkSync(path);
            return;
        }

        fs.rmdirSync(path)
    }
}

function printStat(path) {
    let stat = getStat(path);
    printer.print("")
    printer.printDelimiter()
    let name = path.toString().substring(path.lastIndexOf("\\") + 1)

    if (stat.isDirectory()) {
        printer.printGreen(`Folder - ${name}`)
    } else {
        printer.printGreen(`File - ${name}`)
    }
    printer.printGreen(`Size - ${stat.size} KB`)

    printer.printGreen(`The owner id - ${stat.uid}`)

    printer.printDelimiter()
    printer.print("")
}

module.exports = { printFilesAndFolders, getStat, readFile, createFolder, createFile, editFile, renameFileOrFolder, deleteFileOrFolder, printStat }