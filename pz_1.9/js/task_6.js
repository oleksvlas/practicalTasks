function season()
{
    const month_name = ["Січень","Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад","Грудень"];
    const time_season = ["Зима", "Весна", "Літо", "Осінь"];
    
    let month = prompt();
    month -= 1;
        if(month == 11){
            alert(month_name[month]+" "+time_season[0]);
        }else if(month == 0 || month == 1){
            alert(month_name[month]+" "+time_season[0]);
        }else if(month <= 4  &&  month >= 2){
            alert(month_name[month]+" "+time_season[1]);
        }else if(month <= 7  &&  month >= 5)
            alert(month_name[month] +" "+time_season[2]); 
        else if(month <= 10  &&  month >= 8){
            alert(month_name[month]+" "+time_season[3]);
        }else{
            alert("Write correct number!");
        }
}

season();