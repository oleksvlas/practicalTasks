const matrix = []

for (let i = 0; i < 5; i++ ) {
    matrix.push([])
    for (let j = 0; j < 5; j++ ) {
        matrix[i].push(Math.floor(Math.random() * 100) - 50)
    }
}
console.table(matrix)

function changing(matrix) {
    let i = 0
    while (i < matrix.length) {
        if (matrix[i][i] < 0) {
            matrix[i][i] = 0
        } else if (matrix[i][i] > 0) {
            matrix[i][i] = 1
        }
        i++
    }

}
changing(matrix)
console.table(matrix)
