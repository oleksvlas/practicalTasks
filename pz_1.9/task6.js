const n = prompt("Enter month")
class Month {
    constructor(season, month) {
        this.season = season
        this.month = month
    }
}
const monthes = {
    1: new Month("Winter", "January"),
    2: new Month("Winter", "February"),
    3: new Month("Spring", "March"),
    4: new Month("Spring", "April"),
    5: new Month("Spring", "May"),
    6: new Month("Summer", "June"),
    7: new Month("Summer", "July"),
    8: new Month("Summer", "August"),
    9: new Month("Autumn", "September"),
    10: new Month("Autumn", "October"),
    11: new Month("Autumn", "November"),
    12: new Month("Winter", "December")
}
alert("Season: " + monthes[n].season)
alert("Month: " + monthes[n].month)