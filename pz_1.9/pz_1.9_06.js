let month = prompt("Введіть номер місяця (від 1 до 12)");

if (month >= 1 && month <= 12) {
  let season = "";
  if (month === 12 || month === 1 || month === 2) {
    season = "зима";
  } else if (month >= 3 && month <= 5) {
    season = "весна";
  } else if (month >= 6 && month <= 8) {
    season = "літо";
  } else if (month >= 9 && month <= 11) {
    season = "осінь";
  }
  let monthNames = [
    "січень",
    "лютий",
    "березень",
    "квітень",
    "травень",
    "червень",
    "липень",
    "серпень",
    "вересень",
    "жовтень",
    "листопад",
    "грудень",
  ];
  let monthName = monthNames[month - 1];
  alert(`Місяць ${monthName} належить до пори року "${season}"`);
} else {
  alert("Некоректний номер місяця");
}