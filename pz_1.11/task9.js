const arr = [2, 5, 6, "bee", "ios"]
function sqrtArr(arr){
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] == "number"){
            arr[i]= Math.pow(arr[i], 2)
        }
    }
    return arr.reverse()
}
console.log(sqrtArr(arr))