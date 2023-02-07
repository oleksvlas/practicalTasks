const tags = [1,1,3,4,4,1,3,2]
function getUniq(tags){
    let results = []

    tags.forEach(function (value){

        if(results.indexOf(value) === -1){
            results.push(value)
        }
    })
    return results
}
console.log("["+tags+"]  ==>  [" + getUniq(tags)+"];")