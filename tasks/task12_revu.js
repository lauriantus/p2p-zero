// Рибак Іван
let height = +prompt("Hight: ");
// колличество рядов елки
for ( let i = 0; i <= height; i++){
    for (let side = 0; side < height - i; side++) {
        console.put(" ");
    }
    for (let branch = 0; branch < 2*i-1; branch++){
        console.put("*");
    } 
    console.log( "  ");
}
for (let bottom = 0; bottom <= height - 2; bottom++){
    console.put(" ");
}
console.put("*");
