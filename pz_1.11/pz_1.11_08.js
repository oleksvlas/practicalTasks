function calculate(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    let average = sum / arr.length;
    return console.log(average);
}

calculate([1,2,3,4,5,6,7,8,9]);