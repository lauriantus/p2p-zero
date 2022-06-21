// total sequeence of numbers
let bigger = -Infinity,
  number;
for (;;) {
  let number = parseInt(
    prompt(
      "Якщо завершили введення чисел - введіть 0. Введіть число для порівняння:"
    )
  );
  if (number === 0) {
    break;
  }
  if (number % 2 === 0 && number > bigger) {
    bigger = number;
  }
}
if (bigger === -Infinity) {
  console.log("Нажаль жодне число не було порівняно");
} else {
  console.log("bigger number: " + bigger);
}
