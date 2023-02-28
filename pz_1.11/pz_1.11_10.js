const someFunc = () => {
    let countSides = Number(prompt("Enter count of sides:"))
    let sideLength = Number(prompt("Enter length of side:"))

    return countSides * sideLength
}

console.log(someFunc())