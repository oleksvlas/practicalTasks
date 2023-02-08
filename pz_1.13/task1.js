language()

function language() {
    const n = prompt("Виберіть мову (ua/en)").toLowerCase()
    if (n === "ua") {
        choosing_day_ukr()
    }else if (n === "en") {
        choosing_day_eng()
    } else {
        alert("Некоректний ввід даних")
        language()
    }
}

function choosing_day_eng(){
    const day = parseInt(prompt("Enter the day number of the week (from 1 to 7)?"))
    switch (day) {
        case 1:
            alert("Monday")
            break
        case 2:
            alert("Tuesday")
            break
        case 3:
            alert("Wednesday")
            break
        case 4:
            alert("Thursday")
            break
        case 5:
            alert("Friday")
            break
        case 6:
            alert("Saturday")
            break
        case 7:
            alert("Sunday")
            break
        default:
            alert("You were wrong")
            choosing_day_eng()
            break;
    }
}

function choosing_day_ukr(){
    const day = parseInt(prompt("Введіть номер дня тижня від 1 до 7?"))
    switch (day) {
        case 1:
            alert("Понеділок")
            break
        case 2:
            alert("Вівторок")
            break
        case 3:
            alert("Середа")
            break
        case 4:
            alert("Четвер")
            break
        case 5:
            alert("П'ятниця")
            break
        case 6:
            alert("Субота")
            break
        case 7:
            alert("Неділя")
            break
        default:
            alert("Дані введено некоректно")
            choosing_day_eng()
            break;
    }
}
