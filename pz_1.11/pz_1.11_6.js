let exampleArr = [1, 1, 1, 2, 23, 4, 2, 1, 3, 4, 5, 6, 8, 9, 4, 5, 4, 5, 32, 2, 4, 6, 7, 8, 4, 2, 3]
const removeDuplicate = (arr) => {

    let result = []
    arr.sort()
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    console.log(arr)
    console.log(result)
}

removeDuplicate(exampleArr)