function adzd(a: number, b: number) {
  return a + b;
}

/// call back function where you can pass a literal type like

function itisCallBack(n1: number, n2: number, c: (n3: number) => void) {
  const result = n1 + n2;
  c(result);
}

itisCallBack(10, 20, (re) => {
  console.log(re);
  return re;
});

function printResult(number: number) {
  return console.log("result equls = " + number);
}
printResult(add(5, 9));

/// function types
let combineFunction: (num1: number, num2: number) => number;

combineFunction = add;
console.log(combineFunction(5, 2));
