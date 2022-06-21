// if...else
/*
let temp = prompt("Яка на вулиці температура?");
if (temp < 5) {
  console.log("Одягни :) шапку");
} else {
  console.log("Все файно)");
}
*/

// if
/*
let a = prompt("Введите число:");
if ((a = 0));
console.log("A дорівнює ...");
console.log("10");
*/

//Интерестное использование if
// var value = condition ? true : false;
/*
let age = prompt("Enter your age, please:");
let test = age > 18 ? "You can to try" : "Not access";
*/
//done. ECMAScript
/*
let company = prompt("Какое 'официальное' название JavaS'cript?:");
if (company == "ECMAScript") {
  console.log("Верно!");
} else {
  console.log('Не знаете? "ECMAScript"!');
}
*/

// 1/0/-1
/*
let company = prompt("Enter the number:");
if (company > 0) console.log("1");
else if (company < 0) console.log("-1");
else console.log("0");
*/
// result = 6 + 7 < 4 ? "мало" : "много";

let login = prompt("Login:");

login == "Сотрудник"
  ? alert("Привет")
  : login == "Директор"
  ? console.log("Здравствуйте")
  : login == ""
  ? console.log("Нет логина")
  : console.log("");
