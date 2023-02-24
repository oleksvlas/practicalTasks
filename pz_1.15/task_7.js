let count = 0;
let random_num = parseInt(Math.round(Math.random()*101,2));
let date = new Date();
let time =  date.getDate()+"."+date.getMonth()+"."+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" ";
 
function game(){
    let chooseNum = parseInt(prompt("Напишіть число від 0 до 100"));
        if(chooseNum == random_num){
            alert("За "+ count + " спроб ви вгадали число " + random_num);
            otherAgree();
        }else{
            deviation(chooseNum);
        }
}

function deviation(chooseNum){
    let step = parseInt(Math.abs(random_num - chooseNum));
    let levelChoose = "";
    if(1 <= step && step <= 3){
        levelChoose = "Дуже гаряче. ";
    }else if(3  <= step &&  step <=  6){
        levelChoose ="Гаряче. ";
    }else if(7  <= step && step <=  10){
        levelChoose ="Дуже тепло. ";
    }else if(11 <= step && step <= 12){
        levelChoose ="Тепло. ";
    }else if(13 <= step && step <=  20){
        levelChoose = "Холодно. ";
    }else{
        levelChoose = "Дуже холодно. ";
    }
    count++;

    const text = "Спроба " + count + ": число " + chooseNum + " - не вірно";
    alert(levelChoose + time + text);
    game();
}

function otherAgree(){
    let agree = prompt("Ви хочете знову почати гру?(да/ні)")
        if(agree == "да"){
            restartGame();
        }else if(agree == "ні"){
            alert("Ви покинули гру! Оновіть сторінку для повторної гри.");
        }
        else{
            alert("Напишіть коректну відповідь!(да/ні)")
            otherAgree();
        }
}

function restartGame(){
    count = 0;
    random_num = parseInt(Math.round(Math.random()*101,2));
    game();
}

game();
