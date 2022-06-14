// // Один из возможных вариантов.
// let figure = [1, 7, 5, 1];
// // максимальное число из массива -  длинна следующего массива
// let compare = 0;
// for (let i = 0; i < figure.length; i++) {
//     if (compare < figure[i]) {
//         compare = figure[i]
//     }
// }
// // Основной массив
// for (let i = 0; i < figure.length; i++) {
//     let size = figure[i];

//     for (let j = 0; j < compare; j++) {
//         if (j < (2 * (compare-1))) {
//             console.put(" ");
//         }
//         if (j >= compare - figure[i] && j <= compare + figure[i]) {
//             console.put("*");
//         }
//     }
//     console.log("");
// }

let figure = [];
// Input massive
for (let i = 0; i < 20; i++) {
  figure[i] = +prompt("Введіть " + i + " -ий елемент", "");
  if (figure[i] === 0) {
    break;
  }
  if (figure[i] % 2 === 0 || figure[i] % 2 < 0) {
    i--;
  }
}
// maximum longer row
let compare = 0;
for (let i = 0; i < figure.length; i++) {
  if (compare < figure[i]) {
    compare = figure[i];
  }
}
// Output nassive
for (let i = 0; i < figure.length; i++) {
  // обьявляем строки
  let k = 0,
    empty = (compare - figure[i]) / 2;
  while (k < empty) {
    // обьявляем колличество пробелов до звездочки
    console.put(" ");
    k++;
  }
  k = 0;
  while (k < figure[i]) {
    // обьявляем колличество звездочек равное после пробела
    console.put("*");
    k++;
  }
  console.log("");
}
