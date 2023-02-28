function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


const genArray = () => {
    let size = Number(prompt("Enter array size:"))
    let array = []
    for (let i = 0; i < size; i++) {
        array.push(randomInt(0, 30))
    }
    console.log(array)
    return array
}


const someFunc = (arr) => {
    let result = []
    for (let i = arr.length-1; i > 0; i--) {
        if (Number.isFinite(arr[i])) {
            result.push(Math.pow(arr[i],2))
        } else {
            result.push(arr[i])
        }
    }
    return result
}

console.log(someFunc(genArray()))