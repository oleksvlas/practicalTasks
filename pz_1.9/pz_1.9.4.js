const n = parseInt(prompt("Enter n"))
printPyramid90Deg(n)
console.log()
printPyramid(n)
console.log()
printDiamond(n)

function printPyramid90Deg(n){
    for (let i = 1; i < n + 1; i++) {
        const row = '*'.repeat(i);
        console.log(row)
    }
}

function printPyramid(n){
    for (let i = 1; i < n + 1; i++) {
        const rowSpace = ' '.repeat(n - i)
        const row = '*'.repeat(i * 2 - 1)

        console.log(rowSpace + row + rowSpace)
    }
}

function printDiamond(n){
    if(n % 2 === 0) {
        console.log(n, "isn't correct n")
        return
    }

    n = Math.floor(n / 2)

    printPyramid(n + 1)

    for (let i = n; i > 0 ; i--) {
        const rowSpace = ' '.repeat(n - i + 1)
        const row = '*'.repeat(i * 2 - 1)
        console.log(rowSpace + row + rowSpace)
    }
}