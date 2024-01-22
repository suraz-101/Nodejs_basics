const properUpperCase = require("proper-upper-case");
const hashing = require("./encryption");

const string = "surajPandey";

const converToProperUpperCase = (string) => {
  return properUpperCase(string);
};

const res = converToProperUpperCase(string);
// console.log(res);

const hashPass = hashing.dataEncryption(string);
const result = hashing.comparePassword("suraj", hashPass);
const result1 = (result) =>
  result ? "The password is correct" : "The password is incorrect";
console.log(result1(result));
