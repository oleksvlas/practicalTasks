function* qenerator(start = 0, step = 1) {
   while (true) {
       yield start
       start += step
   }
}

function sequence(start , step ) {
    const gen = qenerator(start, step)

    return () => {
        return gen.next().value
    }
}

const seq = sequence(10, 2)
const seq1 = sequence(7,1)

console.log(seq())
console.log(seq())
console.log(seq1())
console.log(seq())
console.log(seq1())

