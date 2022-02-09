function whatMounthIsNow(){
    let age = prompt('Какой сейчас месяц ?', Math.floor(Math.random() * (12 - 1) + 1));
    switch(Number.parseInt(age)){
    case 1 : alert(` ${age} Это Январь!`);
    break;
    case 2 : alert(` ${age} Это Февраль!`);
    break;
    case 3 : alert(` ${age} Это Март!`);
    break;
    case 4 : alert(` ${age} Это Апрель!`);
    break;
    case 5 : alert(` ${age} Это Май!`);
    break;
    case 6 : alert(` ${age} Это Июнь!`);
    break;
    case 7 : alert(` ${age} Это Июль!`);
    break;
    case 8 : alert(` ${age} Это Авгруст!`);
    break;
    case 9 : alert(` ${age} Это Сентябрь!`);
    break;
    case 10: alert(` ${age} Это Октябрь!`);
    break;
    case 11: alert(` ${age} Это Ноябрь!`);
    break;
    case 12: alert(` ${age} Это Декабрь!`);
    break;
    }
    }
    whatMounthIsNow();
    