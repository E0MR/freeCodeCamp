/*

Golden Ratio

Given two numbers, determine if their ratio approximates the golden ratio.
  Use a golden ratio of 1.618
  Allow a tolerance of 0.01

Tests:
  isGoldenRatio(21, 34) should return true.
  isGoldenRatio(15, 20) should return false.
  isGoldenRatio(8, 13) should return true.
  isGoldenRatio(10, 16) should return false.
  isGoldenRatio(1618, 1000) should return true.
  isGoldenRatio(88, 55) should return false.

*/

function isGoldenRatio(a, b) {
  return 1.618 - Math.max(a, b) / Math.min(a, b) <= 0.01;
}

console.log(isGoldenRatio(21, 34)); // true.
console.log(isGoldenRatio(15, 20)); // false.
console.log(isGoldenRatio(8, 13)); // true.
console.log(isGoldenRatio(10, 16)); // false.
console.log(isGoldenRatio(1618, 1000)); // true.
console.log(isGoldenRatio(88, 55)); // false.
