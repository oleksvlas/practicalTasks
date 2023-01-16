const number = 3

checkNumber(number)

function checkNumber(n) {
    console.log("Negative", isNumberNegative(n))
    console.log("Simple", isSimple(n))
    console.log("Div on 2, 5, 3, 6, 9", isDivOnNums(n))
}

function isNumberNegative(n) {
    return !(n === Math.abs(n))
}

function isSimple(n) {
    if(n === 1 || n === 0) {
        return false
    } else {
        let i = 2
        while (i < n) {
            if(n % i === 0) {
                return false
            }
            i++
        }
    }
    return true
}

function isDivOnNums(n, arr = [2, 5, 3, 6, 9]) {
    for(let num of arr) {
        if(n % num !== 0) {
            return false
        }
    }
    return true
}