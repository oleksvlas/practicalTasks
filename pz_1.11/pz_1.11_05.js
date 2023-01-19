function main() {
    let number = 0;
    console.log(number, checkNumberForSomeProp(number));
}

function checkNumberForSomeProp(number) {
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

    return {
        isNegative: number < 0,
        isPositive: number > 0,
        isSimple: checkNumberIsSimple(number),
        canBeDividedByTwo: number % 2 === 0,
        canBeDividedByThree: number % 3 === 0,
        canBeDividedByFive: number % 5 === 0,
        canBeDividedBySix: number % 6 === 0,
        canBeDividedByNine: number % 9 === 0,
    }

}

main();
