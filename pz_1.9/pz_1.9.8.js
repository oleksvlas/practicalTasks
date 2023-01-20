let week = Number(prompt("Введіть порядкове число дня в неділі від 1 до 7:"))
if (week>7||week<1){
    alert("Ви ввели некоректне число!!!")
}else {
    switch (week){
        case 1: alert("Понеділок"); break;
        case 2: alert("Вівторок"); break;
        case 3: alert("Середа"); break;
        case 4: alert("Четверг"); break;
        case 5: alert("П'ятниця"); break;
        case 6: alert("Суббота"); break;
        case 7: alert("Неділя"); break;
    }
}