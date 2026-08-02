"""

Magic Square Solver

Given a 3x3 grid with one missing number (represented as 0), return the missing number that completes the magic square, or "impossible" if no valid number exists.

A magic square is a grid where every row, column, and diagonal adds up to the same number.

Tests:
  solve_magic_square([[2, 7, 6], [9, 0, 1], [4, 3, 8]]) should return 5.
  solve_magic_square([[0, 14, 12], [18, 10, 2], [8, 6, 16]]) should return 4.
  solve_magic_square([[12, 17, 16], [19, 0, 10], [14, 13, 18]]) should return "impossible".
  solve_magic_square([[15, 35, 31], [43, 27, 11], [23, 19, 0]]) should return 39.
  solve_magic_square([[26, 41, 14], [47, 35, 0], [32, 29, 44]]) should return "impossible".

"""


def solve_magic_square(grid):
    target_sum = None

    lines = (
        grid
        + [[grid[0][i], grid[1][i], grid[2][i]] for i in range(3)]
        + [[grid[0][0], grid[1][1], grid[2][2]], [grid[0][2], grid[1][1], grid[2][0]]]
    )

    for line in lines:
        if 0 not in line:
            target_sum = sum(line)
            break

    if target_sum is None:
        return "impossible"

    for r in range(3):
        for c in range(3):
            if grid[r][c] == 0:
                current_sum = sum(grid[r])
                missing_val = target_sum - current_sum

                test_grid = [row[:] for row in grid]
                test_grid[r][c] = missing_val

                return (
                    missing_val
                    if is_valid_magic_square(test_grid, target_sum)
                    else "impossible"
                )

    return "impossible"


def is_valid_magic_square(grid, target_sum):
    def is_valid_grid_line(arr, target):
        return sum(arr) == target

    for i in range(3):
        col = [grid[0][i], grid[1][i], grid[2][i]]
        if not is_valid_grid_line(grid[i], target_sum) or not is_valid_grid_line(
            col, target_sum
        ):
            return False

    d1 = [grid[0][0], grid[1][1], grid[2][2]]
    d2 = [grid[0][2], grid[1][1], grid[2][0]]

    return is_valid_grid_line(d1, target_sum) and is_valid_grid_line(d2, target_sum)


print(
    solve_magic_square(
        [
            [2, 7, 6],
            [9, 0, 1],
            [4, 3, 8],
        ]
    ),
)
# 5
print(
    solve_magic_square(
        [
            [0, 14, 12],
            [18, 10, 2],
            [8, 6, 16],
        ]
    ),
)
# 4
print(
    solve_magic_square(
        [
            [12, 17, 16],
            [19, 0, 10],
            [14, 13, 18],
        ]
    ),
)
# "impossible"
print(
    solve_magic_square(
        [
            [15, 35, 31],
            [43, 27, 11],
            [23, 19, 0],
        ]
    ),
)
# 39
print(
    solve_magic_square(
        [
            [26, 41, 14],
            [47, 35, 0],
            [32, 29, 44],
        ]
    ),
)
# "impossible"
