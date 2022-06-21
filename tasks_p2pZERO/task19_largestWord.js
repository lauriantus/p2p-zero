//https://shpp.gitbook.io/zero/tutorials/strings/longest-word

let row = prompt("Введіть рядок символів для вибірки");
let largerWord = "";

for (let i = 0, j = 0, mark = 0, word = ""; i < row.length; i++) {
  let ascii = row.charCodeAt(i),
    condition = (ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122);

  if (condition) {
    word += row[i];
    mark++;
    j++;
  }

  if (!condition || i == row.length - 1) {
    if (word.length > largerWord.length) {
      largerWord = word;
      mark = largerWord.length;
    }

    j = -1;
    word = "";
  }
}
console.log(`Рядок: ${row}\nНайбільше слово з рядка: ${largerWord} `);
