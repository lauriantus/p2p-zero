// //test 1:function:
// function multiply(num1,num2) {
//   var result = num1 * num2;
//   return result;
// }
// console.log(multiply(4,7));
// console.log(multiply(20,20));
// console.log(multiply("Kova",5));
// console.log(multiply(0.5,3));

// //test 2:events:
// document.querySelector("html").onclick = function () {
//     alert("Ouch! Stop poking me!")
// }

// //test 3:onclick for image(change):
// let myImage = document.querySelector('img');

// myImage.onclick = function () {
//     let mySrc = myImage.getAttribute('src');
//     if (mySrc === "./images/firefox_png_1.png") {
//         myImage.setAttribute('src', "./images/firefox_png_2.png");
//     } else {
//         myImage.setAttribute('src', "./images/firefox_png_1.png");
// }
// }

// //test 4: auth
// let myButton = document.querySelector(".button"),
//     myHeading = document.querySelector(".title_auth");

// function setUserName() {
//     let myName = prompt("Please, enter your name.");
//     localStorage.setItem("name", myName);
//     myHeading.textContent = "JS is cool, " + myName;
// }
// if (!localStorage.getItem('name')) {
//     setUserName();
// } else {
//     let storedName = localStorage.getItem("name");
//     myHeading.textContent = "JS is cool, " + storedName;
// }

// myButton.onclick = function () {
//     setUserName();
// }

function operation(f, v) {
  let result = [],
    i = 0;
  for (i; i != v.length; i++) {
    result[i] = f(v[i]);
  }
  return result;
}

let f = function (x) {
  return x * x * x;
};

var numbers = [0, 1, 2, 5, 10];
var cube = operation(f, numbers);
console.log(cube);
