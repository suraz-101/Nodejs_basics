const properUpperCase = require("proper-upper-case");

const string = "suraj Pandey";

const converToProperUpperCase = (string) => {
  return properUpperCase(string);
};

const res = converToProperUpperCase(string);
console.log(res);


