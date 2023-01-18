const arr = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]

console.log(getSimplyArr(arr))

function getSimplyArr(arr) {
    const newArr = []

    arr.forEach(i => {
        if(i.length > 0) {
            newArr.push(...i)
        }
    })

    return newArr.sort()
}
