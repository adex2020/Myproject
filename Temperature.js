//convert kelvin to celcius
const kelvin = 273;
//let celsius;
//let fahrenheit;
//kelvin - 273
let celsius = kelvin - 273;
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);
let Newton = celsius * (33/100);
Newton = Math.floor(Newton);
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);
console.log(`The temperature is ${Newton} degree newton`);
console.log(`The temperature is ${kelvin} degree kelvin`);