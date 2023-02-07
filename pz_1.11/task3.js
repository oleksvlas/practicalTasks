const arr = [[1,2,3], [8,7,6], [3,5,6]]

function reverseArray(arr){
    const newArr = []

    arr.forEach(i => {
        newArr.push(...i.slice(0))
    })
    return newArr.sort()
}
console.log(arr, " ==> ", reverseArray(arr))