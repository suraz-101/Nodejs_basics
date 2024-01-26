//{Custom exercies}
// Write a js function that puts comma in every thousand place
//Eg: 10000 => 10,000
//Eg: 1000 => 1,000
//Eg: 1000000 => 1,000,000

// const number = 1000000;

const convert = (number) => {
  const convertedNumber = number.toLocaleString("en-Us");
  return convertedNumber;
};

module.exports = { convert };
