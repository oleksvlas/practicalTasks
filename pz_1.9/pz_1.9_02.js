function printNumbersInRangeArePairOrNot(from, to) {
    let i = from;
    do {
        if (i === 0) {
            console.log(i + " - is zero");
        } else if (i % 2 === 0) {
            console.log(i + " - is pair");
        } else {
            console.log(i + " - is not pair")
        }
        i++;
    } while(i < to)
}

printNumbersInRangeArePairOrNot(0, 21);