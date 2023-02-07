let i = 0
do{
    if(i === 0){
        console.log(`${i} - це нуль`)
    }else if(i % 2 === 0){
        console.log(`${i} - це парне число`)
    }else {
        console.log(`${i} - це непарне число`)
    }
    i++;
}while (i <= 20)