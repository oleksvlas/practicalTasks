function week(){
    let weeks = ["Понеділок", "Вівторок", "Середа", "Чертвер", "П'ятниця", "Субота", "Неділя"]
    let str = "1:Понеділок 2:Вівторок 3:Середа 4:Чертвер 5:П'ятниця 6:Субота 7:Неділя"
    let a = prompt(str);
    document.write(weeks[a-1]);
}

week();