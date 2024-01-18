// importing nodejs feature

const http = require("http");
const library = require("./library"); // importing own defined library
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

console.log("The sum " + a + "&" + b + "  is : ", res);
