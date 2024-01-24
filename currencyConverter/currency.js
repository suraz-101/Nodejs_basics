const cc = require("currency-converter-lt");
const converter = (from, to, amount) => {
  let currencyConverter = new cc();
  const convert = currencyConverter.from(from).to(to).amount(amount).convert();

  return convert;
};

module.exports = { converter };
