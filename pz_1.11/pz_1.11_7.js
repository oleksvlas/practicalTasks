function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const createArray = () =>{
    let size = Number(prompt("Enter size of array:"))
    let result = []
    for (let i = 0; i < size; i++) {
        let temp = []
        for (let j = 0; j < size; j++) {
            temp.push(randomInt(-10,10))
        }
        result.push(temp)
    }

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if(i===j){
                if(result[i][j]<0){
                    result[i][j] = 0
                }else{
                    result[i][j] = 1
                }
            }
            if(i+j === size-1){
                if(result[i][j]<0){
                    result[i][j] = 0
                }else{
                    result[i][j] = 1
                }
            }
        }
    }

    return result
}



console.log(createArray())