/*

Bucket Fill

Given a 2D grid, a starting position ([row, col]), and a new value, replace the value at the starting position and all connected cells of the same value with the new value.
  Cells are connected if they are adjacent horizontally or vertically (not diagonally).

Return the updated grid.

Tests:
  bucketFill([["R", "G"], ["R", "G"]], [0, 1], "B") should return [["R", "B"], ["R", "B"]].
  bucketFill([["Y", "G", "G"], ["Y", "Y", "Y"], ["B", "Y", "R"]], [1, 2], "B") should return [["B", "G", "G"], ["B", "B", "B"], ["B", "B", "R"]].
  bucketFill([["O", "O", "P"], ["P", "O", "O"], ["P", "P", "O"]], [2, 0], "R") should return [["O", "O", "P"], ["R", "O", "O"], ["R", "R", "O"]].
  bucketFill([["T", "T", "R", "T"], ["R", "T", "R", "T"], ["R", "T", "R", "T"], ["T", "T", "T", "T"]], [0, 3], "Y") should return [["Y", "Y", "R", "Y"], ["R", "Y", "R", "Y"], ["R", "Y", "R", "Y"], ["Y", "Y", "Y", "Y"]].
  bucketFill([["G", "B", "G", "B"], ["R", "B", "B", "G"], ["B", "G", "B", "R"], ["B", "G", "G", "B"]], [2, 2], "G") should return [["G", "G", "G", "B"], ["R", "G", "G", "G"], ["B", "G", "G", "R"], ["B", "G", "G", "B"]].

*/

function bucketFill(grid, [row, col], newValue) {
  let oldValue = grid[row][col];
  let rowsCount = grid.length;
  let colsCount = grid[0].length;

  if (oldValue == newValue) {
    return grid;
  }

  function fillCell(i, j) {
    if (i < 0 || j < 0 || i >= rowsCount || j >= colsCount) return;

    if (grid[i][j] != oldValue) return;

    grid[i][j] = newValue;

    fillCell(i - 1, j);
    fillCell(i + 1, j);
    fillCell(i, j - 1);
    fillCell(i, j + 1);
  }

  fillCell(row, col);

  return grid;
}

console.log(
  bucketFill(
    [
      ["R", "G"],
      ["R", "G"],
    ],
    [0, 1],
    "B",
  ),
); // [["R", "B"], ["R", "B"]].
console.log(
  bucketFill(
    [
      ["Y", "G", "G"],
      ["Y", "Y", "Y"],
      ["B", "Y", "R"],
    ],
    [1, 2],
    "B",
  ),
); // [["B", "G", "G"], ["B", "B", "B"], ["B", "B", "R"]].
console.log(
  bucketFill(
    [
      ["O", "O", "P"],
      ["P", "O", "O"],
      ["P", "P", "O"],
    ],
    [2, 0],
    "R",
  ),
); // [["O", "O", "P"], ["R", "O", "O"], ["R", "R", "O"]].
console.log(
  bucketFill(
    [
      ["T", "T", "R", "T"],
      ["R", "T", "R", "T"],
      ["R", "T", "R", "T"],
      ["T", "T", "T", "T"],
    ],
    [0, 3],
    "Y",
  ),
); // [["Y", "Y", "R", "Y"], ["R", "Y", "R", "Y"], ["R", "Y", "R", "Y"], ["Y", "Y", "Y", "Y"]].
console.log(
  bucketFill(
    [
      ["G", "B", "G", "B"],
      ["R", "B", "B", "G"],
      ["B", "G", "B", "R"],
      ["B", "G", "G", "B"],
    ],
    [2, 2],
    "G",
  ),
); // [["G", "G", "G", "B"], ["R", "G", "G", "G"], ["B", "G", "G", "R"], ["B", "G", "G", "B"]].
