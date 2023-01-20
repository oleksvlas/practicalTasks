let month = Number(prompt('Введіть числов місяця в діапазоні від 1 до 12:'));
let name;
let type;
if (month > 12 || month < 1){
    alert("Ви ввели невірне число!!")
}else {
    switch (month){
        case 1: name = "Січень"; break;
        case 2: name = "Лютий"; break;
        case 3: name = "Березень"; break;
        case 4: name = "Квітень"; break;
        case 5: name = "Травень"; break;
        case 6: name = "Червень"; break;
        case 7: name = "Липень"; break;
        case 8: name = "Серпень"; break;
        case 9: name = "Вересень"; break;
        case 10: name = "Жовтень"; break;
        case 11: name = "Листопад"; break;
        case 12: name = "Грудень"; break;
        default: name = "null"; break;
    }
    if (month === 12 || month === 1 || month === 2){
        type = "Зима";
    }else if (month === 3 || month === 4 || month === 5){
        type = "Весна";
    }else if (month === 6 || month === 7 || month === 8){
        type = "ЛІто";
    }else {
        type = "Осінь";
    }
    alert( "Назва місяця - " + name + ", пора року - " + type)
}