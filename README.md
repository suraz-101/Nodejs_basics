# Day - 15 : Nodejs_basics

# Day - 16 : Node Module System

- http feature of node allows to trasfer data over the Hyper Text Transfer Protocol (HTTP)

- used createServer() method to create server

  - Syntax:
    - createServer(callBackFunction) => call backfunction takes two argument that is request and response to send the req and res to the server

- used listen() method to listen identify in which port server will listen

- Overall syntax:

  - import http module using require
    http.createServer((req,res)=>{res.write('message') //write a response to the client
    res.end(); // end the response
    }).listen(PORT);

- If the reponse from the HTTP server is supposed to be displayed as HTML , we should include an HTTP header witht the correct content type as:

res.writeHead(200, {'Content-Type':'text/html'});

- Creating own library

  -export library using module.exports = {method1, method2};

# Day 17 - Nodejs, HTML, CSS and JS Practice

# Day 18 - NPM (Node Package Manager) module play

# Day 19 - NPM

- learned about bcrypt.js library and used hashSync method encrypt the password and compareSync method to compared the previously hashed password and return the boolean. If password mached it will return true and if wrong it will return false.

- learned about Nodemailer Package of Npm

  - For instance: In real world project we can use nodemailer package to send the mail to the customer after customer login to the system, or to confirm the valid username and passwrord once customer register using the email address.

# Day - 20 : Nodejs Practice Exercises

# Day - 21 : Nodejs Practice with other packages

- learned about pdfkit and currency-converter-lt npm package which helps us to print the pdf and convert the currency, respectively.

For eg: In real world project we can use pdfkit package to print the bill of the customer in e-commerce application after customer pays the bills.

# Day - 22 : Events, Theory and Nodejs Exercises

- Learned about the events and how can we handle events inside node.js
  Nodejs has inbuilt module called event which will help to make our own events
  Syntax : const event = require('events);
  const eventEmmiter = new event.EventEmitter();
  eventEmitter.on("buttoncClicked", ()=>{console.log("button is clicked)});
  eventEmitter.emit("buttonClicked");

  => We can also send arguments using emit method along with eevnt name as foloows:
  evemtEmiiter.on(eventname, callbackfunction);
  eventEmitter.emit(event, argument1, argument2);

Note: event module helps us to easily create and handle custom eventsin nodejs.
