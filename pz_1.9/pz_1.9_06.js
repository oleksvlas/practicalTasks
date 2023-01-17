function main() {
    let number = getNumber();
    let seasonInfo = getMonthInfoByMonthNumber(number);
    if (seasonInfo !== -1) {
        console.log("It is " + seasonInfo.month + ", " + seasonInfo.season);
    }
}

function getNumber() {
    return parseInt(prompt("Enter number"));
}

function getMonthInfoByMonthNumber(number) {
    if (number < 1 || number > 12) {
        alert("Invalid month number");
        return -1;
    }

    let winter = "Winter";
    let spring = "Spring";
    let summer = "Summer";
    let autumn = "Autumn";

    let seasonsMap = {
        1: {season: winter, month: "January"},
        2: {season: winter, month: "February"},

        3: {season: spring, month: "March"},
        4: {season: spring, month: "April"},
        5: {season: spring, month: "May"},

        6: {season: summer, month: "June"},
        7: {season: summer, month: "July"},
        8: {season: summer, month: "August"},

        9: {season: autumn, month: "September"},
        10: {season: autumn, month: "October"},
        11: {season: autumn, month: "November"},

        12: {season: winter, month: "December"},
    }

    return seasonsMap[number];
}

main();