function numberConverter(number) {
    if (number < 0 || number > 9999) {
        console.log('Number must be in range of 0 and 9999')
        return {}
    }

    number = number.toString()

    return {
        'одиниці': number[number.length - 1],
        'десятки': number[number.length - 2],
        'сотні': number[number.length - 3],
        'тисячі': number[number.length - 4],
    }
}

console.log(numberConverter(100))
