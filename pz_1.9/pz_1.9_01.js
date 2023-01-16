printAllSimpleNumberFromZeroToNumber(100);
function checkNumberIsSimple(number) {
    if (number === 0) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function printAllSimpleNumberFromZeroToNumber(number) {
    let i = 0;
    number = Math.abs(number);
    while (i <= number) {
        if (checkNumberIsSimple(i)) {
            console.log(i);
        }
        i++;
    }
}