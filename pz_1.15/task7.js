let rand_num = Math.round(Math.random() * (100 - 0) + 0)
function guessNumber(rand_num) {
    let inp_num = prompt("Enter number:")
    let dif = Math.abs(inp_num - rand_num)
    if (inp_num == rand_num) {
        alert("You are winner")
    } else if (dif < 25 && inp_num > rand_num) {
        alert("very hot, but try smaller")
        guessNumber(rand_num)
    } else if (dif < 25 && inp_num < rand_num) {
        alert("very hot, but try bigger")
        guessNumber(rand_num)
    } else if (Math.abs(dif < 50 && dif > 25 && inp_num > rand_num)) {
        alert("hot, but try smaller")
        guessNumber(rand_num)
    } else if (Math.abs(dif < 50 && dif > 25 && inp_num < rand_num)) {
        alert("hot, but try bigger")
        guessNumber(rand_num)
    } else if (dif < 75 && dif > 50 && inp_num > rand_num) {
        alert("cold, try smaller")
        guessNumber(rand_num)
    } else if (dif < 75 && dif > 50 && inp_num < rand_num) {
        alert("cold, try bigger")
        guessNumber(rand_num)
    } else if (dif < 100 && dif > 75 && inp_num > rand_num) {
        alert("very cold, try smaller")
        guessNumber(rand_num)
    } else {
        alert("very cold, try bigger")
        guessNumber(rand_num)
    }
}
guessNumber(rand_num)