//creating own methods inside library

const add = (a, b) => {
  return a + b;
};

const multi = (a, b) => {
  return a * b;
};

// console.log(add(1, 2));

module.exports = { add, multi }; // exporting library methods
