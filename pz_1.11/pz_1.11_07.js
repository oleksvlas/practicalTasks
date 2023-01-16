const arr = [
    [22, -1, 0, 43, 57],
    [-33, 10, 5, 4, 8],
    [3, -1, -44, 44, 87],
    [4, -331, 0, 18, 4],
    [6, -31, 9, 77, 4]
]

console.log(changeMainDioganalNums(arr))


function changeMainDioganalNums(arr) {
    let i = 0
    while (i < arr.length) {
        if(arr[i][i] < 0) {
            arr[i][i] = 0
        } else if(arr[i][i] > 0) {
            arr[i][i] = 1
        }
        i++
    }

    return arr
}