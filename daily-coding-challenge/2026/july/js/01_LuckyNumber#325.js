/*

Lucky Number

Given a string of a person's first and last name, calculate their lucky number using the following rules:
  First and last names are separated by a space
  Find the vowel and consonant count for each name
  Multiply the smaller vowel and consonant counts by each other and then by the length of the smaller name
  Do the same for the two larger counts and the larger name
  Subtract the smaller value from the larger one to get their lucky number
  If the final value is zero (0), return 13.

Tests:
  getLuckyNumber("John Doe") should return 21.
  getLuckyNumber("Olivia Lewis") should return 52.
  getLuckyNumber("James Wilson") should return 18.
  getLuckyNumber("Elizabeth Hernandez") should return 81.
  getLuckyNumber("Mike Walker") should return 32.
  getLuckyNumber("Chloe Perez") should return 13.

*/

function getLuckyNumber(name) {
  let vowels = ["a", "e", "i", "o", "u"];
  let names = name.split(" ");
  let numbers = {
    vowelsNum1: 0,
    vowelsNum2: 0,
    constantsNum1: 0,
    constantsNum2: 0,
    shorterName: Math.min(names[0].length, names[1].length),
    tallerName: Math.max(names[0].length, names[1].length),
  };

  names.forEach((name, i) => {
    for (const char of name) {
      vowels.includes(char.toLowerCase())
        ? (numbers[`vowelsNum${i + 1}`] += 1)
        : (numbers[`constantsNum${i + 1}`] += 1);
    }
  });

  let {
    vowelsNum1,
    vowelsNum2,
    constantsNum1,
    constantsNum2,
    shorterName,
    tallerName,
  } = numbers;


  let luckyNumber =
    Math.max(vowelsNum1, vowelsNum2) *
      Math.max(constantsNum1, constantsNum2) *
      tallerName -
    Math.min(vowelsNum1, vowelsNum2) *
      Math.min(constantsNum1, constantsNum2) *
      shorterName;

  return luckyNumber ? luckyNumber : 13;
}

console.log(getLuckyNumber("John Doe")); // 21.
console.log(getLuckyNumber("Olivia Lewis")); // 52.
console.log(getLuckyNumber("James Wilson")); // 18.
console.log(getLuckyNumber("Elizabeth Hernandez")); // 81.
console.log(getLuckyNumber("Mike Walker")); // 32.
console.log(getLuckyNumber("Chloe Perez")); // 13.
