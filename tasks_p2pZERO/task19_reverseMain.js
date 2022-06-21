main();

// functions
// create array(+ print) and reverse(+ print) it
function main() {
  let arrayLength = getArrayLength(),
    array = [];
  fillArray(array, arrayLength);
  printArray(array);
  reverseArray(array);
  console.log(`Ось реверснутий масив:`);
  printArray(array);
}

function getArrayLength() {
  let arrayLength = +prompt("Введіть розмір масиву", "");
  while (isNaN(arrayLength) || arrayLength <= 0) {
    arrayLength = +prompt("Введіть більш корректний розмір масиву", "");
  }
  return arrayLength;
}

function fillArray(array, arrayLength) {
  for (let i = 0; i < arrayLength; i++) {
    array[i] = prompt(`Введіть ${i} елемент масиву: `);
  }
  return array;
}

function printArray(array) {
  let print = "[";
  for (let i = 0; i < array.length; i++) {
    print += `${array[i]}`;
    print += i != array.length - 1 ? `, ` : `]`;
  }
  return console.log(print);
}

function reverseArray(array) {
  let tempArray = [];
  // create dublicate
  for (let i = 0; i < array.length; i++) {
    tempArray[i] = array[i];
  }
  // reverse
  for (let i = tempArray.length - 1, j = 0; i >= 0; j++, i--) {
    array[j] = tempArray[i];
  }

  return array;
}
