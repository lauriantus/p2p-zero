let cards = [0, 0, 0, 100, 0, 0, 0, 0, 0, 0];
// active card

let numberCard = +prompt("Введіть номер картки для транзакції: ", "");
while (numberCard < 0 || numberCard >= cards.length) {
  numberCard = +prompt(
    "Номер картки від 0 до " + numberCard + ". .Повторіть введення: ",
    ""
  );
}
console.log("Поточна картка: " + numberCard);

//  the transaction amount

let minPayment = -1000,
  maxPayment = 1000,
  payment = +prompt("Введіть суму транзакції:", "");
while (payment < minPayment || payment > maxPayment) {
  payment = +prompt(
    "Неправильно введена сума(див. деталі в консолі). Повторіть введення:",
    ""
  );
}
console.log("Сума транзакції: " + payment);

//  withdraw/deposit and list accounts

cards[numberCard] += payment;
console.put("Стан рахунків: ");
for (let i = 0; i < cards.length; i++) {
  if (i === cards.length - 1) {
    console.put(cards[i] + "\n");
  } else {
    console.put(cards[i] + ", ");
  }
}

// total balance
let total = 0;
for (let i = 0; i < cards.length; i++) {
  total += cards[i];
}
console.log("total: " + total);
