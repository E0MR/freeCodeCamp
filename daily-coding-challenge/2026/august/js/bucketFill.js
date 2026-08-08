/*

Bucket Fill 2

Given a 2D grid of single-letter color strings and a target color, return the minimum number of flood fill "clicks" needed to make the entire grid the target color.
  Each click changes the clicked cell's color and the entire region of connected cells of the same color with the target color.
  Cells are connected horizontally and vertically (not diagonally).

Tests:
  bucket_fill([["R", "R"], ["R", "R"]], "G") should return 1.
  bucket_fill([["B", "B", "B"], ["B", "B", "B"], ["B", "B", "B"]], "B") should return 0.
  bucket_fill([["G", "Y", "Y"], ["G", "Y", "G"], ["Y", "Y", "G"]], "R") should return 3.
  bucket_fill([["G", "G", "P", "Y"], ["O", "P", "P", "P"], ["O", "O", "P", "G"], ["G", "O", "O", "G"]], "P") should return 5.
  bucket_fill([["G", "G", "C", "C", "O"], ["B", "Y", "B", "Y", "O"], ["B", "J", "O", "J", "B"], ["G", "Y", "Y", "Y", "B"], ["G", "P", "P", "G", "G"]], "Y") should return 12.

*/

function bucketFill(grid, targetColor) {
  if (!grid || grid.length === 0 || grid[0].length === 0) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  let nonTargetComponents = 0;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (!visited[r][c] && grid[r][c] !== targetColor) {
        nonTargetComponents++;
        const currentColor = grid[r][c];

        // BFS Queue
        const queue = [[r, c]];
        visited[r][c] = true;

        let head = 0;
        while (head < queue.length) {
          const [currR, currC] = queue[head++];

          for (const [dr, dc] of directions) {
            const nr = currR + dr;
            const nc = currC + dc;

            if (
              nr >= 0 &&
              nr < rows &&
              nc >= 0 &&
              nc < cols &&
              !visited[nr][nc] &&
              grid[nr][nc] === currentColor
            ) {
              visited[nr][nc] = true;
              queue.push([nr, nc]);
            }
          }
        }
      }
    }
  }

  return nonTargetComponents;
}

console.log(
  bucket_fill(
    [
      ["R", "R"],
      ["R", "R"],
    ],
    "G",
  ),
); // 1
console.log(
  bucket_fill(
    [
      ["B", "B", "B"],
      ["B", "B", "B"],
      ["B", "B", "B"],
    ],
    "B",
  ),
); // 0
console.log(
  bucket_fill(
    [
      ["G", "Y", "Y"],
      ["G", "Y", "G"],
      ["Y", "Y", "G"],
    ],
    "R",
  ),
); // 3
console.log(
  bucket_fill(
    [
      ["G", "G", "P", "Y"],
      ["O", "P", "P", "P"],
      ["O", "O", "P", "G"],
      ["G", "O", "O", "G"],
    ],
    "P",
  ),
); // 5
console.log(
  bucket_fill(
    [
      ["G", "G", "C", "C", "O"],
      ["B", "Y", "B", "Y", "O"],
      ["B", "J", "O", "J", "B"],
      ["G", "Y", "Y", "Y", "B"],
      ["G", "P", "P", "G", "G"],
    ],
    "Y",
  ),
); // 12
