const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

function Board (width, height) {
    this.width = width;
    this.height = height;
}

function createChessBoard() {
    let width = 50
    let height = 5

    let board = new Board(width, height)

    let radix = letters.length

    for (let i = 0; i < board.height; i++) {
        let line = ''
        if (i !== 0) {
            line += i + ' '
        } else {
            line = '..'
        }
        for (let j = 0; j < board.width; j++) {
            if (i === 0) {
                let letterParts = j.toString(radix)
                let number = ''
                for (let k = 0; k < letterParts.length; k++) {
                    number += letters[parseInt(letterParts.charAt(k), radix)]
                }
                line += number + ' '
            } else {
                if (j % 2 === 0) {
                    line += '@' + ' '.repeat(j.toString(radix).length)
                } else {
                    line += '#' + ' '.repeat(j.toString(radix).length)
                }
            }

        }
        console.log(line)

    }
}

createChessBoard()