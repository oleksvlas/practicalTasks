let max= 20;
let zero = " - це нуль"
let even = " - парне число"
let no_even = " - не парне число"

let i = 0;
do {
    let number = i++;

    if (number == 0) {
        console.log(number, zero);
    } else if (number % 2 == 0) {
        console.log(number, even);
    } else {
        console.log(number, no_even);
    }

} while (i <= max) 