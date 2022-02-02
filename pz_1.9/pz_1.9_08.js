let dayOfWeek = prompt("Вкажіть який сьогодні день тижня числом", '');

switch(dayOfWeek){
    case "1" :
        alert('Сьогодні понеділок');
        break;
    case "2" :
        alert('Сьогодні вівторок ');
        break;
    case "3" :
        alert('Сьогодні середа ');
        break;
    case "4" :
        alert('Сьогодні четвер ');
        break;                        
    case "5" :
        alert('Сьогодні пятниця');
        break;
    case "6" :
        alert('Сьогодні субота');
        break;  
    case "7" :
        alert('Сьогодні неділя');
        break;              
    default:
        alert('Неправильно вказано');
        
}