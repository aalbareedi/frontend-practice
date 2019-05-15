var testScores = [80, 90, 100, 75, 85];
var mathScores = [66, 54, 75, 80, 94, 100];

function filter(array, score) {
  var filteredArray = [];

  for (var i = 0; i < array.length; i = i + 1) {
    if (array[i] > score) {
      filteredArray.push(array[i]);
    }
  }

  return filteredArray;
}

var filteredTestScores = filter(testScores, 85);
var filteredMathScores = filter(mathScores, 65);
console.log(filteredTestScores);
console.log(filteredMathScores);

// start = 1
// end = 3
// return ["orange", "banana"]
function slice(array, start, end) {
  var slicedArray = [];

  // end > array.length
  // array.length < end
  // 7 > 5
  // 5 < 7

  if (array.length < end) {
    return "End is bigger than length of array";
  }

  for (var i = start; i < end; i = i + 1) {
    slicedArray.push(array[i]);
  }
  return slicedArray;
}

var fruitsArray = ["apple", "orange", "banana", "pineapple", "grape"];

// console.log(slice(fruitsArray, 1, 4));

console.log(fruitsArray.slice(1, 4));

var value = fruitsArray.slice(1, 4); //[]

value.shift();

console.log(value);

function indexOf(array, value) {
  for (var i = 0; i < array.length; i = i + 1) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
}

console.log(fruitsArray);
console.log(indexOf(fruitsArray, "kiwi"));
console.log(fruitsArray.indexOf("orange"));

fruitsArray.splice(3, 2);
console.log(fruitsArray);

var examScores = [80, 90, 100, 75, 85, 95];

// these functions will modify the old array (mutate)
examScores.pop();
examScores.push(85);

examScores.shift();
examScores.unshift(80);

examScores.splice(3, 1);
console.log(examScores);

// console.log(animals);
// var slicedArr = animals.slice(0, 2);
// animals.splice(1, 1);

// console.log(animals);
// console.log("sliced array", slicedArr, "test");

var animals = ["dog", "cat", "hamster", "lion"];
// ["lion", "hamster", "cat", "dog"]

function reverseArray(array) {
  var reversedArray = [];
  for (var i = array.length - 1; i > -1; i = i - 1) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}

console.log(reverseArray(animals));

console.log(animals.reverse());

function combineStrings(arrayOfStrings) {
  var combinedString = "";
  for (var i = 0; i < arrayOfStrings.length; i = i + 1) {
    // combinedString = combinedString + arrayOfStrings[i];
    combinedString += arrayOfStrings[i];
  }
  return combinedString;
}

console.log(combineStrings(animals));

console.log(animals.join(", "));
