function splitString(stringToSplit, separator) {
    let arrayOfStrings = stringToSplit.split(separator);
    return arrayOfStrings
}
function checkCountOfWords(arr){
    let result = {};
    for (let i = 0; i < arr.length; ++i)
    {
        let a = arr[i];
        if (result[a] != undefined)
            ++result[a];
        else
            result[a] = 1;
    }
    for (let key in result)
        console.log("word *" + key + "* in the text "+ result[key] + " times");

}

let text = "I would like to know what you like, so I could know what to dare you"
checkCountOfWords(splitString(text, " "))