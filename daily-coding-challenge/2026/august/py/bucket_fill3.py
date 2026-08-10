"""

The Last Challenge: Bucket Fill 3

Today marks a year of daily coding challenges. This is the last new one for now. Good luck!

Given a 2D grid of single-letter color strings and a target color, return the minimum number of flood fill "clicks" needed to make the entire grid that color.
  Each click changes the clicked cell's color and the entire region of connected cells of the same color (4-directional).
  Clicks can use any color as an intermediate step, not just the target color.

Tests:
  bucket_fill([["B", "B"], ["B", "B"]], "R") should return 1.
  bucket_fill([["G", "G", "G"], ["G", "G", "G"], ["G", "G", "G"]], "G") should return 0.
  bucket_fill([["P", "P", "Y"], ["Y", "P", "Y"], ["Y", "P", "P"]], "O") should return 2.
  bucket_fill([["G", "Y", "C", "C"], ["Y", "Y", "Y", "B"], ["C", "Y", "B", "B"], ["C", "B", "B", "C"]], "R") should return 4.
  bucket_fill([["G", "G", "O", "O"], ["G", "Y", "B", "Y"], ["B", "Y", "B", "Y"], ["B", "Y", "B", "Y"], ["G", "G", "G", "G"]], "P") should return 5.
  bucket_fill([["R", "G", "R", "G"], ["R", "G", "R", "G"], ["B", "B", "B", "B"], ["B", "B", "B", "B"], ["R", "G", "R", "G"]], "Y") should return 3.

"""

from collections import deque

def bucket_fill(grid, target_color):

    R = len(grid)
    C = len(grid[0])
    
    initial_state = tuple(tuple(row) for row in grid)
    
    if all(cell == target_color for row in initial_state for cell in row):
        return 0
        
    queue = deque([(initial_state, 0)])
    visited = {initial_state}
    
    colors = set(target_color)
    for row in initial_state:
        for cell in row:
            colors.add(cell)
            
    while queue:
        state, steps = queue.popleft()
        
        if all(cell == target_color for row in state for cell in row):
            return steps
            
        visited_cells = set()
        components = []
        
        for r in range(R):
            for c in range(C):
                if (r, c) not in visited_cells:
                    color = state[r][c]
                    comp = []
                    stack = [(r, c)]
                    visited_cells.add((r, c))
                    
                    while stack:
                        cr, cc = stack.pop()
                        comp.append((cr, cc))
                        for dr, dc in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                            nr, nc = cr + dr, cc + dc
                            if 0 <= nr < R and 0 <= nc < C and (nr, nc) not in visited_cells and state[nr][nc] == color:
                                visited_cells.add((nr, nc))
                                stack.append((nr, nc))
                    components.append((color, comp))
                    
        for color, comp in components:
            for new_color in colors:
                if new_color == color:
                    continue
                
                new_state = [list(row) for row in state]
                for r, c in comp:
                    new_state[r][c] = new_color
                new_state_tuple = tuple(tuple(row) for row in new_state)
                
                if new_state_tuple not in visited:
                    visited.add(new_state_tuple)
                    queue.append((new_state_tuple, steps + 1))
                    
    return -1


print(
    bucket_fill(
        [
            ["B", "B"],
            ["B", "B"],
        ],
        "R",
    ),
)  # 1
print(
    bucket_fill(
        [
            ["G", "G", "G"],
            ["G", "G", "G"],
            ["G", "G", "G"],
        ],
        "G",
    ),
)  # 0
print(
    bucket_fill(
        [
            ["P", "P", "Y"],
            ["Y", "P", "Y"],
            ["Y", "P", "P"],
        ],
        "O",
    ),
)  # 2
print(
    bucket_fill(
        [
            ["G", "Y", "C", "C"],
            ["Y", "Y", "Y", "B"],
            ["C", "Y", "B", "B"],
            ["C", "B", "B", "C"],
        ],
        "R",
    ),
)  # 4
print(
    bucket_fill(
        [
            ["G", "G", "O", "O"],
            ["G", "Y", "B", "Y"],
            ["B", "Y", "B", "Y"],
            ["B", "Y", "B", "Y"],
            ["G", "G", "G", "G"],
        ],
        "P",
    ),
)  # 5
print(
    bucket_fill(
        [
            ["R", "G", "R", "G"],
            ["R", "G", "R", "G"],
            ["B", "B", "B", "B"],
            ["B", "B", "B", "B"],
            ["R", "G", "R", "G"],
        ],
        "Y",
    ),
)  # 3
