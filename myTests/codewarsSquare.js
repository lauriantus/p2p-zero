function squareDigits(num) {
  num = String(num);
  let temp = [];
  for (let i = 0; i < num.length; i++) {
    temp += String(num[i] * num[i]);
  }
  return String(temp);
}
console.log(squareDigits(1458));
