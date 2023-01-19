function main() {
    try {
        console.log(getArrayFromNumberToOne(0))
    } catch (e) {
        console.log(e.message);
    }
}

function getArrayFromNumberToOne(number) {
    if (number <= 0) {
        throw new Error("Number can`t be less or equals zero")
    }

    let arr = [];
    for (let i = number; i > 0; i--) {
        arr.push(i);
    }

    return arr;
}

main();