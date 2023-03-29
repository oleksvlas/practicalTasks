const readlineSync = require('readline-sync');

const fileService = require('./fileService')

let currentFolderPath = __dirname;

const mainMenuOptions = [
    "check files and folder",
    "exit from folder",
    "open file/folder",
    "create folder",
    "create file",
    "edit file",
    "rename file/folder",
    "delete file/folder",
    "get file/folder info"
]

function openMainMenu() {
    console.log(`Your current folder - ${currentFolderPath}`)
    for (let i = 0; i < mainMenuOptions.length; i++) {
        console.log(`${i} - ${mainMenuOptions[i]}`)
    }

    let input = readlineSync.question("Input option: ");
    selectMainMenu(input);
}

function selectMainMenu(input) {
    let mainMenuOption = parseInt(input);
    if (!isInputValid(input, 0, mainMenuOptions.length)) {
        printInvalidInput();
        openMainMenu();
        return;
    }

    let option = mainMenuOptions[mainMenuOption];

    switch (option) {
        case mainMenuOptions[0]:
            printFilesInCurrentDirectory()
            break;
        case mainMenuOptions[1]:
            exitFromFolder()
            break;
        case mainMenuOptions[2]:
            openFileMenu()
            break;
        case mainMenuOptions[3]:
            createFolderMenu()
            break;
        case mainMenuOptions[4]:
            createFileMenu()
            break;
        case mainMenuOptions[5]:
            editFileMenu()
            break;
        case mainMenuOptions[6]:
            renameFileMenu()
            break;
        case mainMenuOptions[7]:
            deleteFileMenu()
            break;
        case mainMenuOptions[8]:
            getFileInfo()
            break;
    }

    console.log()
    openMainMenu()
}

function openFileMenu() {
    let input = readlineSync.question("Enter name of file/folder: ")
    let path = currentFolderPath + '\\' + input;
    if (fileService.getStat(path).isDirectory()) {
        currentFolderPath += "\\" + input;
        return
    }

    fileService.readFile(path)

}

function printFilesInCurrentDirectory() {
    fileService.printFilesAndFolders(currentFolderPath)
}

function exitFromFolder() {
    currentFolderPath = currentFolderPath.slice(0, currentFolderPath.lastIndexOf('\\'))
}

function createFolderMenu() {
    let input = readlineSync.question("Enter name of folder: ")
    fileService.createFolder(currentFolderPath + "\\" + input);
}

function createFileMenu() {
    let input = readlineSync.question("Enter name of file: ")
    fileService.createFile(currentFolderPath + "\\" + input);
}

function editFileMenu() {
    let name = readlineSync.question("Enter name of file: ")
    let data = readlineSync.question("Enter data of file:\n")

    fileService.editFile(currentFolderPath + '\\' + name, data);
}

function renameFileMenu() {
    let name = readlineSync.question("Enter name of file/folder: ")
    let newName = readlineSync.question("Enter new name of file/folder: ")

    fileService.renameFileOrFolder(currentFolderPath + '\\' + name, currentFolderPath + '\\' + newName);
}

function deleteFileMenu() {
    let name = readlineSync.question("Enter name of file/folder: ")
    fileService.deleteFileOrFolder(currentFolderPath + "\\" + name)
}

function getFileInfo() {
    let name = readlineSync.question("Enter name of file/folder or print nothing to get info about current folder: ")
    fileService.printStat(name === "" ? currentFolderPath : currentFolderPath + '\\' + name)
}
function isInputValid(input, min, max) {
    return !(input < min || input >= max);
}

function printInvalidInput() {
    console.log("Invalid input")
}

openMainMenu()