var x = 10;
var y = x + 20;
var z = y > x;
var text = "hello world";
var name = "amer albareedi";
var combine = text + " " + name;

var rocket = { type: "shepard", color: "brown", weight: 100, isPuppy: true };
var something;
var noValue = null;
var numberOfTextScores = 10;
var score = 85;

var i = 0;
var fruits = ["apple", "banana", "grape"];
var drink = fruits[0] + " smoothie";

console.log(combine, drink, fruits[2], rocket.weight, something, noValue);

if (score < 65) {
  console.log("You got an F");
} else if (score >= 65 && score < 75) {
  console.log("you got a D");
} else if (score >= 75 && score < 85) {
  console.log("You got a C");
} else {
  console.log("You got an A");
}

if (rocket.type == "shepard" || rocket.color == "white") {
  console.log("true");
}

// var sum = 0;
// var average = 0;

// while (i < scores.length) {
//   sum = sum + scores[i];
//   i = i + 1;
// }

// for (var i = 0; i < scores.length; i = i + 1) {
//   sum = sum + scores[i];
// }

// average = sum / scores.length;
// console.log(average);

// var ourFruits = "";
// for (var i = 0; i < fruits.length; i = i + 1) {
//   ourFruits = ourFruits + " " + fruits[i];
// }
// console.log(ourFruits);

// var timer = 10;

// for (var i = 10; i > 0; i = i - 1) {
//   console.log(i);
//   if (i == 1) {
//     console.log("BLAST OFF");
//   }
// }

function add(a, b) {
  var sum = a + b;
  return sum;
}

var mathScores = [90, 85, 79, 93, 87];

function average(scores) {
  var sum = 0;
  for (var i = 0; i < scores.length; i = i + 1) {
    sum = sum + scores[i];
  }
  var average = sum / scores.length;
  return average;
}

var averageScore = average(mathScores);
console.log(averageScore);

// var c = add(2, 3);
// console.log(c);
