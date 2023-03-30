function new_function(arr){
    arr.reverse();
     for (let i = 0; i < arr.length; i++) {
         arr[i] = Math.pow(arr[i],2);
     }
     return console.log(arr);
 }
 
 new_function([2,5,8,4,1]);