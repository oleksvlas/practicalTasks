const n = 5

console.log(fillArr(n))

function fillArr(n) {
    if(n <= 0) {
        return []
    }

    const arr = []

    for (let i = n; i > 0; i--) {
        arr.push(i)
    }

    return arr
}