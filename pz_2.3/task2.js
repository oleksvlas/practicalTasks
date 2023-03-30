const chalk = require("chalk");
const path = require("path");
const player = require("play-sound")();

console.log(chalk.red("Hello world"));
console.log(chalk.blue("Eugene ") + chalk.yellow("Kornienko"));

player.play(path.join(__dirname, "song.mp3"), {timeout: 300}, function(err){
    if (err) throw err
});
