function printNumbers() {
    let num = 0;
    do {
        if (num == 0) {
            console.log( `${num} - це нуль`);
         }
        else if (num % 2 == 0) {
            console.log( `${num} - це парне число`);
        }
        else {
            console.log( `${num} - це не парне число`); 
        }
    }
    while (num++ < 20)
}
printNumbers();