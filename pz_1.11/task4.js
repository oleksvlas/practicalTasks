function add(num1, num2){
    if(!check(num1, num2)) {
        console.log('error')
        return undefined
    }
    return num1 + num2
}
function sub(num1, num2){
    if(!check(num1, num2)) {
        console.log('error')
        return undefined
    }
    return num1 - num2
}
function mul(num1, num2){
    if(!check(num1, num2)) {
        console.log('error')
        return undefined
    }
    return num1 * num2
}
function div(num1, num2){
    if(!check(num1, num2)) {
        console.log('error')
        return undefined
    }
    if(num2 === 0){
        console.log("division by 0 is irrelevant")
    }
    return num1 / num2
}
function check(...values) {
    for (let val of values) {
        if(!val) {
            return false
        }
        if(typeof val !== "number" && typeof val !== "string") {
            return false
        }

        if(isNaN(parseInt(val))) {
            return false
        }
    }
    return true
}
function calc(num1, num2, func){
   return func(num1, num2)
}

let num1 = parseInt(prompt("Enter num1: "));
let num2 = parseInt(prompt("Enter num2: "));
let operation = prompt("Enter an operation: 1-Add  2-Sub  3-Mul  4-Div");
switch (parseInt(operation)){
    case 1:
        console.log("Calc(" + num1 + "," + num2 + ", Add) ==> " + calc(num1, num2, add))
        break
    case 2:
        console.log("Calc(" + num1 + "," + num2 + ", Sub) ==> " + calc(num1, num2, sub))
        break
    case 3:
        console.log("Calc(" + num1 + "," + num2 + ", Mul) ==> " + calc(num1, num2, mul))
        break
    case 4:
        console.log("Calc(" + num1 + "," + num2 + ", Div) ==> " + calc(num1, num2, div))
        break
}

