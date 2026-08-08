"""

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

"""

from collections import deque


def bucket_fill(grid, target_color):
    if not grid or not grid[0]:
        return 0

    rows = len(grid)
    cols = len(grid[0])
    visited = [[False * cols for _ in range(cols)] for _ in range(rows)]

    non_target_components = 0

    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

    for r in range(rows):
        for c in range(cols):
            if not visited[r][c] and grid[r][c] != target_color:
                non_target_components += 1
                current_color = grid[r][c]

                queue = deque([(r, c)])
                visited[r][c] = True

                while queue:
                    curr_r, curr_c = queue.popleft()
                    for dr, dc in directions:
                        nr, nc = curr_r + dr, curr_c + dc
                        if (
                            0 <= nr < rows
                            and 0 <= nc < cols
                            and not visited[nr][nc]
                            and grid[nr][nc] == current_color
                        ):
                            visited[nr][nc] = True
                            queue.append((nr, nc))

    return non_target_components


print(
    bucket_fill(
        [
            ["R", "R"],
            ["R", "R"],
        ],
        "G",
    ),
)  # 1
print(
    bucket_fill(
        [
            ["B", "B", "B"],
            ["B", "B", "B"],
            ["B", "B", "B"],
        ],
        "B",
    ),
)  # 0
print(
    bucket_fill(
        [
            ["G", "Y", "Y"],
            ["G", "Y", "G"],
            ["Y", "Y", "G"],
        ],
        "R",
    ),
)  # 3
print(
    bucket_fill(
        [
            ["G", "G", "P", "Y"],
            ["O", "P", "P", "P"],
            ["O", "O", "P", "G"],
            ["G", "O", "O", "G"],
        ],
        "P",
    ),
)  # 5
print(
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
)  # 12
