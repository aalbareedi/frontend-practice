// this is about the mod operator (%)
let x = 3 / 1;
let y = 12 % 5;

function evenOrOdd(number) {
  let type = "";
  if (number % 2 === 0) {
    type = "even";
  } else {
    type = "odd";
  }
  return type;
}

let a = 2;
let b = "2";

if (a == b) {
  console.log("equal");
}

console.log(evenOrOdd(10));

for (let i = 1; i < 11; i++) {
  for (let j = 1; j < 11; j++) {
    for (let k = 1; k < 11; k++) {
      console.log("i:", i);
    }
  }
}

const testScores = [[100, 75], [90, 80], [95, 85]];

for (let i = 0; i < testScores.length; i++) {
  for (let j = 0; j < testScores[i].length; j++) {
    console.log(testScores[i][j]);
  }
}
