// Function to greet a person
function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  // Function to calculate the area of a circle
  function calculateArea(radius) {
    return Math.PI * radius * radius;
  }
  
  // Function to check if a number is even
  function isEven(number) {
    return number % 2 === 0;
  }
  
  // Test the functions
  greet("Butcher");
  
  const radius = 5;
  const area = calculateArea(radius);
  console.log(`The area of a circle with radius ${radius} is ${area.toFixed(2)}`);
  
  console.log(`Is 2 even? ${isEven(2)}`);
  console.log(`Is 9 even? ${isEven(9)}`);


