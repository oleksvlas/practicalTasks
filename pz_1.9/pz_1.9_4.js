const drawFigures = () => {

    const levels = prompt('Введіть кількість рівнів фігур: ');


    for (let i = 1; i <= levels; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += "*";
        }
        console.log(row);
    }

    for (let i = 1; i <= levels; i++) {
        let row = '';
        for (let j = 1; j <= levels - i; j++) {
            row += ' ';
        }
        for (let k = 1; k <= i * 2 - 1; k++) {
            row += '*';
        }
        console.log(row);
    }

    for (let i = 1; i <= levels; i++) {
        let row = "";
        for (let j = 1; j <= levels - i; j++) {
            row += " ";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += "*";
        }
        console.log(row);
    }
    for (let i = levels - 1; i >= 1; i--) {
        let row = "";
        for (let j = 1; j <= levels - i; j++) {
            row += " ";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += "*";
        }
        console.log(row);
    }

}

drawFigures(5)