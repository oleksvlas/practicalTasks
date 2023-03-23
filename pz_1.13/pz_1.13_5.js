function sequence(start, step) {
    let counter = start - step
    function increaseByStep() {
        return counter += step
    }

    return () => increaseByStep()
}

let generator = sequence(10, 3);
let generator2 = sequence(7, 1);

console.log(generator()); //10
console.log(generator()); //13
console.log(generator2()); //7
console.log(generator()); //16
console.log(generator2()); //8