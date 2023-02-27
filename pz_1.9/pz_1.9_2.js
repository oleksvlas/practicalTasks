
function nonePairNumbers(from,to){
    while(from <= to){
        if(from===0){
            console.log("It`s Zero")
        }
        else if(from%2===0){
            console.log(from + " is pair")
        }
        else{
            console.log(from + " isn`t pair")
        }
        from++
    }
}

nonePairNumbers(9, 100)

