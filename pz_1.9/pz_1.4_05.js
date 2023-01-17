let numb = 10_000;
let counter = 0;
let result = numb;
do {
    result /= 2;
    counter++;
} while (result >= 50)
console.log("Number " + numb + " was divided by two " + counter + " times. \nResult - " + result)