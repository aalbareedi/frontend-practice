var computer = {
  make: "",
  weight: 4.4,
  batterySize: 3500
};

console.log(computer["make"], computer.make);

computer.touchPadSize = 10;
computer.make = "dell";
console.log(computer);

// deleting key property from the object
delete computer.touchPadSize;
console.log(computer);

// 7 properties , modify 2 them, add 2 properties, console.log 2 properties using both methods, delete 2 properties
var car = {
  make: "Toyota",
  model: "Camry",
  year: 2018,
  used: true,
  miles: 83434,
  color: "gray",
  mpg: 15
};

car.model = "Prius";
car.color = "Black";

car.anyAccidents = false;
car.price = 12999;

console.log(car.year, car["used"]);
console.log(car.color, car["price"]);

delete car.mpg;
delete car.miles;

for (var property in car) {
  console.log(car[property]);
}
console.log(car);

car.pastPrices = [20000, 19000, 18000];
console.log(car.pastPrices[0]);

car.options = [
  {
    name: "basic",
    hasGps: false,
    hasSeatHeater: false
  },
  {
    name: "premium",
    hasGps: true,
    hasSeatHeater: true
  }
];

console.log(car.options[0].name);

var name = "Bob";

name = "joe";

const color = "red";

const object = {
  a: 1,
  b: 2
};

object = {};

object.c = 3;

console.log(object);
