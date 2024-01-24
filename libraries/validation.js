const isValid = (mobileNumber) => {
  numberString = String(mobileNumber);
  const length = String(mobileNumber).length;
  if (length === 10 && numberString.startsWith("98")) {
    return "valid";
  } else {
    return "invalid";
  }
};

module.exports = { isValid };
