"""

Cell Signal

Given a grid containing three cell tower readings, determine the location of the phone.
  Each cell in the grid is either 0 (no tower) or a positive integer representing the number of cells to the phone, measured in a straight line: horizontal, vertical, or diagonal.
  Return the [row, col] of the cell that is the correct number of cells from all three towers.
  There is always exactly one solution.

Tests:
  find_signal([[0, 0, 1], [0, 1, 0], [0, 0, 1]]) should return [1, 2].
  find_signal([[0, 2, 0], [1, 0, 0], [0, 0, 1]]) should return [2, 1].
  find_signal([[0, 0, 2, 0], [0, 0, 0, 0], [2, 0, 0, 0], [0, 0, 0, 1]]) should return [2, 2].
  find_signal([[0, 3, 0, 0, 0], [0, 0, 0, 0, 2], [0, 0, 0, 0, 0], [4, 0, 0, 0, 0], [0, 0, 0, 0, 0]]) should return [3, 4].
  find_signal([[3, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 2]]) should return [3, 3].

"""


def find_signal(grid):
    towers = []
    for r in range(len(grid)):
        for c in range(len(grid[0])):
            if grid[r][c] > 0:
                towers.append((r, c, grid[r][c]))

    for r in range(len(grid)):
        for c in range(len(grid[0])):
            match = True

            for tr, tc, dist in towers:
                calculated_dist = max(abs(r - tr), abs(c - tc))
                if calculated_dist != dist:
                    match = False
                    break

            if match:
                return [r, c]


print(
    find_signal(
        [
            [0, 0, 1],
            [0, 1, 0],
            [0, 0, 1],
        ]
    ),
)  # [1, 2].
print(
    find_signal(
        [
            [0, 2, 0],
            [1, 0, 0],
            [0, 0, 1],
        ]
    ),
)  # [2, 1].
print(
    find_signal(
        [
            [0, 0, 2, 0],
            [0, 0, 0, 0],
            [2, 0, 0, 0],
            [0, 0, 0, 1],
        ]
    ),
)  # [2, 2].
print(
    find_signal(
        [
            [0, 3, 0, 0, 0],
            [0, 0, 0, 0, 2],
            [0, 0, 0, 0, 0],
            [4, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ]
    ),
)  # [3, 4].
print(
    find_signal(
        [
            [3, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 2, 0, 0, 0, 2],
        ]
    ),
)  # [3, 3].
