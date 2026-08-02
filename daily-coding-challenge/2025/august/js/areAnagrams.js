/*

Anagram Checker

Given two strings, determine if they are anagrams of each other (contain the same characters in any order).
  Ignore casing and white space.

Tests:
  areAnagrams("listen", "silent") should return true.
  areAnagrams("School master", "The classroom") should return true.
  areAnagrams("A gentleman", "Elegant man") should return true.
  areAnagrams("Hello", "World") should return false.
  areAnagrams("apple", "banana") should return false.
  areAnagrams("cat", "dog") should return false.

*/

function areAnagrams(str1, str2) {
  const clean1 = str1.replace(/\s+/g, "").toLowerCase();
  const clean2 = str2.replace(/\s+/g, "").toLowerCase();

  if (clean1.length !== clean2.length) return false;

  return clean1
    .split("")
    .every((char) => clean1.split(char).length === clean2.split(char).length);
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("School master", "The classroom")); // true
console.log(areAnagrams("A gentleman", "Elegant man")); // true
console.log(areAnagrams("Hello", "World")); // false
console.log(areAnagrams("apple", "banana")); // false
console.log(areAnagrams("cat", "dog")); // false

/*

function areAnagrams(str1, str2) {
  const clean1 = str1.replace(/\s+/g, "").toLowerCase();
  const clean2 = str2.replace(/\s+/g, "").toLowerCase();

  if (clean1.length !== clean2.length) return false;

  return (
    clean1.split("").every((char) => 
      clean1.split(char).length === clean2.split(char).length
    ) &&
    clean2.split("").every((char) => 
      clean2.split(char).length === clean1.split(char).length
    )
  );
}

*/
