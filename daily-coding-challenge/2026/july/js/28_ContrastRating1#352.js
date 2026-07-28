/*

Contrast Rating 1

Given a contrast ratio and a boolean indicating whether the text is large, return the WCAG rating using the following table:
  Rating	      Normal Text	        Large Text
  "AAA"	        7.0+	              4.5+
  "AA"	        4.5+	              3.0+
  "Fail"	      below 4.5	          below 3.0

Tests:
  getContrastRating("7.5", false) should return "AAA".
  getContrastRating("4.8", false) should return "AA".
  getContrastRating("4.2", false) should return "Fail".
  getContrastRating("4.5", true) should return "AAA".
  getContrastRating("3.0", true) should return "AA".
  getContrastRating("2.7", false) should return "Fail".

*/

function getContrastRating(ratio, isLargeText) {
  let ratioNum = Number(ratio);
  if (isLargeText) {
    if (ratioNum >= 4.5) return "AAA";
    if (ratioNum >= 3) return "AA";
    if (ratioNum < 3) return "Fail";
  } else {
    if (ratioNum >= 7) return "AAA";
    if (ratioNum >= 4.5) return "AA";
    if (ratioNum < 4.5) return "Fail";
  }
}

console.log(getContrastRating("7.5", false)); // "AAA".
console.log(getContrastRating("4.8", false)); // "AA".
console.log(getContrastRating("4.2", false)); // "Fail".
console.log(getContrastRating("4.5", true)); // "AAA".
console.log(getContrastRating("3.0", true)); // "AA".
console.log(getContrastRating("2.7", false)); // "Fail".
