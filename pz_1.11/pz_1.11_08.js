function calculate(arr) {
    let sum = 0;
    arr.map(el => sum += el);
    return sum / arr.length;
}

function main() {
    let average = calculate([1, 2, 3]);
    console.log(average);
}

main();
