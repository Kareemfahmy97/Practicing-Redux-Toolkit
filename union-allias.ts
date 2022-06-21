type CombineDescriptor = "text" | "number";

function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: CombineDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(30, 60, "number");
console.log(combineAges);
const combine3ak = combine("30", "851.5", "text");

console.log(combine3ak);
const combineName = combine("max", "anna", "text");
console.log(combineName);
