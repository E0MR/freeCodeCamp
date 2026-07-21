/*

Word Blender

Given two words, return a new word by combining the first half of the first word with the second half of the second word.
  For odd-length words, the first half is the shorter half.

Tests:
  blendWords("turtle", "toucan") should return "turcan".
  blendWords("chipmunk", "flamingo") should return "chipingo".
  blendWords("falcon", "pelican") should return "falican".
  blendWords("hyena", "iguana") should return "hyana".
  blendWords("scorpion", "gorilla") should return "scorilla".
  blendWords("platypus", "wolverine") should return "platerine".

*/

function blendWords(word1, word2) {
  let str1 = word1.slice(0, Math.floor(word1.length / 2));
  let str2 = word2.slice(Math.floor(word2.length / 2));
  return str1 + str2; // `${str1}${str2}`
}

console.log(blendWords("turtle", "toucan")); // "turcan".
console.log(blendWords("chipmunk", "flamingo")); // "chipingo".
console.log(blendWords("falcon", "pelican")); // "falican".
console.log(blendWords("hyena", "iguana")); // "hyana".
console.log(blendWords("scorpion", "gorilla")); // "scorilla".
console.log(blendWords("platypus", "wolverine")); // "platerine".
