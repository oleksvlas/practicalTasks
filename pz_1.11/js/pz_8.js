function calculate(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let average = sum / arr.length;
    console.log(average);
}

calculate([1,5,7,8,4,1]);