function getSortedArrayFromTwoDimensionalArray(twoDimArray) {
    let array = [];
    twoDimArray.forEach(arr => {
        array = array.concat(arr);
    })

    return array.sort();
}

function main() {
    let sortedArr = getSortedArrayFromTwoDimensionalArray([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 7, 0],
        []
    ]);

    console.log(sortedArr);
}

main();