console.log(calc(1, add))
console.log(calc(1, 0, div))
console.log(calc(1, 0, sub))
console.log(calc(1, 0, mul))

function calc(num1, num2, operation) {
    if (!checkNums(num1, num2)) {
        console.log("Arithmetic error...")
        return
    }
    return operation(num1, num2)
}

function add(num1, num2) {
    return num1 + num2
}

function sub(num1, num2) {
    return num1 - num2
}

function mul(num1, num2) {
    return num1 * num2
}

function div(num1, num2) {
    if (num2 === 0) {
        console.log(`Can't div ${num1} on 0`)
        return
    }

    return num1 / num2
}

function checkNums(num1, num2) {
    return !(isNaN(parseInt(num1)) || isNaN(parseInt(num2)));
}