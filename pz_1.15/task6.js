let now = new Date();
console.log(now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + ", " + conwertDay(now) + ", " + now.getDate() + " " + conwertMonth(now) + " " + now.getFullYear() + " year")

function conwertDay(now){
    let day = now.getDay()
    switch(day){
        case 1:
            return "Monday"
            break
        case 2:
            return "Tuesday"
            break
        case 3:
            return "Wednesday"
            break
        case 4:
            return "Thursday"
            break
        case 5:
            return "Friday"
            break
        case 6:
            return "Satarday"
            break
        case 7:
            return "Sunday"
            break
        default:
            return "Not correct value"
            break
    }
}

function conwertMonth(now){
    let month = now.getMonth()
    switch(month){
        case 0:
            return "January"
            break
        case 1:
            return "February"
            break
        case 2:
            return "March"
            break
        case 3:
            return "April"
            break
        case 4:
            return "May"
            break
        case 5:
            return "June"
            break
        case 6:
            return "July"
            break
        case 7:
            return "August"
            break
        case 8:
            return "September"
            break
        case 9:
            return "October"
            break
        case 10:
            return "November"
            break
        case 11:
            return "December"
            break
        default:
            return "Not correct value"
            break
    }
}

