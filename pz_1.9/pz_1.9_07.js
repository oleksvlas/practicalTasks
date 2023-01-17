main();

function getTemperatureInCelsius() {
    return parseFloat(prompt("Enter temperature in Celsius"));
}

function convertFromCelsiusToFahrenheit(temperatureInCelsius) {
    return Math.round(9 / 5 * temperatureInCelsius + 32);
}

function main() {
    let temperatureInCelsius = getTemperatureInCelsius();
    let temperatureInFahrenheit = convertFromCelsiusToFahrenheit(temperatureInCelsius);
    alert("It`s " + temperatureInFahrenheit + "°F")
}