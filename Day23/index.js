// Instructions
// module or library
// Destructure
// Parameter/ arguments pass
const properUpperCase = require("proper-upper-case");

//Nodejs Indbuilt Module (fs)
// Mode js custom module
//Package (Currency Converter, pdfkit)

// Write a js function that create a new file and add content in it

// hello.txt => hello world using fs package

const fs = require("fs");
// const { consumers } = require("stream");

const writeIntoFile = (path, { name, username }) => {
  const properCaseText = properUpperCase(name);

  fs.appendFile(path, [properCaseText, username] + "\n", (err) => {
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
    console.log("---------------------------------------");
    console.log("--------- THE DATA INSIDE FILE --------");
    console.log("---------------------------------------");

    console.log(data);
  });
};

const updateFile = (path) => {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const fileData = data;

    // console.log(fileData.split(","));
    const username = "surajpandey101@gmail.com";

    const updatedUsername = "surajpandey@gmail.com";
    console.log("The updated file is: ");
    // const searchString = ;
    const re = new RegExp("^.*" + username + ".*$", "gm");
    const updatedText = fileData.replace(re, updatedUsername);
    console.log(updatedText);
    fs.writeFile(path, updatedText, "utf8", function (err) {
      if (err) return console.log(err);
    });
  });
};

module.exports = { writeIntoFile, readFromFile, updateFile };
