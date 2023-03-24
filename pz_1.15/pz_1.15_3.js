const vowels = ['а', 'е', 'є', 'и', 'і', 'ї', 'о', 'у', 'ю', 'я'];

function textAnalyze(text) {
    let textDetails = {
        text: text,
        vowels: 0,
        consonants: 0,
    }
    for (const letter of text) {
        if (vowels.includes(letter)) {
            textDetails.vowels++
        } else {
            textDetails.consonants++
        }
    }
    return textDetails
}

console.log(textAnalyze("Привіт"))