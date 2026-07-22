/*

Five Dice

Given an array of five dice with values 1-6, return the best possible hand.

Here are the hands ranked lowest to highest:
  Hand	                Description
  "no pair"	            No pair or better
  "pair"	            Two dice with the same value
  "two pair"	        Two different pairs
  "three of a kind"	    Three dice with the same value
  "small straight"	    Four consecutive values
  "large straight"	    Five consecutive values
  "full house"	        Three of a kind and a pair
  "four of a kind"	    Four dice with the same value
  "five of a kind"	    All five dice with the same value

Tests:
  fiveDice([1, 1, 1, 1, 1]) should return "five of a kind".
  fiveDice([5, 5, 5, 6, 5]) should return "four of a kind".
  fiveDice([2, 5, 6, 4, 3]) should return "large straight".
  fiveDice([4, 3, 3, 3, 1]) should return "three of a kind".
  fiveDice([4, 6, 2, 6, 5]) should return "pair".
  fiveDice([1, 4, 5, 6, 2]) should return "no pair".
  fiveDice([1, 3, 4, 6, 2]) should return "small straight".
  fiveDice([2, 2, 5, 2, 5]) should return "full house".
  fiveDice([6, 4, 5, 6, 4]) should return "two pair".

*/

function fiveDice(dice) {
  let frequencies = Array(7).fill(0);
  for (let i = 0; i < dice.length; i++) {
    frequencies[dice[i]]++;
  }

  if (frequencies.includes(5)) return "five of a kind";
  if (frequencies.includes(4)) return "four of a kind";
  if (frequencies.includes(3) && frequencies.includes(2)) return "full house";
  if (frequencies.join("").includes("11111")) return "large straight";
  if (/[1-2]{4}/.test(frequencies.join(""))) return "small straight"; // what if 1121 || 2111 || 1211 || 1112 this <frequencies.join("").includes("1111")> will not work so we will use this /(1111|2111|1211|1121|1112)/
  if (frequencies.includes(3)) return "three of a kind";
  if (frequencies.indexOf(2) != frequencies.lastIndexOf(2)) return "two pair";
  if (frequencies.includes(2)) return "pair";

  return "no pair";
}

console.log(fiveDice([1, 1, 1, 1, 1])); // "five of a kind".
console.log(fiveDice([5, 5, 5, 6, 5])); // "four of a kind".
console.log(fiveDice([2, 5, 6, 4, 3])); // "large straight".
console.log(fiveDice([4, 3, 3, 3, 1])); // "three of a kind".
console.log(fiveDice([4, 6, 2, 6, 5])); // "pair".
console.log(fiveDice([1, 4, 5, 6, 2])); // "no pair".
console.log(fiveDice([1, 3, 4, 6, 2])); // "small straight".
console.log(fiveDice([2, 2, 5, 2, 5])); // "full house".
console.log(fiveDice([6, 4, 5, 6, 4])); // "two pair".
