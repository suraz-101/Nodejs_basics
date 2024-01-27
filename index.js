// importing nodejs feature

const http = require("http");
const library = require("./libraries/library"); // importing own defined library
const library2 = require("./libraries/library2");
const dateTime = require("./libraries/dateTime");
const temp = require("./libraries/temp");
const mToKm = require("./libraries/mToKm");
const truncate = require("./lognDescription");
const greeting = require("./libraries/greeting");
const validation = require("./libraries/validation");
const sendmail = require("./usingNpmModule/nodemailer/index");
const maxMin = require("./Day21/index");
const { resourceUsage } = require("process");
const pdf = require("./pdfConverter/pdf");
const filesystem = require("./Day23/index.js");
require("dotenv").config();

// require("dotenv").config();
http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("hellow world");
  })
  .listen(process.env.PORT);

console.log(`Server is running at ${process.env.PORT}`);
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
const emails = [
  { name: "Suraj Pandey", email: "surazpandey101@gmail.com" },
  { name: "Sandesh Subedi", email: "sandesh@gmail.com" },
  { name: "Nabin Chhetri", email: "nabin@gmail.com" },
  { name: "Suraj", email: "surazpandey832@gmail.com" },
];
const message = "Hello";
const mailOptions = {
  from: "Suraj Pandey <surazpandey101@gmail.com>",
  to: "surazpandey101@gmail.com",
  subject: "Testing",
  text: `${message}`,
  html: "<h1>Hello</h1>",
  attachments: [
    {
      filename: "attachment.jpg",
      path: "./images/attachment.jpg",
    },
  ],
};

// const mail = sendmail.sendEmail(mailOptions);
// console.log(mail);

console.log("------------------MAX-MIN------------------");
const array = [2, 5, 77, 1, 99];
const maximum = maxMin.maximum(array);
const minimum = maxMin.minimum(array);
console.log("The maximum value from an array is : ", `${maximum}`);

console.log("The minimum value from an array is : ", `${minimum}`);

// Write a nodejs application to convert the currency
//from one currency to another using package currency-converter-Lt

// const cc = require("currency-converter-lt");

const curency = require("./currencyConverter/currency");
// const data ={
//   from : "USD",
//   to : "NPR",
//   amount:3,

// }
const from = "USD";
const to = "NPR";
const amount = 3;
const result = async () => {
  const convertedCurrency = await curency.converter(from, to, amount);
  const result =
    "The conversion of " + amount + " USD into NPR is :" + convertedCurrency;
  console.log(result);
  console.log("......Ended......");
};
result();

//Write a node.js application that can generate pdf
//using text and images. Use package: pdfkit
// Destructure
//argument pass
//async await
// const text =
//   "Hi, it's me Suraj pandey. Currently, I am living in Pokhara which is one of the beautiful city of Nepal located at the western region of Nepal. It is surrounded with various beautiful senic views and is main gateway to Annapurna Base Camp.";
// textFont = 25;
// const imagePath = "./images/attachment.jpg";
// pdf.createPdf(text, textFont, imagePath);

const content = {
  name: "suraj",
  username: "surajpandey101@gmail.com",
};
const path = "./hellow.txt";

// const path = "./Day23/";
const initialising = (path, text) => {
  // filesystem.initilization.re;
  filesystem.writeIntoFile(path, text);

  setTimeout(() => {
    filesystem.readFromFile(path);
  }, 2000);

  setTimeout(() => {
    filesystem.updateFile(path);
  }, 3000);
};

// filesystem.readFromFile(path, "utf8");

initialising(path, content);

const number = "100000";

const commaPlacement = require("./Day23/placement");
const commaResult = commaPlacement.convert(Number(number));
console.log(commaResult);
