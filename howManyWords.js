// //
// let text = ["word word",
//     "      word     word      ",
//     "a a a a a ",
//     '  !"№;%:  ?%*) №"(     1231a2823 #@₴?$0 2373  $*#*$ ',
//     "",
//     '  !"№;%:  ?%*) №"(     12312823 #@₴?$0 2373  $*#*$ "',
//     "                       "];
// for (let i = 0; i < text.length; i++) {
//     console.log("row " + i + " = " + text[i]);
// }

//     // Виведення кількості слів у рядку

//     console.log("Рядок [" + i + "] => " + text[i])
//     console.log("Ми миємо " + many + " слів у даному рядку. \n");
// }

// // Створення масиву з рядків

// for (let i = 0; i < 5; i++) {
//     text[i] = prompt("Введіть символи", "");
//     console.log("text[i]: " + text[i] + "\t" + typeof text[i]);
//     }
// }

// // Створення  ряду з текстом, символами тощо. Ручне введення.

// let row = prompt("Введіть ряд символів: ", "");
// console.log("row = " + row);
// for (let i = 0; i < row.length; i++) {
//     console.put("\nrow[" + i + "] = " + row[i]);
// }

// // Створення  ряду з текстом, символами тощо. Ручне введення.
// // Перевірка на типи
// let row = prompt("Введіть ряд символів: ", "");
// console.log("\nrow = " + row);
// for (let i = 0; i < row.length; i++) {
//     console.put("\nrow[" + i + "] = " + row[i]);
//     console.put("\nrow[i] = " + row[i] + " \trow.charCodeAt(i) = " + row.charCodeAt(i));
//         console.put("\ntypeof row[i] = " + typeof(row[i]) + "\ntypeof row.charCodeAt(i) = " + typeof(row.charCodeAt(i)));
//     if (row[i] == row.charCodeAt(i)) {
//         console.put('true');
//     }
// }

// let row = prompt("Введіть ряд символів: ", "");
// console.log("\nrow = " + row);
// for (let i = 0; i < row.length; i++) {
//     let ascii = row.charCodeAt(i);
//     if (ascii > 64 & ascii < 91 || ascii > 96 && ascii < 123) {
//         console.put("\nrow[i] = " + row[i] + " \trow.charCodeAt(i) = " + row.charCodeAt(i));
//     } else {
//         console.put("\nrow[i] = " + row[i] + " \trow.charCodeAt(i) = " + row.charCodeAt(i) + "none");
//     }
// }

// let row = prompt("Введіть ряд символів: ", "");
let i = 0,
  row = "smdnk lkasmd ksadlof sakdf",
  total = 0;

console.log("\nrow = " + row);
while (i < row.length) {
  // Скорочення умови про ASCII
  let ifLowerRegister = row.charCodeAt(i) > 64 && row.charCodeAt(i) < 91,
    ifUpperRegister = row.charCodeAt(i) > 96 && row.charCodeAt(i) < 123,
    ifUpperLower = ifLowerRegister || ifUpperRegister;

  while (i < row.length && ifUpperLower) {
    console.put(
      "\ni = " +
        i +
        "\trow[i] = " +
        row[i] +
        " \trow.charCodeAt(i) = " +
        row.charCodeAt(i)
    );
    console.log("\n" + typeof ifUpperLower + " = " + ifUpperLower);
    i++;
  }
  while (i < row.length && !ifUpperLower) {
    console.log("i = " + i);
    i++;
  }
  total += 1;
}
console.log("\nВ реченні " + total + " слів.");
