function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const generateArray = () => {
    let numeric = Number(prompt("Enter some numeric"))
    let uniqueNumeric = Number(prompt("Enter some unique numeric"))
    let arrayLength = Number(prompt("Enter length of Array"))
    let uniqueNumericPosition = randomInt(0, arrayLength)


    let resultArr = []
    for (let i = 0; i < arrayLength; i++) {
        if (i === uniqueNumericPosition) {
            resultArr.push(uniqueNumeric)
        } else {
            resultArr.push(numeric)
        }
    }
    console.log(resultArr)
    return resultArr;
}


const searchUniquePosition = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length; j > 0; j--) {
            if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[j])) {
                console.log("Position is - " + i)
                break;
            }
        }
    }
}


searchUniquePosition(generateArray())

