let count = prompt();

function piramids_1(){
    count++;
    for (let index = 1; index < count; console.log("*".repeat(index++)));
}

function piramids_2(){ 
    let b = count;
    for (let index = 0; index < count; console.log(" ".repeat(b--) + "**".repeat(index++).slice(0,-1)));
}

function piramids_3(){
    count++;
    let b = count/2;
    for (let index = 0; index < count/2; console.log(" ".repeat(b--) + "**".repeat(index++).slice(0,-1)));
    b = 0
    for (let index = (count-2)/2; index > 0; console.log(" ".repeat(b+=1) + "**".repeat(index--).slice(0,-1)));
}

piramids_1();

piramids_2();

piramids_3();


