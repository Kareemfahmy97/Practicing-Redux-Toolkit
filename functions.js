"use strict";
function adzd(a, b) {
    return a + b;
}
/// call back function where you can pass a literal type like
function itisCallBack(n1, n2, c) {
    const result = n1 + n2;
    c(result);
}
itisCallBack(10, 20, (re) => {
    console.log(re);
    return re;
});
function printResult(number) {
    return console.log("result equls = " + number);
}
printResult(add(5, 9));
/// function types
let combineFunction;
combineFunction = add;
console.log(combineFunction(5, 2));
