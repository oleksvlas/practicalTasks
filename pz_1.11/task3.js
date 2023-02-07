const arrToConvert = [[0,5,1],[2,3,3],[4,4,5]];

function getSingleArray(arr){
    let newArr = []
    arr.forEach(i => {
        newArr.push(...i.slice(0))
    })
    return newArr.sort()
}


console.log(arrToConvert, " ==> ", getSingleArray(arrToConvert))