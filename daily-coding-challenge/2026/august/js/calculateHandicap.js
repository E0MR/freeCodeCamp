/*

Golf Handicap Calculator

Given an array of golf scores and a corresponding array of course par values, return the golfer's handicap index using the following method:
  Calculate the differential for each round by subtracting the par from the score, then return the average of all differentials rounded to one decimal place.

Tests:
  calculateHandicap([72, 72, 72], [72, 72, 72]) should return 0.
  calculateHandicap([80, 76, 78, 78], [72, 72, 72, 72]) should return 6.
  calculateHandicap([42, 45, 46, 44], [36, 36, 36, 36]) should return 8.3.
  calculateHandicap([85, 80, 76, 79, 82], [72, 72, 72, 71, 71]) should return 8.8.
  calculateHandicap([41, 50, 48, 52, 46, 49], [35, 37, 35, 37, 35, 37]) should return 11.7.

*/

function calculateHandicap(scores, pars) {
  return Number(
    (
      scores
        .map((score, index) => score - pars[index])
        .reduce((sum, score) => {
          return sum + score;
        }, 0) / scores.length
    ).toFixed(1),
  );
}

console.log(calculateHandicap([72, 72, 72], [72, 72, 72])); // 0
console.log(calculateHandicap([80, 76, 78, 78], [72, 72, 72, 72])); // 6
console.log(calculateHandicap([42, 45, 46, 44], [36, 36, 36, 36])); // 8.3
console.log(calculateHandicap([85, 80, 76, 79, 82], [72, 72, 72, 71, 71])); // 8.8
console.log(
  calculateHandicap([41, 50, 48, 52, 46, 49], [35, 37, 35, 37, 35, 37]),
); // 11.7
