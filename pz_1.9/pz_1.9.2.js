let i = 0;
do {
    if (i === 0){
        console.log(i + "-це нуль")
    }else if (i % 2){
        console.log(i + "-непарне число")
    }else {
        console.log(i + "-парне число")
    }
    i++;
} while (i <= 10)