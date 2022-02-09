let height_one = parseInt(prompt("Enter height : "));
for(let i = "" ; i.length < height_one ; console.log(i += "*")){};

let height = parseInt(prompt("Please , enter the height"));
let aster = "";
let empty = "";
for(let i = 0 ; i < height ; i++){
    empty = "";
    aster = "";
    for(s = 0 ; s < height -i -1 ; s++){
        empty += " ";
    }
    for(d = 0 ; d < i * 2 + 1; d++){
        aster += "*";
    }
    console.log(empty + aster);
}

let he = parseInt(prompt("What height you want ?"));
let e = "";
let a = "";
let halfOfTriangle = Math.ceil(he / 2);
for (let i = 0; i < halfOfTriangle; i++) {
    e = "";
    a = "";
    for (s = 0; s < he - i -1; s++) {
        e += " ";
    }
    for (d = 0; d < i * 2 + 1; d++) {
        a += "*";
    }
    console.log(e + a);
}
for (let i = halfOfTriangle; i > 0; i--) {
    e = "";
    a = "";
    for (s = 0; s < he - i ; s++) {
        e += " ";
    }
    for (d = 0; d < i * 2 -1; d++) {
        a += "*";
    }
    console.log(e + a);
}