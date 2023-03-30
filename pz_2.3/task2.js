const chalk = require("chalk");
const player = require("play-sound")();

console.log(chalk.red("Hello world"));
console.log(chalk.blue("Eugene ") + chalk.yellow("Kornienko"));

player.play('D:\\Projects\\testnode\\practicalKornienko\\pz_2.3\\pedik.mp3', {timeout: 300}, function(err){
    if (err) throw err
});
