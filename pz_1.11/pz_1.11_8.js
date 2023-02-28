function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


const genArray = () => {
    let size = Number(prompt("Enter array size:"))
    let array = []
    for (let i = 0; i < size; i++) {
        array.push(randomInt(0, 30))
    }
    return array
}

const averageValue = (array) => {
    let sum = 0
    console.log(array)
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum / array.length
}


console.log(averageValue(genArray()))