const weekNumber = parseInt(prompt("Enter week number"))

const hashMap = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
}

const result = `${weekNumber} -> ${hashMap[weekNumber]}`

alert(result)