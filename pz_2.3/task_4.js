const readline = require('readline')

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function game(){
    rl.question("Оберіть Орел(1) або Решка(2):",
    function (answer) {
        let num = Math.round(Math.random()*1+1);
        if(num == answer){
           console.log("Вітаю! Випав " + checkResult(answer));
        }else if(answer != 1 && answer !=2){
            console.log("Уведіть вірне значення!");
            game();
        }else{
            console.log("Пощастить у наступний раз. Випав "+ checkResult(answer));
        }
        startAgainGame();
    })
}

function checkResult(answer){
    if(answer == 1)
        return "Орел"
    if(answer == 2)
        return "Решка"
}


function startAgainGame(){
    rl.question("Ви бажаєте повторно перевіти свою вдачу в грі 'Орел або решка'?(да:y/ні:n)",
        function (answer) {
            if(answer == "y"){
                game();
            }else if(answer == "n"){
                process.exit();
            }else{
                console.log("Оберіть вірну відповідь!");
                startAgainGame();
            }
        });
}

game();