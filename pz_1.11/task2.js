let arr = [1, 1, 2]

function chooseOne(arr) {
    for (let i = 0; i < arr.length; i++) {
       if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
           return arr[i]
       }
    }
}

console.log(`[${arr}] ==> ${chooseOne(arr)}`)