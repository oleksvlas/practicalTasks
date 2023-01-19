function refactorTwoDimensionalArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][i] !== undefined) {
            arr[i][i] = arr[i][i] < 0 ? 0 : 1
        }
    }
}

function printTwoDimArr(arr) {
    arr.forEach(el => {
        console.log(el);
    });
}

function main() {
    let arr = [
        [1, 2, 3, 4],
        [1, -2, 3, 4],
        [1, 2, -3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4]
    ];
    refactorTwoDimensionalArray(arr);
    printTwoDimArr(arr);
}

main();
