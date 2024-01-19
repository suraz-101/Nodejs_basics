//Write a js function that checks if the mobile number is valid phone number or not
//for example : +014411 => false
// for example : 9846779106 => true

// const mobileNumber = 9846779106;

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
