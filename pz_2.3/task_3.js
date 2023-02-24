const fs = require('fs');
const path  = require('path')

const source = 'templates/text.txt';
const file = path.parse(source);

console.log("Ім'я файлу: "+ file.name+ "\nПовний шлях: " +  fs.realpathSync(source) + "\nФормат файлу: " + file.ext + "\nПлатформа: "+ process.platform);
