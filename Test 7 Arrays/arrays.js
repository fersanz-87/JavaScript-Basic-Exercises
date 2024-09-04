// 1. Create an array `colors` containing five different color names
let colors = ['red', 'blue', 'green', 'yellow', 'purple'];

// 2. Add a new color to the end of the array
colors.push('orange');

// 3. Remove the first color from the array
colors.shift();

// 4. Use the `map` function to create a new array `uppercaseColors` where each color name is in uppercase
let uppercaseColors = colors.map(color => color.toUpperCase());

// Print the new array
console.log(uppercaseColors);