function drawShapes() {
    let size = getSizeOfShapes();

    const spaceSymbol = " ";
    const buildSymbol = "*";

    drawTriangle(size);
    drawPyramid(size);
    drawDiamond(size);

    function getSizeOfShapes() {
        return parseInt(prompt("Input size of shapes"));
    }

    function drawTriangle(size) {
        for (let i = 1; i <= size; i++) {
            console.log(buildSymbol.repeat(i));
        }
    }

    function drawPyramid(size) {
        for (let i = 1, countInLine = 1; i <= size; countInLine += 2, i++) {
            let bottomCount = size * 2;
            let countOfSpacesInEachSide = (bottomCount - countInLine) / 2;
            console.log(spaceSymbol.repeat(countOfSpacesInEachSide) + buildSymbol.repeat(countInLine) + spaceSymbol.repeat(countOfSpacesInEachSide));
        }
    }

    function drawDiamond(size) {
        let countInLine = 1;
        for (let i = 1; i < (size + 1) / 2; i++) {
            let countOfSpacesInEachSide = (size - countInLine) / 2;
            console.log(spaceSymbol.repeat(countOfSpacesInEachSide) + buildSymbol.repeat(countInLine) + spaceSymbol.repeat(countOfSpacesInEachSide));
            countInLine += 2;
        }

        if (size % 2 === 1) {
            let countOfSpacesInEachSide = (size - countInLine) / 2;
            console.log(spaceSymbol.repeat(countOfSpacesInEachSide) + buildSymbol.repeat(countInLine) + spaceSymbol.repeat(countOfSpacesInEachSide));
        }

        countInLine -= 2;

        for (let i = 1; i < (size + 1) / 2; i++) {
            let countOfSpacesInEachSide = (size - countInLine) / 2;
            console.log(spaceSymbol.repeat(countOfSpacesInEachSide) + buildSymbol.repeat(countInLine) + spaceSymbol.repeat(countOfSpacesInEachSide));
            countInLine -= 2;
        }
    }
}

drawShapes();
