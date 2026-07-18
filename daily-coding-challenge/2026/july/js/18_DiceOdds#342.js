/*

Dice Odds

Given a number of six-sided dice to roll and a target sum, return the odds of rolling that sum as a string in the format "1 in X".
  The number of dice will be between 1 and 6.
  The target sum is always achievable with the given number of dice.
  Round "X" to the nearest whole number.

Tests:
  getOdds(1, 5) should return "1 in 6".
  getOdds(2, 4) should return "1 in 12".
  getOdds(3, 10) should return "1 in 8".
  getOdds(4, 7) should return "1 in 65".
  getOdds(5, 26) should return "1 in 111".
  getOdds(6, 35) should return "1 in 7776".

*/

function getOdds(dice, target) {
  const totalOutcomes = Math.pow(6, dice);

  function countWays(diceLeft, currentSum) {
    if (diceLeft === 0) {
      return currentSum === target ? 1 : 0;
    }

    let ways = 0;
    for (let face = 1; face <= 6; face++) {
      ways += countWays(diceLeft - 1, currentSum + face);
    }
    return ways;
  }

  const successfulWays = countWays(dice, 0);

  const x = Math.round(totalOutcomes / successfulWays);

  return `1 in ${x}`;
}

console.log(getOdds(1, 5)); // "1 in 6".
console.log(getOdds(2, 4)); // "1 in 12".
console.log(getOdds(3, 10)); // "1 in 8".
console.log(getOdds(4, 7)); // "1 in 65".
console.log(getOdds(5, 26)); // "1 in 111".
console.log(getOdds(6, 35)); // "1 in 7776".
