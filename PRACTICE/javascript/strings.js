var str = "hello world";
for (var i = 0; i < str.length; i++) {
  console.log(str[i]);
}

var capitalized = str.toUpperCase();
console.log(capitalized);

var portion = str.slice(0, 5);

console.log(portion);

str.indexOf("o");

console.log(str.includes(" "));

console.log(str.replace("hellos", "bye"));

console.log(str);

console.log(str.split("o"));
