let side = +prompt("Введіть довжину сторони квадрата, будь ласка:", "");
while (side == null || side == "") {
  side = +prompt(
    "Ви ввели пусту строку, або відмінили введення числа. Для подальшої взаємодії введіть ціле число, яке більше 0:"
  );
}
if (side >= 0 && side % 1 === 0) {
  for (let i = 0; i < side; i++) {
    for (let j = 0; j < side; j++) {
      console.put("* ");
    }
    console.log("");
  }

  // padding)
  console.log(" ");
  console.log(" ");
  console.log(" ");
  console.log(" ");

  let k = 0;
  while (k < side) {
    let n = 1;
    while (n < side) {
      console.put("* ");
      n++;
    }
    console.log("* ");
    k++;
  }
} else {
  alert(
    "Будь ласка, оновіть сторінку та введіть дані заново. Має бути ціле число більше або рівне нулю"
  );
}
