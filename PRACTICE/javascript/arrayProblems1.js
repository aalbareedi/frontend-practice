// Create a function that will convert a temperature from fahrenheit to celsius
// T(°C) = (T(°F) - 32) × 5/9
function fToC(tempInF) {
  var tempInC = (tempInF - 32) * (5 / 9);
  return tempInC;
}
console.log(fToC(32));

// Create a function that will convert a temperature from celsius to fahrenheit
// F = 1.8 C + 32
function cToF(tempInC) {
  var tempInF = 1.8 * tempInC + 32;
  return tempInF;
}
console.log(cToF(0));

// Function that will reverse a string (ex: ‘hello’ -> ‘olleh’)
function reverseString(string) {
  var reversedString = "";
  for (var i = string.length - 1; i > -1; i = i - 1) {
    // reversedString = reversedString + string[i];
    reversedString += string[i];
  }
  return reversedString;
}
console.log(reverseString("hello"));

// Function that give the factorial of a number (5! = 5 * 4 * 3 * 2 * 1 = 120)
function factorial(number) {
  var answer = 1;
  for (var i = number; i > 0; i = i - 1) {
    answer = answer * i;
  }
  return answer;
}
console.log(factorial(5));

// Create a function that will take in 2 arrays of equal length and returns a new array that merges the two arrays together
// EX: [1,2,3,4,5], [5,10,15,20,25] should return [1, 5, 2, 10, 3, 15, 4, 20, 5, 25]

function arrayMerger(array1, array2) {
  var mergedArrays = [];
  for (var i = 0; i < array1.length; i++) {
    mergedArrays.push(array1[i]);
    mergedArrays.push(array2[i]);
  }
  return mergedArrays;
}
console.log(arrayMerger([1, 2, 3, 4, 5], [5, 10, 15, 20, 25]));

// Create a function that will take a string and capitalize all of the characters
// EX: ‘hello’ => ‘HELLO’
// HINT: Take a look at built in functions for strings

function capitalize(string) {
  var capitalizedString = string.toUpperCase();
  return capitalizedString;
}
console.log(capitalize("hey"));

// Write a JavaScript for loop that will loop from 0 to 15. For each iteration, it will check if the current number is odd or even, and console log a message
// EX: 0 is even, 1 is odd, 2 is even, 3 is odd

for (let i = 0; i < 15; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

// Write a JavaScript program which iterates the integers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".

for (let i = 1; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}
