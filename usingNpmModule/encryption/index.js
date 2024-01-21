const encryption = require("bcryptjs");
const password = "suraj12";

// generating hash of the password ready to store in database
// const hashing = (password) => {
encryption.genSalt(10, (err, salt) => {
  encryption.hash(password, salt, function (err, hash) {
    console.log("The hashed password is :" + hash);
    // return hash;
    //   return hash;
  });
});
// };

//comparing technique
// const compare = (hashp) => {
//   encryption.compare("suraj123@", hashp, function (err, result) {
//     {
//       return result;
//     }
//   });
// };

// const hasp = hashing(password);
// const res = compare(hasp);
// console.log("hash password is : " + hasp);
// console.log(res);
