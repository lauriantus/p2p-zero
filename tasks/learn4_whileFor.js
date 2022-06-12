console.log("Виведення через while");
var i = 1;
while (i < 10) {
  var j = 1;
  while (j <= i) {
    console.put(j + " ");
    j++;
  }
  i++;
  console.log(" ");
}

console.log("");
console.log("");
console.log("");
console.log("Виведення через for");
for (let i = 1; i < 10; i++) {
  for (let j = 1; j <= i; j++) {
    console.put(j + " ");
  }
  console.log("");
}

console.log("");
console.log("");
console.log("");
console.log("Виведення через while");
var i = 9;
while (i > 0) {
  var j = 9;
  while (j >= i) {
    console.put(j + " ");
    j--;
  }
  i--;
  console.log(" ");
}
console.log("");
console.log("");
console.log("");
console.log("Виведення через for");
for (var i = 9; i > 0; i--) {
  for (var j = 9; j >= i; j--) {
    console.put(j + " ");
  }
  console.log(" ");
}
