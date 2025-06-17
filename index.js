const userInput = prompt(
  "Please enter you ice cream flavors  separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const foryoFlavors = userInput.split(",");
console.log("vanilla,vanilla,vanilla,strawberry,coffee,coffee");

const arr = [foryoFlavors];
const count = {};

for (const flavors of foryoFlavors) {
  if (count[flavors]) {
    count[flavors] += 1;
  } else {
    count[flavors] = 1;
  }
}

console.table(count);
