// Original function
function greet(name) {
    return `Hello, ${name}!`;
  }
  
  // Converted to arrow function
  const greetArrow = (name) => `Hello, ${name}!`;
  
  // Test the arrow function
  console.log(greetArrow("Fernando")); // Expected output: Hello, Fernando!
  console.log(greetArrow("Emmanuel"));   // Expected output: Hello, Emmanuel!

const multiply = (a, b) => a * b;

// Test the multiply function
const num1 = 10;
const num2 = 7;
const result = multiply(num1, num2);
console.log(`${num1} * ${num2} = ${result}`);  