var x = 10;
var y = x + 20;
var z = y > x;
var text = "hello world";
var name = "amer albareedi";
var combine = text + " " + name;
var fruits = ["apple", "banana", "grape"];
var drink = fruits[0] + " smoothie";
var rocket = { type: "shepard", color: "brown", weight: 100, isPuppy: true };
var something;
var noValue = null;

var numberOfTextScores = 10;

console.log(combine, drink, fruits[2], rocket.weight, something, noValue);

if (z == true) {
  console.log("Y is greater than X");
} else {
  console.log("Y is less than X");
}

if (combine.length > 5 || z == false) {
  console.log("true");
}
