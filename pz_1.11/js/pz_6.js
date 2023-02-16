function array(arr){
    sortArr = arr.filter((id, index) => index === arr.indexOf(id));
    console.log(sortArr)
}

array([1,1,1,1,2,2,5,6,5,0,1,5]);