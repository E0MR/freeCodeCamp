/*

Letter Distance

Given two strings of equal length, return the sum of the shortest distances between each pair of characters.
  The input will only contain lowercase letters
  The alphabet is treated as a circle, so the distance between a and z is 1.

Tests:
  letterDistance("abc", "bcd") should return 3.
  letterDistance("abc", "xyz") should return 9.
  letterDistance("encrypt", "decrypt") should return 10.
  letterDistance("algorithm", "codeblock") should return 43.
  letterDistance("lobster", "penguin") should return 47.
  letterDistance("alligator", "crocodile") should return 55.

*/

function letterDistance(str1, str2) {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let distance = 0;

  for (let i = 0; i < str1.length; i++) {
    let dist1 = Math.abs(letters.indexOf(str1[i]) - letters.indexOf(str2[i]));
    let dist2 = letters.length - dist1;
    distance += dist1 < dist2 ? dist1 : dist2;
  }
  return distance;
}

console.log(letterDistance("abc", "bcd")); // 3.
console.log(letterDistance("abc", "xyz")); // 9.
console.log(letterDistance("encrypt", "decrypt")); // 10.
console.log(letterDistance("algorithm", "codeblock")); // 43.
console.log(letterDistance("lobster", "penguin")); // 47.
console.log(letterDistance("alligator", "crocodile")); // 55.
