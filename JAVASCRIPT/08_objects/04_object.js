// using class constructor

class CarDetail {
  constructor(name, model, color) {
    ((this.name = name), (this.model = model), (this.color = color));
  }
}

console.log("Car details", CarDetail);

const car1 = new CarDetail("taycan", 2025, "torques");

const car2 = new CarDetail("g-wagon", 2026, "black");

console.log("car-1 detail", car1);

console.log("car-2 detail", car2);

const moreCarDetail = {
  engine: "V8",
  hp: "800hp",
};

const totalCar = { ...car1, ...moreCarDetail };

console.log("total car", totalCar);
