const n = prompt("Enter day")
class Days{
    constructor(day) {
        this.day = day
    }
}
let week = {
    1: new Days("Monday"),
    2: new Days("Tuesday"),
    3: new Days("Wednesday"),
    4: new Days("Thursday"),
    5: new Days("Friday"),
    6: new Days("Saturday"),
    7: new Days("Sunday")
}
alert("Day of the week: " + week[n].day)
