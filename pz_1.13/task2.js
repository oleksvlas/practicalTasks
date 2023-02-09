function chess(rows, columns) {
    let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let newArr_EN = []
    let slash = '# ';
    let space = '@ ';
    let result = '';
    let row = true;
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            if ((j + row) % 2 == 0) {
                result += space;
            } else {
                result += slash;
            }
        }
        console.log(rows - i + " " + result);
        result = '';
        row = !row;
    }
    for (let i = 0; i < columns; i++) {
        newArr_EN += arr_EN[i]+" "
    }
    console.log("  " + newArr_EN)
}
chess(8,8)