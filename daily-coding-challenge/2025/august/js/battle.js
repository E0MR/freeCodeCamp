/*

Character Battle

Given two strings representing your army and an opposing army, each character from your army battles the character at the same position from the opposing army using the following rules:
  Characters a-z have a strength of 1-26, respectively.
  Characters A-Z have a strength of 27-52, respectively.
  Digits 0-9 have a strength of their face value.
  All other characters have a value of zero.
  Each character can only fight one battle.

For each battle, the stronger character wins. The army with more victories, wins the war. Return the following values:
  "Opponent retreated" if your army has more characters than the opposing army.
  "We retreated" if the opposing army has more characters than yours.
  "We won" if your army won more battles.
  "We lost" if the opposing army won more battles.
  "It was a tie" if both armies won the same number of battles.

Tests:
  battle("Hello", "World") should return "We lost".
  battle("pizza", "salad") should return "We won".
  battle("C@T5", "D0G$") should return "We won".
  battle("kn!ght", "orc") should return "Opponent retreated".
  battle("PC", "Mac") should return "We retreated".
  battle("Wizards", "Dragons") should return "It was a tie".
  battle("Mr. Smith", "Dr. Jones") should return "It was a tie".

*/

function battle(myArmy, opposingArmy) {
  let alphabet = "0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (myArmy.length > opposingArmy.length) return "Opponent retreated";
  else if (myArmy.length < opposingArmy.length) return "We retreated";
  else {
    let me = 0;
    let opposing = 0;

    myArmy.split("").forEach((char, index) => {
      let meScore =
        alphabet.indexOf(char) != -1
          ? alphabet.indexOf(char)
          : parseInt(char) >= 0
            ? parseInt(char)
            : 0;

      let opposingScore =
        alphabet.indexOf(opposingArmy[index]) != -1
          ? alphabet.indexOf(opposingArmy[index])
          : parseInt(opposingArmy[index]) >= 0
            ? parseInt(opposingArmy[index])
            : 0;

      if (meScore > opposingScore) me++;
      else if (meScore < opposingScore) opposing++;
    });

    if (me > opposing) return "We won";
    else if (me < opposing) return "We lost";
    else return "It was a tie";
  }
}

console.log(battle("Hello", "World")); // "We lost"
console.log(battle("pizza", "salad")); // "We won"
console.log(battle("C@T5", "D0G$")); // "We won"
console.log(battle("kn!ght", "orc")); // "Opponent retreated"
console.log(battle("PC", "Mac")); // "We retreated"
console.log(battle("Wizards", "Dragons")); // "It was a tie"
console.log(battle("Mr. Smith", "Dr. Jones")); // "It was a tie"

/*

function battle(myArmy, opposingArmy) {
  if (myArmy.length > opposingArmy.length) return "Opponent retreated";
  if (myArmy.length < opposingArmy.length) return "We retreated";

  function getStrength(char) {
    const code = char.charCodeAt(0);
    // a-z: 97-122 -> القوة 1-26
    if (code >= 97 && code <= 122) return code - 96;
    // A-Z: 65-90 -> القوة 27-52
    if (code >= 65 && code <= 90) return code - 64 + 26;
    // 0-9: 48-57 -> القوة حسب القيمة الفعلية
    if (code >= 48 && code <= 57) return code - 48;
    return 0;
  }

  let me = 0;
  let opposing = 0;

  for (let i = 0; i < myArmy.length; i++) {
    let meScore = getStrength(myArmy[i]);
    let opposingScore = getStrength(opposingArmy[i]);

    if (meScore > opposingScore) me++;
    else if (meScore < opposingScore) opposing++;
  }

  if (me > opposing) return "We won";
  if (opposing > me) return "We lost";
  return "It was a tie";
}

function battle(myArmy, opposingArmy) {
  if (myArmy.length > opposingArmy.length) {
    return "Opponent retreated";
  }
  if (myArmy.length < opposingArmy.length) {
    return "We retreated";
  }

  function getStrength(char) {
    const code = char.charCodeAt(0);
    // a-z: 97-122 -> strength 1-26
    if (code >= 97 && code <= 122) {
      return code - 96;
    }
    // A-Z: 65-90 -> strength 27-52
    if (code >= 65 && code <= 90) {
      return code - 64 + 26;
    }
    // 0-9: 48-57 -> strength 0-9
    if (code >= 48 && code <= 57) {
      return code - 48;
    }
    return 0;
  }

  let myWins = 0;
  let opposingWins = 0;

  for (let i = 0; i < myArmy.length; i++) {
    const myStr = getStrength(myArmy[i]);
    const oppStr = getStrength(opposingArmy[i]);

    if (myStr > oppStr) {
      myWins++;
    } else if (oppStr > myStr) {
      opposingWins++;
    }
  }

  if (myWins > opposingWins) {
    return "We won";
  }
  if (opposingWins > myWins) {
    return "We lost";
  }
  return "It was a tie";
}

*/
