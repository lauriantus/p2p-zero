let f = 0;
while (f < 10) {
  console.put("*");
  f++;
}
console.log("");
console.log("");

let i = 0;
while (i < 1000) {
  console.put("*");
  i++;
}
console.log("");
console.log("");

let stars = +prompt("Скільки зірочок ви хочете побачити?", ""),
  j = 0;
while (j < stars) {
  console.put("*");
  j++;
}
console.log("");
console.log("");

for (let b = 0; b < stars; b++) {
  console.put("*");
}
