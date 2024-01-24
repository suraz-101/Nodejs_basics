//Practice

//Create a library which write a program to find the maximum and minimum vaue of an array
//dont forget to pass the value as an arguments
//use destructure concept in index.js

const array = [3, 2, 6, 4, 5];
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

// const res = maximum(array);
// const minimumNumber = minimum(array);

// array.filter((element)=>{el})

module.exports = { maximum, minimum };
