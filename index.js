// importing nodejs feature

const http = require("http");
const library = require("./library"); // importing own defined library
const library2 = require("./library2");
const dateTime = require("./dateTime");
const temp = require("./temp");
const mToKm = require("./mToKm");
http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("hellow world");
  })
  .listen(8000);

console.log("Server is running at 8000");

//using the methods of own created lbrary
const a = 2;
const b = 3;
const res = library.add(a, b);

const multi = library.multi(a, b);
console.log("The multiplication of " + a + " & " + b + " is : ", multi);

console.log("The sum " + a + " & " + b + "  is : ", res);

const name = "Suraj Pandey";
const upper = library2.upperCase(name);
console.log("The upper class of " + name + " is : ", upper);

const time = dateTime.currentTime;
console.log("The current date and time is : ", time);

const temperatureInF = 180;
const tempInF = temp.convertToCelcius(temperatureInF);
console.log("The " + temperatureInF + " °F  in Celsius is : ", tempInF + "°C");

const meter = 2000;
const mKm = mToKm.meterToKm(meter);

console.log(
  "The conversion of " + meter + "m into Kilomerter is : ",
  mKm + "km"
);
