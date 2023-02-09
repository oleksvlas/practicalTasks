let numb = 10000;
let counter = 0;

while (true) {
  if (numb >= 50) {
    numb = numb / 2;
  }
  counter++;
  if (numb < 50) {
    break;
  }
}
let result = numb;
console.log("Result: " + result);
console.log("Number of iterations: " + counter);
