// Рибак Іван
let star = +prompt(
  "Введіть кількість зірок на стороні трикутника, будь ласка:",
  ""
);
while (star == null || star == "") {
  star = +prompt(
    "Ви ввели пусту строку, або відмінили введення числа. Для подальшої взаємодії введіть ціле число, яке більше 0:"
  );
}
console.log(" ");
if (star >= 0 && star % 1 === 0) {
  for (let i = 0; i <= star; i++) {
    for (let j = 0; j <= i; j++) {
      console.put("*");
    }
    console.log(" ");
  }

  console.log("");
  //
  console.log("");

  for (let i = star; i > 0; i--) {
    for (let j = i; j > 0; j--) {
      console.put("*");
    }
    console.log(" ");
  }

  console.log(" ");
  //
  console.log(" ");

  for (let i = 0; i <= star; i++) {
    for (let j = star; j >= 1; j--) {
      if (j > star - i) {
        console.put(" ");
      } else console.put("*");
    }
    console.log(" ");
  }

  console.log(" ");
  //
  console.log("");

  for (let i = 0; i <= star; i++) {
    for (let j = 1; j <= star; j++) {
      if (i <= star - j) {
        console.put(" ");
      } else console.put("*");
    }
    console.log(" ");
  }
} else {
  console.log(
    "Будь ласка, оновіть сторінку та введіть дані заново. Має бути ціле число більше або рівне нулю"
  );
}
