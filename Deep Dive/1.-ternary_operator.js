left_operand = 2; // left operand
right_operand = 3; // right operand
operator = "*"; // target operator
let ans = NaN;
let all_oprators = ["+", "-", "*", "/"];
ans =
  operator === "+"
    ? left_operand + right_operand
    : operator === "-"
    ? left_operand - right_operand
    : operator === "*"
    ? left_operand * right_operand
    : operator === "/"
    ? left_operand / right_operand
    : NaN;
console.log(`ans value is ${ans}`);
