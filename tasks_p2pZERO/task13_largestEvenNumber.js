let larger,
  lesser,
  total = 0,
  first = parseInt(prompt("Введіть перше число:")),
  last = parseInt(prompt("Введіть останнє число:"));

if (first >= last) {
  (larger = first), (lesser = last);
} else {
  (larger = last), (lesser = first);
}

for (lesser; lesser <= larger; lesser++) {
  total += lesser;

  if (lesser < larger) console.put(lesser + " + ");
  else console.put(lesser + " = ");
}
console.put(total);
