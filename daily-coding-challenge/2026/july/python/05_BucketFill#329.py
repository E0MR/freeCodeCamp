"""

Bucket Fill

Given a 2D grid, a starting position ([row, col]), and a new value, replace the value at the starting position and all connected cells of the same value with the new value.
  Cells are connected if they are adjacent horizontally or vertically (not diagonally).

Return the updated grid.

Tests:
  bucket_fill([["R", "G"], ["R", "G"]], [0, 1], "B") should return [["R", "B"], ["R", "B"]].
  bucket_fill([["Y", "G", "G"], ["Y", "Y", "Y"], ["B", "Y", "R"]], [1, 2], "B") should return [["B", "G", "G"], ["B", "B", "B"], ["B", "B", "R"]].
  bucket_fill([["O", "O", "P"], ["P", "O", "O"], ["P", "P", "O"]], [2, 0], "R") should return [["O", "O", "P"], ["R", "O", "O"], ["R", "R", "O"]].
  bucket_fill([["T", "T", "R", "T"], ["R", "T", "R", "T"], ["R", "T", "R", "T"], ["T", "T", "T", "T"]], [0, 3], "Y") should return [["Y", "Y", "R", "Y"], ["R", "Y", "R", "Y"], ["R", "Y", "R", "Y"], ["Y", "Y", "Y", "Y"]].
  bucket_fill([["G", "B", "G", "B"], ["R", "B", "B", "G"], ["B", "G", "B", "R"], ["B", "G", "G", "B"]], [2, 2], "G") should return [["G", "G", "G", "B"], ["R", "G", "G", "G"], ["B", "G", "G", "R"], ["B", "G", "G", "B"]].

"""


def bucket_fill(grid, pos, new_value):
    row, col = pos
    old_value = grid[row][col]
    rows_count = len(grid)
    cols_count = len(grid[0]) if rows_count > 0 else 0

    if old_value == new_value:
        return grid

    def fill_cell(i, j):
        if i < 0 or j < 0 or i >= rows_count or j >= cols_count:
            return

        if grid[i][j] != old_value:
            return

        grid[i][j] = new_value

        fill_cell(i - 1, j)
        fill_cell(i + 1, j)
        fill_cell(i, j - 1)
        fill_cell(i, j + 1)

    fill_cell(row, col)

    return grid


print(
    bucket_fill(
        [
            ["R", "G"],
            ["R", "G"],
        ],
        [0, 1],
        "B",
    ),
)  # [["R", "B"], ["R", "B"]].
print(
    bucket_fill(
        [
            ["Y", "G", "G"],
            ["Y", "Y", "Y"],
            ["B", "Y", "R"],
        ],
        [1, 2],
        "B",
    ),
)  # [["B", "G", "G"], ["B", "B", "B"], ["B", "B", "R"]].
print(
    bucket_fill(
        [
            ["O", "O", "P"],
            ["P", "O", "O"],
            ["P", "P", "O"],
        ],
        [2, 0],
        "R",
    ),
)  # [["O", "O", "P"], ["R", "O", "O"], ["R", "R", "O"]].
print(
    bucket_fill(
        [
            ["T", "T", "R", "T"],
            ["R", "T", "R", "T"],
            ["R", "T", "R", "T"],
            ["T", "T", "T", "T"],
        ],
        [0, 3],
        "Y",
    ),
)  # [["Y", "Y", "R", "Y"], ["R", "Y", "R", "Y"], ["R", "Y", "R", "Y"], ["Y", "Y", "Y", "Y"]].
print(
    bucket_fill(
        [
            ["G", "B", "G", "B"],
            ["R", "B", "B", "G"],
            ["B", "G", "B", "R"],
            ["B", "G", "G", "B"],
        ],
        [2, 2],
        "G",
    ),
)  # [["G", "G", "G", "B"], ["R", "G", "G", "G"], ["B", "G", "G", "R"], ["B", "G", "G", "B"]].
