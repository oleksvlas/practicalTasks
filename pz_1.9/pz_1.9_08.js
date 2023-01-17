main();

function main() {
    let number = getNumber();
    let day = getDayOfWeekByNumber(number);

    if (day !== -1) {
        let h1 = document.getElementById("day")
        h1.innerText = day;
    }
}

function getNumber() {
    return parseInt(prompt("Enter the number"))
}


function getDayOfWeekByNumber(number) {
    if (number < 1 || number > 7) {
        alert("Invalid number");
        return -1;
    }
    let daysOfWeek = {
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
        7: "Sunday",
    }
    return daysOfWeek[number];
}
