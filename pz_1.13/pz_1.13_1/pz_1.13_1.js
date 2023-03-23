const languages = ['en', 'ua']
const messagesByLanguage = {}

function initLanguage(lang) {
    switch (lang) {
        case 'en':
            messagesByLanguage["greeting"] = "Hi, your chosen language is English"
            messagesByLanguage["enterDayNumber"] = "Enter the day number of the week (from 1 to 7)"
            messagesByLanguage["1"] = "Monday"
            messagesByLanguage["2"] = "Tuesday"
            messagesByLanguage["3"] = "Wednesday"
            messagesByLanguage["4"] = "Thursday"
            messagesByLanguage["5"] = "Friday"
            messagesByLanguage["6"] = "Saturday"
            messagesByLanguage["7"] = "Sunday"
            break;
        case 'ua':
            messagesByLanguage["greeting"] = "Привіт, ваша мова - солов'їна"
            messagesByLanguage["enterDayNumber"] = "Введіть номер дня неділі від 1 до 7?"
            messagesByLanguage["1"] = "Понеділок"
            messagesByLanguage["2"] = "Вівторок"
            messagesByLanguage["3"] = "Середа"
            messagesByLanguage["4"] = "Четвер"
            messagesByLanguage["5"] = "П'ятниця"
            messagesByLanguage["6"] = "Субота"
            messagesByLanguage["7"] = "Неділя"
            break;
    }
}

function gettingDayOfWeek() {

    let lang = (prompt('Виберіть мову “ua” або “en”?')).toLowerCase();

    if (!languages.includes(lang)) {
        alert('Invalid language input')
        gettingDayOfWeek();
        return;
    }

    initLanguage(lang)
    alert(messagesByLanguage["greeting"])

    let dayNumber = parseInt(prompt(messagesByLanguage["enterDayNumber"]))
    if (dayNumber < 1 || dayNumber > 7) {
        alert('Invalid day number input')
        gettingDayOfWeek();
        return;
    }

    alert(messagesByLanguage[dayNumber]);
}

gettingDayOfWeek();
