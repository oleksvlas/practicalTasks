const path = require('node:path')
const os = require('os')

function getInformationAboutPath(pathString) {
    console.log(`Absolute path: ${path.resolve(pathString)}`)
    console.log(`FileName: ${path.basename(pathString)}`)
    console.log(`Extension: ${path.extname(pathString)}`)
    console.log(`Operation system: ${os.type()}`)
}

getInformationAboutPath('C:\\Users\\Brazillian\\Desktop\\practicalDolhushyn\\pz_2.3\\pz_2.3_3.js')