/*

Kaprekar's Routine

Given a 4-digit number, return the number of times you need to apply Kaprekar's routine until reaching 6174.

Kaprekar's routine works as follows:
  Arrange the digits in descending order to form the largest number
  Arrange the digits in ascending order to form the smallest number (pad with leading zeros if necessary)
  Subtract the smaller from the larger
  Repeat with the new number

Tests:
  kaprekar(1234) should return 3.
  kaprekar(2025) should return 6.
  kaprekar(7173) should return 4.
  kaprekar(3164) should return 7.
  kaprekar(8082) should return 2.

*/

function kaprekar(n) {
  let times = 0;
  while (n != 6174) {
    let digits = String(n).padStart(4, "0").split("").map(Number);
    let min = Number(digits.sort().join(""));
    let max = Number(digits.reverse().join(""));
    n = max - min;
    times++;
  }
  return times;
}

console.log(kaprekar(1234)); // 3.
console.log(kaprekar(2025)); // 6.
console.log(kaprekar(7173)); // 4.
console.log(kaprekar(3164)); // 7.
console.log(kaprekar(8082)); // 2.
