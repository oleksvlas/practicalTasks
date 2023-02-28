let exampleArray = [[2,3,4],[5,1,4],[9,2,3],[9,0,1,2]]
const doSimpleArray = (arr) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            result.push(arr[i][j])
        }
    }
    result.sort()
    console.log(result)
}

doSimpleArray(exampleArray)