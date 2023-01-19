main();

function deleteRepeatedNumbersFromArray(arr) {
    return Array.from(new Set(arr));
}

function main() {
    let arr = [1, 2, 2, 3, 3, 4, 4, 4, 5];
    arr = deleteRepeatedNumbersFromArray(arr);
    console.log(arr);
}