// Об'єкт з інформацією про дні тижня в різних мовах
const daysOfWeek = {
    ua: {
      1: "Неділя",
      2: "Понеділок",
      3: "Вівторок",
      4: "Середа",
      5: "Четвер",
      6: "П'ятниця",
      7: "Субота",
    },
    en: {
      1: "Sunday",
      2: "Monday",
      3: "Tuesday",
      4: "Wednesday",
      5: "Thursday",
      6: "Friday",
      7: "Saturday",
    },
  };
  
  // Функція для відображення модульного вікна та запитування мови та номера дня тижня
  function askDayOfWeek() {
    let language;
    let dayNumber;
  
    // Запитуємо мову доти, доки не буде введена правильна
    do {
      language = prompt("Виберіть мову ua або en");
      language = language.toLowerCase();
    } while (language !== "ua" && language !== "en");
  
    // Запитуємо номер дня тижня доти, доки не буде введено число від 1 до 7
    do {
      dayNumber = parseInt(prompt(daysOfWeek[language][1] + "\n" + "Enter the day number of the week (from 1 to 7)?"));
    } while (dayNumber < 1 || dayNumber > 7 || isNaN(dayNumber));
  
    // Виводимо результат
    alert(daysOfWeek[language][dayNumber]);
  }
  
  // Викликаємо функцію для запитування мови та номера дня тижня
  askDayOfWeek();