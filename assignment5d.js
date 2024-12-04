const convertCelsiusToFahrenheit = (celsius) => {
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius}°C is ${fahrenheit}°F`);
};

const convertFahrenheitToCelsius = (fahrenheit) => {
    let celsius = (fahrenheit - 32) * 5/9;
    console.log(`${fahrenheit}°F is ${celsius}°C`);
};

convertCelsiusToFahrenheit(100);
convertCelsiusToFahrenheit(0);
convertCelsiusToFahrenheit(10);

convertFahrenheitToCelsius(32);
convertFahrenheitToCelsius(10);
convertFahrenheitToCelsius(102);
