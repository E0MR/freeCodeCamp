/*

The Last Challenge: Bucket Fill 3

Today marks a year of daily coding challenges. This is the last new one for now. Good luck!

Given a 2D grid of single-letter color strings and a target color, return the minimum number of flood fill "clicks" needed to make the entire grid that color.
  Each click changes the clicked cell's color and the entire region of connected cells of the same color (4-directional).
  Clicks can use any color as an intermediate step, not just the target color.

Tests:
  bucketFill([["B", "B"], ["B", "B"]], "R") should return 1.
  bucketFill([["G", "G", "G"], ["G", "G", "G"], ["G", "G", "G"]], "G") should return 0.
  bucketFill([["P", "P", "Y"], ["Y", "P", "Y"], ["Y", "P", "P"]], "O") should return 2.
  bucketFill([["G", "Y", "C", "C"], ["Y", "Y", "Y", "B"], ["C", "Y", "B", "B"], ["C", "B", "B", "C"]], "R") should return 4.
  bucketFill([["G", "G", "O", "O"], ["G", "Y", "B", "Y"], ["B", "Y", "B", "Y"], ["B", "Y", "B", "Y"], ["G", "G", "G", "G"]], "P") should return 5.
  bucketFill([["R", "G", "R", "G"], ["R", "G", "R", "G"], ["B", "B", "B", "B"], ["B", "B", "B", "B"], ["R", "G", "R", "G"]], "Y") should return 3.

*/

function bucketFill(grid, targetColor) {
    const R = grid.length;
    const C = grid[0].length;

    function serialize(g) {
        return g.map(row => row.join('')).join('|');
    }

    const initialState = grid.map(row => [...row]);
    
    let allTarget = true;
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (grid[r][c] !== targetColor) allTarget = false;
        }
    }
    if (allTarget) return 0;

    const colors = new Set([targetColor]);
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            colors.add(grid[r][c]);
        }
    }

    const queue = [[initialState, 0]];
    const visited = new Set([serialize(initialState)]);

    while (queue.length > 0) {
        const [state, steps] = queue.shift();

        let matches = true;
        for (let r = 0; r < R; r++) {
            for (let c = 0; c < C; c++) {
                if (state[r][c] !== targetColor) {
                    matches = false;
                    break;
                }
            }
            if (!matches) break;
        }
        if (matches) return steps;

        const visitedCells = Array.from({ length: R }, () => Array(C).fill(false));
        const components = [];

        for (let r = 0; r < R; r++) {
            for (let c = 0; c < C; c++) {
                if (!visitedCells[r][c]) {
                    const color = state[r][c];
                    const comp = [];
                    const stack = [[r, c]];
                    visitedCells[r][c] = true;

                    while (stack.length > 0) {
                        const [cr, cc] = stack.pop();
                        comp.push([cr, cc]);

                        const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
                        for (const [dr, dc] of dirs) {
                            const nr = cr + dr;
                            const nc = cc + dc;
                            if (nr >= 0 && nr < R && nc >= 0 && nc < C && !visitedCells[nr][nc] && state[nr][nc] === color) {
                                visitedCells[nr][nc] = true;
                                stack.push([nr, nc]);
                            }
                        }
                    }
                    components.push({ color, comp });
                }
            }
        }

        for (const { color, comp } of components) {
            for (const newColor of colors) {
                if (newColor === color) continue;

                const newState = state.map(row => [...row]);
                for (const [r, c] of comp) {
                    newState[r][c] = newColor;
                }

                const serialized = serialize(newState);
                if (!visited.has(serialized)) {
                    visited.add(serialized);
                    queue.push([newState, steps + 1]);
                }
            }
        }
    }

    return -1;

}

console.log(
  bucketFill(
    [
      ["B", "B"],
      ["B", "B"],
    ],
    "R",
  ),
); // 1
console.log(
  bucketFill(
    [
      ["G", "G", "G"],
      ["G", "G", "G"],
      ["G", "G", "G"],
    ],
    "G",
  ),
); // 0
console.log(
  bucketFill(
    [
      ["P", "P", "Y"],
      ["Y", "P", "Y"],
      ["Y", "P", "P"],
    ],
    "O",
  ),
); // 2
console.log(
  bucketFill(
    [
      ["G", "Y", "C", "C"],
      ["Y", "Y", "Y", "B"],
      ["C", "Y", "B", "B"],
      ["C", "B", "B", "C"],
    ],
    "R",
  ),
); // 4
console.log(
  bucketFill(
    [
      ["G", "G", "O", "O"],
      ["G", "Y", "B", "Y"],
      ["B", "Y", "B", "Y"],
      ["B", "Y", "B", "Y"],
      ["G", "G", "G", "G"],
    ],
    "P",
  ),
); // 5
console.log(
  bucketFill(
    [
      ["R", "G", "R", "G"],
      ["R", "G", "R", "G"],
      ["B", "B", "B", "B"],
      ["B", "B", "B", "B"],
      ["R", "G", "R", "G"],
    ],
    "Y",
  ),
); // 3
