// const array = [3, 2, 6, 4, 5];
const maximum = (array) => {
  const max = array.reduce((accumulator, currentvalue) => {
    if (currentvalue > accumulator) {
      accumulator = currentvalue;
    }
    return accumulator;
  }, 0);

  return max;
};

const minimum = (array) => {
  const min = array.reduce((mini, current) => {
    if (mini > current) {
      mini = current;
    }
    return mini;
  });
  return min;
};

module.exports = { maximum, minimum };
