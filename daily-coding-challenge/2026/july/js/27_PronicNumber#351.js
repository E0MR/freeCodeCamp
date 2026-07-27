/*

Pronic Number

Given a number, determine whether it is a pronic number.

A pronic number is the product of two consecutive integers. For example, 6 is pronic because 2 * 3 = 6.

Tests:
  isPronic(6) should return true.
  isPronic(15) should return false.
  isPronic(12) should return true.
  isPronic(132) should return true.
  isPronic(80) should return false.
  isPronic(0) should return true.

*/

function isPronic(n) {
  if (n < 0) return false;

  let root = Math.ceil(Math.sqrt(n)); // floor

  return root * (root - 1) === n; // + 1
}

console.log(isPronic(6)); // true.
console.log(isPronic(15)); // false.
console.log(isPronic(12)); // true.
console.log(isPronic(132)); // true.
console.log(isPronic(80)); // false.
console.log(isPronic(0)); // true.
