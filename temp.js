// create another library that converts fahrenheit temp to celcius

// const tempInFahrenheit = 100;

// console.log(formula);

const convertToCelcius = (tempInFahrenheit) => {
  const formula = ((tempInFahrenheit - 32) * 5) / 9;
  return formula;
};

// console.log(convertToCelcius(tempInFahrenheit));

module.exports = { convertToCelcius };
