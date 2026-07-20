/*

Nearest Multiple

Given two integers, round the first to the nearest multiple of the second.

Tests:
  roundToNearestMultiple(5, 3) should return 6.
  roundToNearestMultiple(17, 4) should return 16.
  roundToNearestMultiple(43, 5) should return 45.
  roundToNearestMultiple(38, 11) should return 33.
  roundToNearestMultiple(93, 12) should return 96.

*/

function roundToNearestMultiple(num, multiple) {
  let currentMultiple = multiple;
  let diff = Math.abs(multiple - num);
  while (true) {
    currentMultiple += multiple;
    if (Math.abs(currentMultiple - num) > diff) {
      break;
    } else {
      diff = Math.abs(currentMultiple - num);
    }
  }
  return currentMultiple - multiple;
}

console.log(roundToNearestMultiple(5, 3)); // 6.
console.log(roundToNearestMultiple(17, 4)); // 16.
console.log(roundToNearestMultiple(43, 5)); // 45.
console.log(roundToNearestMultiple(38, 11)); // 33.
console.log(roundToNearestMultiple(93, 12)); // 96.
