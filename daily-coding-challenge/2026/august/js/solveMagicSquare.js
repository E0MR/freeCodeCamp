/*

Magic Square Solver

Given a 3x3 grid with one missing number (represented as 0), return the missing number that completes the magic square, or "impossible" if no valid number exists.

A magic square is a grid where every row, column, and diagonal adds up to the same number.

Tests:
  solveMagicSquare([[2, 7, 6], [9, 0, 1], [4, 3, 8]]) should return 5.
  solveMagicSquare([[0, 14, 12], [18, 10, 2], [8, 6, 16]]) should return 4.
  solveMagicSquare([[12, 17, 16], [19, 0, 10], [14, 13, 18]]) should return "impossible".
  solveMagicSquare([[15, 35, 31], [43, 27, 11], [23, 19, 0]]) should return 39.
  solveMagicSquare([[26, 41, 14], [47, 35, 0], [32, 29, 44]]) should return "impossible".

*/

function solveMagicSquare(grid) {
  let targetSum = null;

  const lines = [
    ...grid,
    [0, 1, 2].map((i) => [grid[0][i], grid[1][i], grid[2][i]]),
    [grid[0][0], grid[1][1], grid[2][2]],
    [grid[0][2], grid[1][1], grid[2][0]],
  ];

  for (const line of lines) {
    if (!line.includes(0)) {
      targetSum = line.reduce((a, b) => a + b, 0);
      break;
    }
  }

  if (targetSum === null) return "impossible";

  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (grid[r][c] === 0) {
        let currentSum = grid[r].reduce((a, b) => a + b, 0);
        let missingVal = targetSum - currentSum;

        let testGrid = grid.map((row) => [...row]);
        testGrid[r][c] = missingVal;

        return isValidMagicSquare(testGrid, targetSum)
          ? missingVal
          : "impossible";
      }
    }
  }

  return "impossible";
}

function isValidMagicSquare(grid, targetSum) {
  function isValidGridLine(arr, target) {
    return arr.reduce((a, b) => a + b, 0) === target;
  }

  for (let i = 0; i < 3; i++) {
    let col = [grid[0][i], grid[1][i], grid[2][i]];
    if (
      !isValidGridLine(grid[i], targetSum) ||
      !isValidGridLine(col, targetSum)
    ) {
      return false;
    }
  }
  let d1 = [grid[0][0], grid[1][1], grid[2][2]];
  let d2 = [grid[0][2], grid[1][1], grid[2][0]];

  return isValidGridLine(d1, targetSum) && isValidGridLine(d2, targetSum);
}

console.log(
  solveMagicSquare([
    [2, 7, 6],
    [9, 0, 1],
    [4, 3, 8],
  ]),
); // 5
console.log(
  solveMagicSquare([
    [0, 14, 12],
    [18, 10, 2],
    [8, 6, 16],
  ]),
); // 4
console.log(
  solveMagicSquare([
    [12, 17, 16],
    [19, 0, 10],
    [14, 13, 18],
  ]),
); // "impossible"
console.log(
  solveMagicSquare([
    [15, 35, 31],
    [43, 27, 11],
    [23, 19, 0],
  ]),
); // 39
console.log(
  solveMagicSquare([
    [26, 41, 14],
    [47, 35, 0],
    [32, 29, 44],
  ]),
); // "impossible"

