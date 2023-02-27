const declareSeason = () => {
    let month = Number(prompt("введіть номер місяця"))
    if (month < 1 || month > 12) {
        alert("Некоректні дані")
    }
    switch (month) {
        case 1:
        case 2:
        case 12:
            console.log("Winter")
            break;

        case 3:
        case 4:
        case 5:
            console.log("Spring")
            break;

        case 6:
        case 7:
        case 8:
            console.log("Summer")
            break;

        case 9:
        case 10:
        case 11:
            console.log("Fall")
            break;

        default:
            console.log("Відбулая непердбачувана помилка")


    }
}

declareSeason()