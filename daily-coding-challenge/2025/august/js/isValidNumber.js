/*

Base Check

Given a string representing a number, and an integer base from 2 to 36, determine whether the number is valid in that base.
  The string may contain integers, and uppercase or lowercase characters.
  The check should be case-insensitive.
  The base can be any number 2-36.
  A number is valid if every character is a valid digit in the given base.
  Example of valid digits for bases:
    Base 2: 0-1
    Base 8: 0-7
    Base 10: 0-9
    Base 16: 0-9 and A-F
    Base 36: 0-9 and A-Z

Tests:
  isValidNumber("10101", 2) should return true.
  isValidNumber("10201", 2) should return false.
  isValidNumber("76543210", 8) should return true.
  isValidNumber("9876543210", 8) should return false.
  isValidNumber("9876543210", 10) should return true.
  isValidNumber("ABC", 10) should return false.
  isValidNumber("ABC", 16) should return true.
  isValidNumber("Z", 36) should return true.
  isValidNumber("ABC", 20) should return true.
  isValidNumber("4B4BA9", 16) should return true.
  isValidNumber("5G3F8F", 16) should return false.
  isValidNumber("5G3F8F", 17) should return true.
  isValidNumber("abc", 10) should return false.
  isValidNumber("abc", 16) should return true.
  isValidNumber("AbC", 16) should return true.
  isValidNumber("z", 36) should return true.

*/

function isValidNumber(n, base) {
  if (base < 2 || base > 36) return false;

  let validChars = "0123456789abcdefghijklmnopqrstuvwxyz";

  let allowed = validChars.slice(0, base).split(""); // new Set(validChars.slice(0, base));

  for (const char of n) {
    if (!allowed.includes(char.toLowerCase())) return false; // (!allowed.has(char.toLowerCase())
  }

  return true;
}

console.log(isValidNumber("10101", 2)); // true
console.log(isValidNumber("10201", 2)); // false
console.log(isValidNumber("76543210", 8)); // true
console.log(isValidNumber("9876543210", 8)); // false
console.log(isValidNumber("9876543210", 10)); // true
console.log(isValidNumber("ABC", 10)); // false
console.log(isValidNumber("ABC", 16)); // true
console.log(isValidNumber("Z", 36)); // true
console.log(isValidNumber("ABC", 20)); // true
console.log(isValidNumber("4B4BA9", 16)); // true
console.log(isValidNumber("5G3F8F", 16)); // false
console.log(isValidNumber("5G3F8F", 17)); // true
console.log(isValidNumber("abc", 10)); // false
console.log(isValidNumber("abc", 16)); // true
console.log(isValidNumber("AbC", 16)); // true
console.log(isValidNumber("z", 36)); // true
