function array(arr){
    if(arr.size < 3){
        throw new Error("Array has less than 3 elements")
    }

    const temp = arr[0]
    if(arr.indexOf(temp) !== arr.lastIndexOf(temp)){
      return console.log(arr.find(el => el !== temp))
    }
    return console.log(temp)
}

array([1,1,5,1,1]);