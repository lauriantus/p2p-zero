// N — це натуральне число (тобто ціле та більше за 0),
// яке ви спитаєте у користувача.
// Числа мають виводитись в рядок через кому.
// Після останнього числа коми бути не повинно.
// На одну частину має бути не більше однієї команди виводу числа
// Всі частини мають запускатись в один клік (запустили прогу,
// 1 раз ввели N — надрукувались 8 послідовностей)
let N = +prompt("Введіть будь ласка натуральне число");

console.log("part 1: від 1 до N включно, через while");
let a = 0;
while (a++ < N) {
  a < N ? console.put(a + ",") : console.put(a);
}
console.log("");
console.log("");
console.log("part 1: від 1 до N включно, через for");
for (let i = 1; i <= N; i++) {
  i < N ? console.put(i + ",") : console.put(i);
}
console.log("");
console.log("");
console.log("part 1: від N до 1 включно, через while");
let c = N;
while (c > 0) {
  1 < c ? console.put(c + ",") : console.put(c);
  c--;
}
console.log("");
console.log("");
console.log("part 1: від N до 1 включно, через for");
let m = N;
for (; m > 0; m--) {
  1 < m ? console.put(m + ",") : console.put(m);
}
console.log("");
console.log("");
console.log("part 1: парні від 2 до N включно, через while");
let x = 1;
while (x++ < N) {
  if (x % 2 === 0) {
    console.put(x);
  } else continue;
  if (x !== N && x !== N - 1) {
    console.put(",");
  }
}
/*
console.log("");
console.log("");
console.log("part 1: парні від 2 до N включно, через for");
for (let y = 1; y <= N; y++){
    if (y%2!=0) continue
    else
    (y < N) ? console.put(y + ",") : console.put(y);
}*/
