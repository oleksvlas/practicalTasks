function add(x, y){
    let a = x + y;
    return console.log(a);
}

function sub(x, y){
    let s = x - y;
    return console.log(s);
}

function mul(x, y){
    let m = x * y;
    return console.log(m);
}

function div(x, y){
    if(x == 0 || y == 0){
        return console.log("На нуль ділити не можна!!!")
    }
    let d = x / y;
    return console.log(d);
}

function calc(x, y, func){
    func(x,y);
}

try{
    add(15,3);
    sub(15,3);
    mul(15,3);
    div(15,0);
    calc(15,3,add);
} catch(error){
    console.log(error.name + ":" + error.message);
}