const text = "іат івао іа лоі івлдао о аівалд оівао ілвоа длі ова vetajika@gmail.com фівлдо фівол ілфво лофв іловф і"

function getEmailFromText(text) {
    let regArray = text.match(/\S+@\S+\.\S+/)
    if (regArray !== null) {
        return regArray[0]
    }
    return null
}

console.log(getEmailFromText(text))