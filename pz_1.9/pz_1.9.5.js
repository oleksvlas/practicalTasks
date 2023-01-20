let numb = 10000;
let count = 0;
do {
    numb /= 2;
    count++;
} while (numb > 50)
let result = numb;
console.log("Result - " + result + ", Counter - " + count);