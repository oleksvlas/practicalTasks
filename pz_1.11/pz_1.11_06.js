function new_function(arr){
    let unique = arr.filter((x, i) => arr.indexOf(x) === i);
    console.log("Заданий масив:",arr);
    console.log("Фільтрований масив:",unique);
}

new_function([1,2,2,3,4,4,5,4,5,6,7,7,8,,8,7,4,9,0]);