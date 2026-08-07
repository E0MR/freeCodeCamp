/*

Nonogram Validator

Given an array of clue numbers and an array of cells, determine whether the cells satisfy the nonogram clue.
  The clue is an array of numbers representing the lengths of consecutive filled cells, in order. For example, a clue of [3, 2] means there should be 3 consecutive filled cells followed by 2 consecutive filled cells, separated by at least one empty cell.
  The row is an array of 1s (filled) and 0s (empty).

Tests:
  isValidNonogram([3, 2], [1, 1, 1, 0, 1, 1]) should return true.
  isValidNonogram([3, 2], [0, 1, 1, 1, 1, 1]) should return false.
  isValidNonogram([1, 1, 1, 1], [1, 0, 1, 0, 1, 0, 1, 0, 1]) should return false.
  isValidNonogram([1, 1, 1, 1], [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0]) should return true.
  isValidNonogram([3, 2, 3], [0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0]) should return true.
  isValidNonogram([3, 2, 3], [0, 0, 0, 1, 0, 0, 1, 0, 0, 0]) should return false.

*/

function isValidNonogram(clue, cells) {
  return (
    cells
      .join("")
      .split("0")
      .filter((str) => str.length > 0)
      .map((str) => str.length) == String(clue)
  );
}

console.log(isValidNonogram([3, 2], [1, 1, 1, 0, 1, 1])); // true
console.log(isValidNonogram([3, 2], [0, 1, 1, 1, 1, 1])); // false
console.log(isValidNonogram([1, 1, 1, 1], [1, 0, 1, 0, 1, 0, 1, 0, 1])); // false
console.log(isValidNonogram([1, 1, 1, 1], [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0])); // true
console.log(
  isValidNonogram([3, 2, 3], [0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0]),
); // true
console.log(isValidNonogram([3, 2, 3], [0, 0, 0, 1, 0, 0, 1, 0, 0, 0])); // false

/*

// Gemini

function validateNonogram(clue, row) {
    let currentLength = 0;
    const extractedClue = [];
    
    for (const cell of row) {
        if (cell === 1) {
            currentLength++;
        } else if (currentLength > 0) {
            extractedClue.push(currentLength);
            currentLength = 0;
        }
    }
    
    if (currentLength > 0) {
        extractedClue.push(currentLength);
    }
    
    if (extractedClue.length !== clue.length) return false;
    return extractedClue.every((val, index) => val === clue[index]);
}

// Gemini improve my solution

function isValidNonogram(clue, cells) {
  const extracted = cells
    .join("")
    .split("0")
    .filter(Boolean)
    .map(str => str.length);
    
  return JSON.stringify(extracted) === JSON.stringify(clue);
}

*/
