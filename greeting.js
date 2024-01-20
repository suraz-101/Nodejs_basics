// // const time = date.toLocaleTimeString();

const greeting = () => {
  const greet = {
    moring: "Good morning ",
    afternoon: "Good afternoon!",
    evening: "Good evening!",
  };
  const date = new Date();
  const hour = date.getHours();
  const time = date.toLocaleString();
  if (5 <= hour && hour < 12) {
    return greet.moring;
  } else if (12 <= hour && hour <= 17) {
    return greet.afternoon;
  } else {
    return greet.evening;
  }
};

module.exports = { greeting };
