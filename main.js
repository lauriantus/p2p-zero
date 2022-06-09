//test 1:function:
/*
function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}
console.log(multiply(4,7));
console.log(multiply(20,20));
console.log(multiply("Kova",5));
console.log(multiply(0.5,3));
*/

//test 2:events:
/*
document.querySelector("html").onclick = function () {
    alert("Ouch! Stop poking me!")
}
*/

//test 3:onclick for image(change):
/*
let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === "./images/firefox_png_1.png") {
        myImage.setAttribute('src', "./images/firefox_png_2.png");
    } else {
        myImage.setAttribute('src', "./images/firefox_png_1.png");
}
}*/

//test 4: auth
/*
let myButton = document.querySelector(".button"),
    myHeading = document.querySelector(".title_auth");

function setUserName() {
    let myName = prompt("Please, enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "JS is cool, " + myName;
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "JS is cool, " + storedName;
}

myButton.onclick = function () {
    setUserName();
}*/

//p2p-zero_lesson1:
/*
console.log("part 1: \nHello World!");
console.log("part 2 variant 1:\nHello \nWorld!");
console.log("part 2 variant 2:");
console.log("Hello");
console.log("World!")
function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}
console.log("part3 bariant 1:\n",sum(12892323, 454665768));
//or
console.log("part3 variant 2:\n", 12892323 + 454665768);
*/

//p2p-zero_lesson2
/*
let first=145,
    second = 243;
console.log("variant 1:");
console.log("before change valuse:\nfirst: " + first + "\nsecond: " + second);
let newFirst = second,
    newSecond = first;
first = newFirst;
second = newSecond;
console.log("after change values:\nfirst: " + first + "\nsecond: " + second);

console.log("variant 2:");
first=145,
second = 243;
console.log("before change valuse:\nfirst: " + first + "\nsecond: " + second);
let num1 = first;
first = second;
second = num1;
console.log("after change values:\nfirst: " + first + "\nsecond: " + second);

console.log("variant 3:");
first=145,
second = 243;
console.log("before change valuse:\nfirst: " + first + "\nsecond: " + second);
first =first + second;
second =first - second;
first =first - second;
console.log("after change values:\nfirst: " + first + "\nsecond: " + second);

*/
