// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
// !NO
/*
let age = prompt("age:");
let cond = age >= 14 && age <= 90;
!cond ? alert(true) : alert(false);

let age = prompt("age:");
let cond = age >= 14 && age <= 90;
cond ? alert(не находиться в диапазоне) : alert(находиться в диапазоне);

*/
!(age >= 14 && age <= 90);
/*just <>
let age = prompt("age:");
if (age < 14 || age > 90) {
  alert("done");
} else {
  alert("Incorrect");
}
*/
