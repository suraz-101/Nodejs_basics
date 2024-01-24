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

# Day - 20 : Nodejs Practice Exercises

# Day - 21 : Nodejs Practice with other packages
