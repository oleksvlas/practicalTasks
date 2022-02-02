const readline = require('readline');

const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userInput.question('How many floors? ', (favNum) => {
    let floors = favNum;

    for(let i = 0; i < floors; i++)
    {
        let s = "";

        //loop for firs triangle
        for (let L = 0; L <= i; L++){
            s += "*";
        }

        //loop for spaces
        for (let spaces = 0; spaces < floors - i; spaces++){
            s += "  ";
        }

        //loop for second triangle
        for (let A = 0; A < i + 1 + i; A++){
            s += "*";
        }

        //upper part of romb
        if (i < floors/2){
            for (let spaces = 0; spaces < floors - i; spaces++) {
                s += "  ";
            }
            for (let X = 0; X < i + 1 + i; X++) {
                s += "*";
            }
        }

        //under part of romb
        else{
            s += " ";
            for (let spaces = 0; spaces < floors; spaces++) {
                s += " ";
            }
            for (let X = 0; X < (floors - i) + (floors - 1 - i); X++){
                s += "*";
            }
        }
        console.log(s);
    }
    userInput.close();
});