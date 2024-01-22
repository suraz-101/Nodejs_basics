const properUpperCase = require("proper-upper-case");
const hashing = require("./encryption/index");

const string = "surajPandey";

const converToProperUpperCase = (string) => {
  return properUpperCase(string);
};

const res = converToProperUpperCase(string);
// console.log(res);
const password = "suraj12";

const hashPass = hashing.dataEncryption(password);
const result = hashing.comparePassword("suraj12", hashPass);
const result1 = (result) =>
  result ? "The password is correct" : "The password is incorrect";
console.log(result1(result));

//ALGORITH TO STORE USERNAME AND PASSWORD INTO DATABASE AND LOGIN SUCCESSFULLY IF THE PROVIDED USERNAME AND PASSWORD MATCHES FROM THE DATABASE
// To store the data in the database
//1. store the data from front end into variables in backend
// eg: const username = value1; const password = value2;
// encrypt the password using bcrypt node package
// first install bcrypt package using npm i bcryptjs
//import bcryptjs to the project using const bcryptjs = require("bcryptjs");
// const encrytion = (password) =>{return bcrypt.hashSync(password, 10)}
// const encryptedPassword = encryption(password);

// store username and encryptedPassword into database

// To retrive username and encrypted password from the database and login if the username and password is correct
//1. store the data from the frontend into variables in backend
//eg.: username = value1; const password = value2;
//retrive the each data from database and compare each and every username and password using iteration methods
// Eg: Store first value from database and store into variables
// eg: const userName ; const hashPassWord;
// compare password with the given password but the password taken from user is in plain text and datbase
//is encrypted password for that use following line of code
// const bcrypt = require("bcryptjs");
// const compare =(password)=>{return bcrypt.comapareSync(password, hashPassWord)}
// if(username === userName && compare === true)
//{console.log("You are successfully logged in")}
//else{console.log("Please enter correct username and password! The information provided does not match!")}
