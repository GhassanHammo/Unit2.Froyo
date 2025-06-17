const userInput = prompt(
  "Please enter you ice cream flavors  separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const foryoFlavors = userInput.split(",");
console.log("vanilla,vanilla,vanilla,strawberry,coffee,coffee");

const iceCream = (arr) => {
  const count = {};

  for (const flavors of arr) {
    if (count[flavors]) {
      count[flavors] += 1;
    } else {
      count[flavors] = 1;
    }
  }
  return count;
};

console.table(iceCream(foryoFlavors));
