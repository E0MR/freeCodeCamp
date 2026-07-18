/*

Tally Counter

Given a string of tally marks, return the total count represented.
  Each pipe "|" represents one count.
  Every fifth mark is represented as a forward slash "/", completing a group of five ("||||/").
  Groups are separated by a space.

Tests:
  getTallyCount("||||") should return 4.
  getTallyCount("||||/") should return 5.
  getTallyCount("||||/ |||") should return 8.
  getTallyCount("||||/ ||||/ ||||/ ||") should return 17.
  getTallyCount("||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ |") should return 41.

*/

function getTallyCount(str) {
  return str.replaceAll(" ", "").length;
}

console.log(getTallyCount("||||")); // 4
console.log(getTallyCount("||||/")); // 5
console.log(getTallyCount("||||/ |||")); // 8
console.log(getTallyCount("||||/ ||||/ ||||/ ||")); // 17
console.log(getTallyCount("||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ |")); // 41
