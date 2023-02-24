const clc = require('cli-color');
const player = require('play-sound')();

console.log(clc.red('Text in red'));
console.log(clc.blue('Text in blue'));
console.log(clc.green('Text in green'));    

player.play('templates/music.mp3');
