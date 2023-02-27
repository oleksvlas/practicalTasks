function some(){
    let numb = 10_000
    let counter = 0
    let result = 0
    while(numb/2 > 50){
        numb = numb/2
        counter++
        console.log(numb)
    }
    console.log("Result: " + numb)
    console.log("Count iterations: " + counter)
}

some()