// dist скорочено від distance для більш зручного написання коду
let dist = prompt("Введіть відстань яку ви проходите пішки за день:", "");
dist = parseInt(dist); // відсіювання випадково або не випадково набраних латинських символів.
// Використовуючи &&, але без else.
if (dist) {
  if (dist < 4) console.log("мало");
  if (dist >= 4 && dist < 20) console.log("красунчик");
  if (dist >= 20) console.log("марафонець");
}
//Використовуючи else, але без &&.
if (dist < 4) {
  console.log("мало");
} else if (dist < 20) {
  console.log("красунчик");
} else console.log("марафонець");

//Не використовуючи ні &&, ні else.
if (dist) {
  if (dist < 4) console.log("мало");
  if (dist >= 4) {
    if (dist < 20) console.log("красунчик");
  }
  if (dist >= 20) console.log("марафонець");
}

// ??>. Чи можна це все записати через switch. Якщо так то дайте підказку як там правильно записати умову(в case).
