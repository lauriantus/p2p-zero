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

