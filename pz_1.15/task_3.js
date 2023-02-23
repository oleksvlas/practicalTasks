function getCountVowels(text){
  const arrABC = ['e', 'y','u','i','o','a'];
  let arrText = text.toLowerCase().split(' ');
  let countText = arrText.length;
  let count = 0;


    for (let i = 0; i < arrText.length; i++) {
        for (let j = 0; j < arrABC.length; j++) {
            if(arrText[i].split('')[0] === arrABC[j]){
                count+=1;       
            }
        }
    }
    
    let consonants = arrText.length - count;
    console.log(arrText)
    console.log("Голосних:"+count);
    console.log("Приголосних:"+ consonants);
}

getCountVowels("For the past ten years Manhattan English Centers staff has been providing training to individuals from all over the world. As an ESL school in NYC, we provide students with Language training skills from beginner to advanced English level");