// 1. Create the car object
const car = {
    color: "White",
    make: "Toyota",
    model: "Corolla",
    year: 2018,

    
    // 2. Add the getCarInfo method
    getCarInfo: function() {
      return `This car is a ${this.year} ${this.color} ${this.make} ${this.model}.`;
    }
  };
  
  // 3. Print the car's information using the getCarInfo method
  console.log(car.getCarInfo());