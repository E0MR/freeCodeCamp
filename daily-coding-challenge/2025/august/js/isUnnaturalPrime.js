/*

Unnatural Prime

Given an integer, determine if that number is a prime number or a negative prime number.
  A prime number is a positive integer greater than 1 that is only divisible by 1 and itself.
  A negative prime number is the negative version of a positive prime number.
  1 and 0 are not considered prime numbers.

Tests:
  isUnnaturalPrime(1) should return false.
  isUnnaturalPrime(-1) should return false.
  isUnnaturalPrime(19) should return true.
  isUnnaturalPrime(-23) should return true.
  isUnnaturalPrime(0) should return false.
  isUnnaturalPrime(97) should return true.
  isUnnaturalPrime(-61) should return true.
  isUnnaturalPrime(99) should return false.
  isUnnaturalPrime(-44) should return false.

*/

function isUnnaturalPrime(n) {
  const absN = Math.abs(n);

  if (absN <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(absN); i++) {
    if (absN % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isUnnaturalPrime(1)); // false
console.log(isUnnaturalPrime(-1)); // false
console.log(isUnnaturalPrime(19)); // true
console.log(isUnnaturalPrime(-23)); // true
console.log(isUnnaturalPrime(0)); // false
console.log(isUnnaturalPrime(97)); // true
console.log(isUnnaturalPrime(-61)); // true
console.log(isUnnaturalPrime(99)); // false
console.log(isUnnaturalPrime(-44)); // false
