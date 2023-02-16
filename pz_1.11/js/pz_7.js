function double_arr(arr){
    let diag = 0;
    for (let i = 0; i < arr.length; i++) {
       if(arr[i][diag] > 0){
            arr[i][diag] = 1;
       }else{
            arr[i][diag] = 0;
       }
       diag+=1;
    }
    return arr;
}

let arr =   [[22, -1, 0, 43, 57],      
            [-33, 10, 5, 4, 8],        
            [3, -1, -44, 44, 87], 
            [4, -331, 0, 18, 4],      
            [6, -31, 9, 77, 4]]

console.log(double_arr(arr));