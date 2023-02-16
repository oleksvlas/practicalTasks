function two_arrays(arr){
    let arr_full = []
        for (let i = 0; i < arr.length; i++) {
            if(arr[i].length != 0)
                Array.prototype.push.apply(arr_full, arr[i]);
        }
    arr_full.sort();
    console.log(arr_full);
}

two_arrays([[3,2,1],[4,6,5],[],[9,7,8]]);