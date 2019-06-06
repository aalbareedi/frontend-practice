/*
LOOPS: For Loop / While Loop

Functions:
Pop()
Push()
Shift()
Unshift()
Slice()
Splice()
indexOf()
*/

var checks = [1113, 1523, 1322, 1250, 1523, 951, 1091, 1309, 1003];

// Loops - Create a function that uses a while loop to get me the sum (number) of the first 5 checks
// 6731
function checksSum(array) {
  var sum = 0;
  var i = 0;
  while (i < 5) {
    sum = sum + array[i];
    i++;
  }
  return sum;
}
console.log(checksSum(checks));

// Create a function that uses a for loop that will sum up the entire checks array (return number)
function arraySum(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
console.log(arraySum(checks));

// =====================================================================
// Array methods - use the appropriate method for each question
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

// Give me a new array of strings that has only the weekdays (Mon - Fri)
var newDays = days.slice(1, 6);
console.log(newDays);

console.log(days.slice(1, 6));

// Remove from the days array all of the weekdays
console.log("splice problem");
// days.splice(1, 5);
// console.log(days);

var daysRemoved = days.splice(1, 5);
console.log(daysRemoved, days);

// Find me the position of Saturday in the days array

console.log(days.indexOf("Saturday"));

// Add to the end of the CHECKS array the values 1022 and 1050

console.log(checks.push(1022, 1050));
console.log(checks);

// Add to the beginning of the checks array the values 500 and 950

console.log(checks.unshift(500, 950));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var words = ["hello", "bob", "reallylongword", "extra", "elephant"];

// Create a function that will find me the longest string in an array
// EX: longestWord(words) will return 'reallylongword'

function longestWord(array) {
  let longestString = "";
  for (let i = 0; i < array.length; i++) {
    array[i].length;
    /*******************/
  }
  return longestString;
}

// Create a function that will combine the words array into a single string with a space between each word

function combineWords(array) {
  let combinedString = "";
  for (let i = 0; i < array.length; i++) {
    combinedString = combinedString + array[i] + " ";
  }
  return combinedString;
}

console.log(combineWords(words));

// Create a function that will return to me an ARRAY with the lengths of all the strings in the array
// EX: countLengthOfWords(words) will return [5, 3, 14, 5, 8] (hello has 5 characters, bob has 3, etc...)

function countLengthOfWords(array) {
  let arrayOfLengths = [];
  for (let i = 0; i < array.length; i++) {
    arrayOfLengths.push(array[i].length);
  }
  return arrayOfLengths;
}

console.log(countLengthOfWords(words));
