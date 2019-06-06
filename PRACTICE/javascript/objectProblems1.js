/* Object practice */

// Create an object called user that will have these 4 properties: name, age, weight, favoriteColor

let user = {
  name: "Bob",
  age: 20,
  weight: 150,
  favoriteColor: "red"
};

// Add 2 more properties called eyeColor and dog

user.eyeColor = "brown";
user.dog = {};
console.log(user);

// The dog property will be ANOTHER object that has the properties: furColor, weight, isPuppy, and age.

user.dog.furColor = "black";
user.dog.weight = 60;
user.dog.isPuppy = true;
user.dog.age = 1;

// console.log(user);
console.log(user.dog);

// Delete the favoriteColor property from this user

delete user.favoriteColor;
console.log(user);

// Change the weight property to 200

user.dog.weight = 200;
console.log(user.dog);

/* ============== LOOPS =========================== */
// Loop through this object and console log the property and value
// EX:
// name: Amer
// age: 25
// weight: 150
// favoriteColor: green

for (var property in user) {
  console.log(user[property]);
}

/* =================== Function ===================== */
// Create a function that will take in 4 parameters: name, age, weight, favoriteColor, and return an object with those 4 properties

function makeObject(name, age, weight, favColor) {
  var object = {};

  object.name = name;
  object.age = age;
  object.weight = weight;
  object.favColor = favColor;

  return object;
}

// EX: createUser('joey', 25, 150, 'blue') => {name: 'joey, age: 25, weight: 150, favoriteColor: 'blue'}

console.log(makeObject("joey", 25, 150, "blue"));
