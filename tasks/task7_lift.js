// Рибак Іван
let floor = prompt("Оберіть поверх від 1 до 102 включно, будь ласка:");
let cancelFloor = floor === null || floor === "";
if (floor > 0 && floor < 103) {
  if (floor > 23 && floor < 40) {
    let pass = prompt("Введіть будь ласка пароль:"),
      cancelPass = pass === null || pass === "";
    if (pass == 1337) {
      console.log("ок");
    } else if (cancelPass) {
      alert("відмінено");
    } else {
      console.log("Невірний пароль");
    }
  } else console.log("ok");
} else if (cancelFloor) {
  alert("відмінено");
} else {
  console.log("Невірний поверх");
}

/*питання по виконанню цього завдання через switch
//Чи можливо якось записати цей код через switch?
//Якщо можливо, то як правильно записати умову в case?
//Або цей пункт сприймає лише одне значення і не підтримує перебір значень?
switch (floor) {
  case 1 - 102:
    console.log("ok");
    break;

  case 24 - 39:
    let pass = parseInt(prompt("Введіть будь ласка пароль:", ""));
    if (pass === 1337) {
      console.log("ок");
    } else console.log("Невірний пароль");

  default:
    console.log("невірний поверх");
    break;
}
*/
