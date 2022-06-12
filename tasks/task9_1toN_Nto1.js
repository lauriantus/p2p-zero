let N = +prompt("Введіть будь ласка натуральне число");
while (N == null || N == "") {
  N = +prompt(
    "Ви ввели пусту строку, або відмінили введення числа. Для подальшої взаємодії введіть ціле число, яке більше 0:"
  );
}
if (N >= 0 && N % 1 === 0) {
  //від 1 до N включно, через while//
  let a = 0;
  while (a++ < N) {
    a < N ? console.put(a + ",") : console.put(a);
  }
  console.log("");
  console.log("");
  //від 1 до N включно, через for//
  for (let i = 1; i <= N; i++) {
    i < N ? console.put(i + ",") : console.put(i);
  }
  console.log("");
  console.log("");
  //від N до 1 включно, через while//
  let c = N;
  while (c > 0) {
    1 < c ? console.put(c + ",") : console.put(c);
    c--;
  }
  console.log("");
  console.log("");
  //від N до 1 включно, через for//
  let m = N;
  for (; m > 0; m--) {
    1 < m ? console.put(m + ",") : console.put(m);
  }
  console.log("");
  console.log("");
  // парні від 2 до N включно, через while
  let x = 1;
  while (x++ < N) {
    if (x % 2 === 0) {
      console.put(x);
    } else continue;
    if (x !== N && x !== N - 1) {
      console.put(",");
    }
  }
  console.log("");
  console.log("");
  // парні від 2 до N включно, через for
  for (let y = 1; y <= N; y++) {
    if (y % 2 === 0) {
      console.put(y);
    } else continue;
    if (y !== N && y !== N - 1) {
      console.put(",");
    }
  }
  console.log("");
  console.log("");
  // парні від N до 2 включно, через while
  let d = N;
  while (d > 1) {
    if (d % 2 === 0) {
      if (d !== 2) {
        console.put(d + ",");
      } else console.put(d);
    }
    d--;
  }
  console.log("");
  console.log("");
  // парні від N до 2 включно, через for
  for (let g = N; g > 1; --g) {
    if (g % 2 === 0) {
      if (g !== 2) {
        console.put(g + ",");
      } else console.put(g);
    }
  }
} else {
  alert(
    "Будь ласка, оновіть сторінку та введіть дані заново. Має бути ціле число більше або рівне нулю"
  );
}
