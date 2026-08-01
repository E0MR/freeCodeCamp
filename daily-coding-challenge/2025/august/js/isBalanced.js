/*

Vowel Balance

Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.
  The string can contain any characters.
  The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
  If there's an odd number of characters in the string, ignore the center character.

Tests:
  isBalanced("racecar") should return true.
  isBalanced("Lorem Ipsum") should return true.
  isBalanced("Kitty Ipsum") should return false.
  isBalanced("string") should return false.
  isBalanced(" ") should return true.
  isBalanced("abcdefghijklmnopqrstuvwxyz") should return false.
  isBalanced("123A#b!E&*456-o.U") should return true.

*/

function isBalanced(s) {
  let vowels = ["a", "e", "i", "o", "u"];
  let firstHalf = s.slice(0, Math.floor(s.length / 2));
  let secondHalf = s.slice(-Math.floor(s.length / 2));
  let firstHalfVowelsCount = 0;
  let secondHalfVowelsCount = 0;

  for (let i = 0; i < firstHalf.length; i++) {
    if (vowels.includes(firstHalf[i].toLowerCase())) firstHalfVowelsCount++;
    if (vowels.includes(secondHalf[i].toLowerCase())) secondHalfVowelsCount++;
  }
  return firstHalfVowelsCount == secondHalfVowelsCount;
}

console.log(isBalanced("racecar")); // true
console.log(isBalanced("Lorem Ipsum")); // true
console.log(isBalanced("Kitty Ipsum")); // false
console.log(isBalanced("string")); // false
console.log(isBalanced(" ")); // true
console.log(isBalanced("abcdefghijklmnopqrstuvwxyz")); // false
console.log(isBalanced("123A#b!E&*456-o.U")); // true
