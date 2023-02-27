const getDayOfWEek = () => {
    let day = Number(prompt("введіть від 1 до 7"))


    switch (day){
        case 1:
            console.log("Понеділок")
            break;
        case 2:
            console.log("Вівторок")
            break;
        case 3:
            console.log("Середа")
            break;
        case 4:
            console.log("Четверг ")
            break;
        case 5:
            console.log("Пятниця")
            break;
        case 6:
            console.log("Субота")
            break;
        case 7:
            console.log("Неділя")
            break;

    }

}

getDayOfWEek()