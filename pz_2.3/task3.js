const path = require("path");
const os = require("os");

const arg = process.argv[2];

if (!arg) {
    console.error('Будь ласка вкажіть правильний шлях в якості аргументу');
    process.exit(1);
}

const fullPath = path.resolve(arg);
const fileName = path.basename(fullPath);
const fileExt = path.extname(fullPath.slice(1));
const osFamily = os.type();

console.log(`Повний шлях: ${fullPath}`);
console.log(`Назва файлу: ${fileName}`);
console.log(`Розширення файлу: ${fileExt}`);
console.log(`Сімейство ОС: ${osFamily}`);