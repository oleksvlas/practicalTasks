function getDate(){
    let now = new Date();
    console.log(now.getHours()+
    ":"+
    now.getMinutes()+
    ":"+
    now.getSeconds()+
    ", "+
    day_week[getWeekNum(now.getFullYear(), now.getMonth())]+ 
    " , "+
    now.getDate()+
    " "+
    month_name[now.getMonth()]+
    " "+
    now.getFullYear()+
    " року");
}

const day_week = ["Понеділок", "Вівторок", "Середа", "Чертвер", "П'ятниця", "Субота", "Неділя"];
const month_name = ["Січень","Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад","Грудень"];

function getWeekNum(year, month) {
    var daysNum = 32 - new Date(year, month, 32).getDate(),
        fDayO = new Date(year, month, 1).getDay(),
        fDay = fDayO ? (fDayO - 1) : 6,
        weeksNum = Math.ceil((daysNum + fDay) / 7)-3;
    return weeksNum;
}



getDate();