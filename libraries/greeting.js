// // const time = date.toLocaleTimeString();
//write a js library that greets users based on the time of the day using object and greeeting object
//Eg:
// const greetings ={
// morning : "Good Morning",
//afternoon: "Good afternoon",
//evening: "Good Evening"
// }
// const greeting = () => {
//   const greet = {
//     moring: "Good morning ",
//     afternoon: "Good afternoon!",
//     evening: "Good evening!",
//   };
//   const date = new Date();
//   const hour = date.getHours();
//   //   const time = date.toLocaleString();

//   if (5 <= hour && hour < 12) {
//     return greet.moring;
//   } else if (12 <= hour && hour <= 17) {
//     return greet.afternoon;
//   } else {
//     return greet.evening;
//   }
// };

const greeting = () => {
  const greet = {
    morning: "Good morning ",
    afternoon: "Good afternoon!",
    evening: "Good evening!",
  };
  let res = "";
  const hour = new Date().getHours();
  switch (hour) {
    case hour >= 5 && hour < 12:
      res = greet.morning;
      break;
    case hour >= 12 && hour <= 17:
      res = greet.afternoon;
      break;
    default:
      res = greet.evening;
      break;
  }
  return res;
};

module.exports = { greeting };
