const Add = (a, b) => {
    if (Number.isFinite(a) && Number.isFinite(b)) {
        return a + b
    } else {
        throw new Error("Incorrect data")
    }
}

const Sub = (a, b) => {
    if (Number.isFinite(a) && Number.isFinite(b)) {
        return a - b
    } else {
        throw new Error("Incorrect data")
    }
}

const Mul = (a, b) => {
    if (Number.isFinite(a) && Number.isFinite(b)) {
        return a * b
    } else {
        throw new Error("Incorrect data")
    }
}

const Div = (a, b) => {
    if (Number.isFinite(a) && Number.isFinite(b) && b !== 0) {
        return a / b
    } else {
        throw new Error("Incorrect data")
    }
}

const Calc = (a, b, func) => {
   return func(a, b)
}

console.log(Calc(12,5, Sub))
