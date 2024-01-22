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
