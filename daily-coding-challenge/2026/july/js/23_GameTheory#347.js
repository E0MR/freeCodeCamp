/*

Game Theory

Given two equal length strings representing two players' strategies for a game, return the scores as an array [player1, player2].
  The given strings will only contain one of two letters: "C" (cooperate) or "D" (defect).
  Each character represents one round, scored as follows:
    If both players cooperate, each scores 3.
    If both players defect, each scores 1.
    If one player defects and the other cooperates, the defector scores 5 and the cooperator scores 0.

Tests:
  playGame("CCCC", "CCCC") should return [12, 12].
  playGame("DDDD", "DDDD") should return [4, 4].
  playGame("CCDD", "CDDD") should return [5, 10].
  playGame("CCCDCDCCCDDC", "CCDDCDCDDCCD") should return [24, 34].
  playGame("DDCCDDDDCDDCDDDCDD", "CCDCCCDCCCDCCCCDCC") should return [66, 21].

*/

function playGame(p1, p2) {
  let p1Score = 0;
  let p2Score = 0;

  for (let i = 0; i < p1.length; i++) {
    if (p1[i] == p2[i]) {
      if (p1[i] == "C") {
        p1Score += 3;
        p2Score += 3;
      } else {
        p1Score += 1;
        p2Score += 1;
      }
    } else {
      if (p1[i] == "C") {
        p1Score += 0;
        p2Score += 5;
      } else {
        p1Score += 5;
        p2Score += 0;
      }
    }
  }
  return [p1Score, p2Score];
}

console.log(playGame("CCCC", "CCCC")); // [12, 12].
console.log(playGame("DDDD", "DDDD")); // [4, 4].
console.log(playGame("CCDD", "CDDD")); // [5, 10].
console.log(playGame("CCCDCDCCCDDC", "CCDDCDCDDCCD")); // [24, 34].
console.log(playGame("DDCCDDDDCDDCDDDCDD", "CCDCCCDCCCDCCCCDCC")); // [66, 21].
