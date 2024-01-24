const calculation = async (a, b) => {
  let sum = 0;

  setTimeout(() => {
    sum = a + b;
    console.log(`The sum is : ${sum}`);
  }, 2000);
  const squareOfSum = sum * sum;
  return squareOfSum;
};

const res = calculation(1, 3);
console.log(`The square root is : ${res}`);
