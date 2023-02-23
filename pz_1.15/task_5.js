function checkRepeatsWords(text){
 let arrText = text.split(' ');
 let count = 0;

    for (let i = 0; i < arrText.length; i++) {
        for (let j = 0; j < arrText.length; j++) {
            if(arrText[i] == arrText[j]){
                count+=1;
            }
        }
        console.log("'"+arrText[i]+"'"+" повторюється: " + count);
        count = 0;
    }
}

checkRepeatsWords("I I I I I MY my my my name");