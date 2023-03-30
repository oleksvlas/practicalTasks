function new_function(arr){
    let diag = 0;
    for (let i = 0; i < arr.length; i++) {
       if(arr[i][diag] > 0){
            arr[i][diag] = 1;
       }else{
            arr[i][diag] = 0;
       }
       diag+=1;
    }
    return console.log(arr);
}

new_function([[22, -1, 0, 43, 57],      
              [-33, 10, 5, 4, 8],        
              [3, -1, -44, 44, 87], 
              [4, -331, 0, 18, 4],      
              [6, -31, 9, 77, 4]]);