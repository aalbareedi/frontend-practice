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

console.log(factorial(4));
