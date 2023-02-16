function array(arr){
   arr.reverse();
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.pow(arr[i],2);
    }
    return arr;
}

console.log(array([1,5,7,9,2]));