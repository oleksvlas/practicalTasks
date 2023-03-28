let tries = 0;
let scores = 0;

function throw_coin(number){
    tries++;

    let coin = Math.random();

    if (coin >= 0.5){
        coin = 1;
    } else {
        coin = 0;
    }

    let label = document.getElementById('number')
    switch (coin) {
        case 0:
            label.innerText = "Орел"
            break;
        case 1:
            label.innerText = "Решка"
            break;
    }

    if (coin === number) {
        label.style.color = "#66f542"
        scores++;
    } else {
        label.style.color = "#f54242"
    }

    let scoresLabel = document.getElementById('scores')
    let triesLabel = document.getElementById('tries')

    scoresLabel.innerText = scores
    triesLabel.innerText = tries
}