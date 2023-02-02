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

console.log(sub(1, "324"))
console.log(div(10, 0))
