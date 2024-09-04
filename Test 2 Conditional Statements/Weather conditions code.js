// 1. Create a temperature variable
const temperature = 20;

// 2. Conditional statement to check temperature 
if (temperature < 32) {
    console.log("It's freezing.");
} else if (temperature >= 32 && temperature <= 68) {
    console.log("It's cool.");
} else {
   console.log("It's warm."); 
}

// 3. Switch statement for weather conditions
const weatherCondition = "snowy";

switch (weatherCondition) {
    case "sunny":
        console.log("It's a beautiful sunny day!");
        break;
    case "rainy":
        console.log("Don't forget your umbrella!");
        break;
    case "snowy":
        console.log("Time to build a snowman!");
        break;
    default:
        console.log("Enjoy the weather, whatever it may be!");
}