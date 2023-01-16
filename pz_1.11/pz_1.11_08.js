const arr = [1, 3 ,4, 5, 6]

console.log(sumArr(arr))

function sumArr(arr) {
    let sum = 0
    arr.forEach(i => {
        sum += i
    })

    return sum
}