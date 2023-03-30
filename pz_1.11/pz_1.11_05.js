function checkNum(num){
  if(num < 0){
      console.log(num + " - число є негативним");
  }

  if(num > 0){
      console.log(num + " - число є позитивним");
  }

  if(num % 2 == 0 && num % 5 == 0 && num % 3 == 0 && num % 9 == 0){
      console.log(num + " - число ділиться на 2, 5, 3, 6, 9 без залишку ");
  }

  if (num === 2) {
      console.log(num + ' - число є простим');
  }else{
    let i = 2;
    const limit = Math.sqrt(num);
    let check = true;
       while (i <= limit) {
          if (num % i === 0) {
              check = false;
              break;
          }
          i +=1;
      }  
      if(check){
          console.log(num + ' - число є простим');
      }
  }
}
checkNum(Number(prompt()));