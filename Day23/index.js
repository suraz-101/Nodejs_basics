// Instructions
// module or library
// Destructure
// Parameter/ arguments pass

//Nodejs Indbuilt Module (fs)
// Mode js custom module
//Package (Currency Converter, pdfkit)

// Write a js function that create a new file and add content in it

// hello.txt => hello world using fs package

const fs = require("fs");

const writeIntoFile = (path, text) => {
  fs.appendFile(path, text + "\n", (err) => {
    if (err) throw err;
    console.log("saved!!");
    // return res;
  });
};

const readFromFile = (path) => {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
};

module.exports = { writeIntoFile, readFromFile };
