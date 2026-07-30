/*

Contrast Rating 3

Given two arrays representing RGB values and a boolean indicating whether the text is large, return the WCAG contrast rating using the following method:

First, convert each RGB value to relative luminance:
  Divide each channel [R, G, B] by 255 to get a value between 0 and 1
  Apply the gamma correction formula to each channel:
    If the channel value is less than or equal to 0.04045: channel / 12.92
    Otherwise: ((channel + 0.055) / 1.055) ^ 2.4
  Calculate luminance: 0.2126 * R + 0.7152 * G + 0.0722 * B

  Then, calculate the contrast ratio by adding 0.05 to each luminance value, then dividing the lighter one by the darker one. The lighter one will always be the first argument.

Return the rating based on the contrast ratio using the following table:
  Rating	    Normal Text	        Large Text
  "AAA"	        7.0+	            4.5+
  "AA"	        4.5+	            3.0+
  "Fail"	    below 4.5	        below 3.0

Tests:
  getContrastRating([255, 255, 255], [0, 0, 0], false) should return "AAA".
  getContrastRating([215, 188, 188], [55, 55, 55], false) should return "AA".
  getContrastRating([143, 144, 210], [46, 47, 61], false) should return "Fail".
  getContrastRating([167, 167, 210], [53, 10, 53], true) should return "AAA".
  getContrastRating([135, 147, 155], [60, 70, 90], true) should return "AA".
  getContrastRating([125, 210, 195], [105, 130, 90], true) should return "Fail".

*/

function getContrastRating(rgb1, rgb2, isLargeText) {
  let rgbChannel1 = rgb1.map((value) => {
    let val = value / 255;
    return val <= 0.04045 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });
  let rgbChannel2 = rgb2.map((value) => {
    let val = value / 255;
    return val <= 0.04045 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });
  let lighterLuminance =
    0.2126 * rgbChannel1[0] +
    0.7152 * rgbChannel1[1] +
    0.0722 * rgbChannel1[2] +
    0.05;
  let darkerLuminance =
    0.2126 * rgbChannel2[0] +
    0.7152 * rgbChannel2[1] +
    0.0722 * rgbChannel2[2] +
    0.05;

  let contrastRatio = lighterLuminance / darkerLuminance;

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

console.log(getContrastRating([255, 255, 255], [0, 0, 0], false)); // "AAA".
console.log(getContrastRating([215, 188, 188], [55, 55, 55], false)); // "AA".
console.log(getContrastRating([143, 144, 210], [46, 47, 61], false)); // "Fail".
console.log(getContrastRating([167, 167, 210], [53, 10, 53], true)); // "AAA".
console.log(getContrastRating([135, 147, 155], [60, 70, 90], true)); // "AA".
console.log(getContrastRating([125, 210, 195], [105, 130, 90], true)); // "Fail".
