const VehicleDetail = {
  name: "Range Rover Defender",
  model: "OCTA 150",
  manufacturedYear: 2026,
  color: "black",
};

console.log("vehicle detail", VehicleDetail);

// now accessing the value of an object

// /using . notation

console.log("vehicle name is ", VehicleDetail.name);

// now using []

console.log("vehicle color is ", VehicleDetail["color"]);

// update

VehicleDetail.name = "svr";

console.log("now updated vehicle name", VehicleDetail.name);

// []

VehicleDetail["color"] = "torques";

console.log("now updated vehicle color", VehicleDetail["color"]);

// now adding properties to object

// .

VehicleDetail.engine = "800hp";

console.log("vehicle detail", VehicleDetail);

// []

VehicleDetail["type"] = "petrol";
console.log("vehicle detail", VehicleDetail);