function checking(num){
    if(num > 0){
        console.log(num + " : positive")
    }else {
        console.log(num + " : negative")
    }
    if(num === 1 || num % 2 !==0 && num % 3 !== 0){
        console.log(num + " is simple")
    }
    if(num % 2 === 0){
        console.log(num + " could div by 2")
    }
    if(num % 5 === 0){
        console.log(num + " could div by 5")
    }
    if(num % 3 === 0){
        console.log(num + " could div by 3")
    }
    if(num % 6 === 0){
        console.log(num + " could div by 6")
    }
    if(num % 9 === 0){
        console.log(num + " could div by 9")
    }
}
checking(25)