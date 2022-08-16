// ## ****Practice: Wood Carving****

// Once VS Code starts, open the main.js file and follow the instructions below.
// **Instructions**
// Here are two functions you can start with. The second one will depend on what the first one returns.

function createWoodBlock() {
  // Return an object with 4 properties.
  const wood = {
    type: "Oak",
    lengths: "5ft",
    material: "Hardwood",
    purpose: "Recycled Dolphin",
  };
  return wood;
}

const createBeautifulCarving = (woodObject) => {
  // Return a string representation of the object
  return `A ${woodObject.lengths} ${woodObject.material} ${woodObject.type} log was carved into a beautiful ${woodObject.purpose}`;
};

// The function returns a value, so that value is stored in a variable
const woodBlock = createWoodBlock();

// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving(woodBlock); // <-- Missing an argument. Fix it.

console.log(carvingString);

// In the **createWoodBlock** function, return an object with the following properties
// • A *type* property with a value of "wood block"
// • A *length* property with a value of 10
// • A *material* property with a value of "pine"
// • A *purpose* property with a value of "flute"
// In the **createBeautifulCarving** function, return a string that looks like the following template.
// "The 10-inch, pine woodblock was carved into a wooden flute"
// ****

// **Helpful hints**
// Hint wood block

// const createWoodBlock = () => {
//   // Return an object with 4 properties.
//   return {
//     type: "wood block",
//     lengths: 10,
//     material: "pine",
//     purpose: "flute",
//   };
// };

// Hint: Wood carving

// const createWoodBlock = (woodBlock) => {
//   // Return an object with 4 properties.
//   return `The ${woodBlock.lengths}-inch, ${woodBlock.material} woodblock was carved into a wooden ${woodBlock.purpose}`;
// };
