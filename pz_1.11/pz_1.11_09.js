const arr = ["1", 2, 3, 4, 6, "sdfdas"]

console.log(reverseAndPowArr(arr))

function reverseAndPowArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === "number") {
            arr[i] = Math.pow(arr[i], 2)
        }
    }

    return arr.reverse()
}