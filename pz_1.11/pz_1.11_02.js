function main() {
    try {
        console.log(getUniqueNumberFromArray([2, 2, 2, 1]));
    } catch (err) {
        console.log(err.message);
    }
}

function getUniqueNumberFromArray(arr) {
    if (arr.size < 3) {
        throw new Error("Array has less than 3 elements")
    }

    const firstNumber = arr[0];
    if (arr.indexOf(firstNumber) !== arr.lastIndexOf(firstNumber)) {
        return arr.find(el => el !== firstNumber);
    }
    return firstNumber;
}

main();
