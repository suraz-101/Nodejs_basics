const foodA = ["Noodle", "Pasta", "Ice-cream"];
const foodB = ["Fries", "Ice-cream", "Pizza", "Pasta"];

const commonFood = (foodA, foodB) => {
  return foodA.filter((foodItems) => foodB.includes(foodItems));
};

const common = commonFood(foodA, foodB);
console.log(common);

// attachment
// how to make env variable using (dotenv package)
