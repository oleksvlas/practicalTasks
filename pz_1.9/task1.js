let i = 2
while (i <= 100){
    if(i % 2 !== 0 && i % 3 !== 0){
        console.log(i)
    }else if(i === 2 || i===3){
        console.log(i)
    }
    i++;
}
