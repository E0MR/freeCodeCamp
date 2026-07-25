/*

Cell Signal

Given a grid containing three cell tower readings, determine the location of the phone.
  Each cell in the grid is either 0 (no tower) or a positive integer representing the number of cells to the phone, measured in a straight line: horizontal, vertical, or diagonal.
  Return the [row, col] of the cell that is the correct number of cells from all three towers.
  There is always exactly one solution.

Tests:
  findSignal([[0, 0, 1], [0, 1, 0], [0, 0, 1]]) should return [1, 2].
  findSignal([[0, 2, 0], [1, 0, 0], [0, 0, 1]]) should return [2, 1].
  findSignal([[0, 0, 2, 0], [0, 0, 0, 0], [2, 0, 0, 0], [0, 0, 0, 1]]) should return [2, 2].
  findSignal([[0, 3, 0, 0, 0], [0, 0, 0, 0, 2], [0, 0, 0, 0, 0], [4, 0, 0, 0, 0], [0, 0, 0, 0, 0]]) should return [3, 4].
  findSignal([[3, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 2]]) should return [3, 3].

*/

function findSignal(grid) {
  let towers = [];
  let rows = grid.length;
  let cols = grid[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] > 0) {
        towers.push({ r: r, c: c, dist: grid[r][c] });
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let match = true;

      for (let tower of towers) {
        let calculatedDist = Math.max(
          Math.abs(r - tower.r),
          Math.abs(c - tower.c),
        ); // Chebyshev Distance

        if (calculatedDist !== tower.dist) {
          match = false;
          break;
        }
      }

      if (match) {
        return [r, c];
      }
    }
  }
}

console.log(
  findSignal([
    [0, 0, 1],
    [0, 1, 0],
    [0, 0, 1],
  ]),
); // [1, 2].
console.log(
  findSignal([
    [0, 2, 0],
    [1, 0, 0],
    [0, 0, 1],
  ]),
); // [2, 1].
console.log(
  findSignal([
    [0, 0, 2, 0],
    [0, 0, 0, 0],
    [2, 0, 0, 0],
    [0, 0, 0, 1],
  ]),
); // [2, 2].
console.log(
  findSignal([
    [0, 3, 0, 0, 0],
    [0, 0, 0, 0, 2],
    [0, 0, 0, 0, 0],
    [4, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]),
); // [3, 4].
console.log(
  findSignal([
    [3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 2],
  ]),
); // [3, 3].
