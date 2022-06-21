let city = [],
  lenght = 3, // change if you need more or less cities
  done;

//  input(if cancel - break)
for (let i = 0; i < lenght; i++) {
  city[i] = prompt("Введіть назву міста: ", "");

  // if cancel (not support Safari 5.1+)
  if (city[i] === null) {
    console.log("Відмінено. Оновіть сторінку та спробуйте знову");
    done = 0;
    break;
  } else {
    done = 1;
  }
}
if (done === 1) {
  let home = prompt("Введіть назву вашого рідного міста: ", "");
  let remember = 0,
    i = 0;

  // verify
  while (i < lenght) {
    if (city[i] === home) {
      console.log("Я знаю ваше місто!");
      remember = 1;
      i = lenght - 1;
      break;
    } else {
      i++;
    }
  }
  if (remember === 0) {
    console.log("Нажаль, я не знаю вашого рідного міста(");
  }
}
