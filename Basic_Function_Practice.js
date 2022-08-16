// 1. Create a function that console logs the string "FUNctions are fun!"

// const fun = () => {
//   return console.log("FUNctions are fun!");
// };

// fun();

// 2. Create a function that adds two numbers (just like in the content document) and returns the sum.

const added = (num1, num2) => {
  return num1 + num2;
};

function sumit(num1, num2) {
  return num1 + num2;
}

// 3. Invoke the function with two numbers of your choice.

console.log(added(47, 89));
console.log(sumit(5, 6));

// 4. Create another function that multiplies two numbers and returns the product.  Invoke this function.
const multiplyit = (num1, num2) => {
  return num1 * num2;
};

console.log(multiplyit(5, 6));

// 5. Create another function that adds two numbers and then multiplies the sum by a third number.  Complete this task by invoking the other two math functions within your new function.  Test this function by invoking it and console logging the output.
const multiadd = (num1, num2, num3) => {
  return multiplyit(sumit(num1, num2), num3);
};

console.log(multiadd(4, 5, 6));
