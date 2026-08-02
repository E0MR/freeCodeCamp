/*

Sum of Squares

Given a positive integer up to 1,000, return the sum of all the integers squared from 1 up to the number.

Tests:
  sumOfSquares(5) should return 55.
  sumOfSquares(10) should return 385.
  sumOfSquares(25) should return 5525.
  sumOfSquares(500) should return 41791750.
  sumOfSquares(1000) should return 333833500.

*/

function sumOfSquares(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i ** 2; // i * i
  }
  return result;
}

console.log(sumOfSquares(5)); // 55
console.log(sumOfSquares(10)); // 385
console.log(sumOfSquares(25)); // 5525
console.log(sumOfSquares(500)); // 41791750
console.log(sumOfSquares(1000)); // 333833500
