function array(){
    let n = prompt();
    let arr = [];

    for (let index = n; index > 0; arr.push(index--));

   return arr;
}

console.log(array());