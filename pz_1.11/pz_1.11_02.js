console.log(findSingleNumberFromArr([144, 165, 144, 144, 144, 144, 144, 144]))

function findSingleNumberFromArr(arr) {
    if(arr.length < 3) {
        return -1
    }

    const tempNumber = arr[0]

    if(arr.indexOf(tempNumber) === arr.lastIndexOf(tempNumber)) {
        return tempNumber
    }

    return arr.filter(i => i !== tempNumber)[0]
}