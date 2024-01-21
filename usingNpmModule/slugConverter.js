const slugConverter = require("slugify");

const string = "React Js Clean Code Guide";

const slufi = (string) => {
  return slugConverter(string, { lower: true });
};

const res = slufi(string);
console.log(res);
