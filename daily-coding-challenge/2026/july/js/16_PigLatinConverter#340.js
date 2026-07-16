/*

Pig Latin Converter

Given a string, convert it to Pig Latin using the following rules:
  If a word begins with a vowel ("a", "e", "i", "o", or "u"), add "way" to the end. For example, "universe" converts to "universeway".
  If a word begins with one or more consonants, move them to the end and add "ay". For example, "hello" converts to "ellohay".
  Preserve the case of the first letter. For example, "Hello" converts to "Ellohay".

Tests:
  pigLatin("universe") should return "universeway".
  pigLatin("hello") should return "ellohay".
  pigLatin("hello universe") should return "ellohay universeway".
  pigLatin("Hello universe") should return "Ellohay universeway".
  pigLatin("Pig Latin is fun") should return "Igpay Atinlay isway unfay".
  pigLatin("The quick brown fox jumped over the lazy dog") should return "Ethay uickqay ownbray oxfay umpedjay overway ethay azylay ogday".

*/

function pigLatin(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let strings = str.split(" ");
  let result = [];

  strings.forEach((element) => {
    let isToUpperCase = element[0].toUpperCase() == element[0];

    if (vowels.includes(element[0])) {
      result.push(element.concat("way"));
    } else {
      for (const char of element) {
        if (!vowels.includes(element[0])) {
          element = element.concat(char).substring(1);
        }
      }
      let temp = isToUpperCase
        ? element[0].toUpperCase() +
          element.concat("ay").substring(1).toLowerCase()
        : element.concat("ay");
      result.push(temp);
    }
  });
  return result.join(" ");
}

console.log(pigLatin("universe")); // "universeway".
console.log(pigLatin("hello")); // "ellohay".
console.log(pigLatin("hello universe")); // "ellohay universeway".
console.log(pigLatin("Hello universe")); // "Ellohay universeway".
console.log(pigLatin("Pig Latin is fun")); // "Igpay Atinlay isway unfay".
console.log(pigLatin("The quick brown fox jumped over the lazy dog")); // "Ethay uickqay ownbray oxfay umpedjay overway ethay azylay ogday".
