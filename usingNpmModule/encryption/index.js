const encryption = require("bcryptjs"); // importing predefined bcryptjs library from npm


// generating hash of the password ready to store in database
const dataEncryption = (password) => {
  return encryption.hashSync(password, 10);
};


// compare the 
const comparePassword = (pass, hashPass) => {
  return encryption.compareSync(pass, hashPass);
};

module.exports = { dataEncryption, comparePassword };
