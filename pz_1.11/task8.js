const array = [1, 3, 4, 8, 0]
function calculate(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum / array.length
}
console.log(calculate(array))