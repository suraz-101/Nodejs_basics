// importing nodejs feature

const http = require("http");
const library = require("./library"); // importing own defined library
const library2 = require("./library2");
const dateTime = require("./dateTime");
const temp = require("./temp");
const mToKm = require("./mToKm");
const truncate = require("./lognDescription");

const greeting = require("./greeting");

const validation = require("./validation");

const sendmail = require("./usingNpmModule/nodemailer/index");
http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("hellow world");
  })
  .listen(8000);

console.log("Server is running at 8000");
console.log("-----------------------------------------------------");

//using the methods of own created lbrary
const a = 2;
const b = 3;
const res = library.add(a, b);

const multi = library.multi(a, b);
console.log("The multiplication of " + a + " & " + b + " is : ", multi);
console.log("-----------------------------------------------------");
console.log("The sum " + a + " & " + b + "  is : ", res);
console.log("-----------------------------------------------------");
const name = "Suraj Pandey";
const upper = library2.upperCase(name);
console.log("The upper class of " + name + " is : ", upper);
console.log("-----------------------------------------------------");
const time = dateTime.currentTime;
console.log("The current date and time is : ", time);
console.log("-----------------------------------------------------");
const temperatureInF = 180;
const tempInF = temp.convertToCelcius(temperatureInF);
console.log("The " + temperatureInF + " °F  in Celsius is : ", tempInF + "°C");
console.log("-----------------------------------------------------");
const meter = 2000;
const mKm = mToKm.meterToKm(meter);

console.log(
  "The conversion of " + meter + "m into Kilomerter is : ",
  mKm + "km"
);
console.log("-----------------------------------------------------");
const phoneNumber = 9846779106;

const valid = validation.isValid(phoneNumber);
console.log("The given number " + phoneNumber + " is " + valid);
console.log("-----------------------------------------------------");
const string =
  "My name is Suraj Pandey. I live in Pokhara which is the most beautiful city of Nepal loacated at the mid western region of Nepal. It si the main gateway to numerous Trek.";

const response = truncate.truncate(string);
console.log(response);
console.log("-----------------------------------------------------");
const greetingRes = greeting.greeting();
console.log("---------------------------");
console.log("|                          |");
console.log("    Hellow " + greetingRes);
console.log("|                          |");
console.log("---------------------------");

console.log("-----------------------------------------------------");
console.log("---------------------------");
console.log("|                          |");
console.log("  Send mail    ");
console.log("|                          |");
console.log("---------------------------");
const mail = sendmail.sendEmail();
console.log(mail);
