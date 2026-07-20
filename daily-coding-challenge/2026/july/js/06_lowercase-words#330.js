/*

lowercase words

Given a string, return only the words that are entirely lowercase, in their original order and with a space between each word.

Tests:
  getLowercaseWords("hello GOOD world") should return "hello world".
  getLowercaseWords("these are all lowercase") should return "these are all lowercase".
  getLowercaseWords("less is NoT more") should return "less is more".
  getLowercaseWords("DonT eat pizza every OTHER day") should return "eat pizza every day".
  getLowercaseWords("the Super quick AND snEaky brown fox Leapt anD jumped over aNd AROUND the lazy SloW dog") should return "the quick brown fox jumped over the lazy dog".

*/

function getLowercaseWords(str) {
  let strArr = str.split(" ");
  strArr = strArr.filter((s) => {
    return s.toLowerCase() == s ? s : "";
  });

  return strArr.join(" ");
}

console.log(getLowercaseWords("hello GOOD world")); // "hello world".
console.log(getLowercaseWords("these are all lowercase")); // "these are all lowercase".
console.log(getLowercaseWords("less is NoT more")); // "less is more".
console.log(getLowercaseWords("DonT eat pizza every OTHER day")); // "eat pizza every day".
console.log(
  getLowercaseWords(
    "the Super quick AND snEaky brown fox Leapt anD jumped over aNd AROUND the lazy SloW dog",
  ),
); // "the quick brown fox jumped over the lazy dog".
