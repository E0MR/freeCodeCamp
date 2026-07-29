/*

Contrast Rating 2

Given two relative luminance values and a boolean indicating whether the text is large, return the WCAG contrast rating using the following method:

Calculate the contrast ratio by adding 0.05 to each luminance value, then dividing the lighter one by the darker one. The lighter one will always be the first argument.

Return the rating based on the contrast ratio using the following table:
  Rating	    Normal Text	        Large Text
  "AAA"	        7.0+	            4.5+
  "AA"	        4.5+	            3.0+
  "Fail"	    below 4.5	        below 3.0

Tests:
  getContrastRating(1.0, 0.0, false) should return "AAA".
  getContrastRating(0.9015, 0.1364, false) should return "AA".
  getContrastRating(0.8965, 0.1628, false) should return "Fail".
  getContrastRating(0.7469, 0.0957, true) should return "AAA".
  getContrastRating(0.7489, 0.2018, true) should return "AA".
  getContrastRating(0.6571, 0.1974, true) should return "Fail".

*/

function getContrastRating(l1, l2, isLargeText) {
  let lighter = l1 + 0.05;
  let darker = l2 + 0.05;
  let contrastRatio = lighter / darker;

  if (isLargeText) {
    if (contrastRatio >= 4.5) return "AAA";
    if (contrastRatio >= 3) return "AA";
    if (contrastRatio < 3) return "Fail";
  } else {
    if (contrastRatio >= 7) return "AAA";
    if (contrastRatio >= 4.5) return "AA";
    if (contrastRatio < 4.5) return "Fail";
  }
}

console.log(getContrastRating(1.0, 0.0, false)); // "AAA".
console.log(getContrastRating(0.9015, 0.1364, false)); // "AA".
console.log(getContrastRating(0.8965, 0.1628, false)); // "Fail".
console.log(getContrastRating(0.7469, 0.0957, true)); // "AAA".
console.log(getContrastRating(0.7489, 0.2018, true)); // "AA".
console.log(getContrastRating(0.6571, 0.1974, true)); // "Fail".
