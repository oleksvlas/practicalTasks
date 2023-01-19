function reverseAndPowerArray(arr) {
    return arr.map(el => {
        if (typeof el === "number") {
            return el * el
        }
        return el;
    }).reverse();
}

function main() {
    let arr = [1, 2, 3, 4, "5", 6, 7, true];
    let modifiedArr = reverseAndPowerArray(arr);
    console.log(modifiedArr);
}

main();
