"""

Nonogram Validator

Given an array of clue numbers and an array of cells, determine whether the cells satisfy the nonogram clue.
  The clue is an array of numbers representing the lengths of consecutive filled cells, in order. For example, a clue of [3, 2] means there should be 3 consecutive filled cells followed by 2 consecutive filled cells, separated by at least one empty cell.
  The row is an array of 1s (filled) and 0s (empty).

Tests:
  is_valid_nonogram([3, 2], [1, 1, 1, 0, 1, 1]) should return True.
  is_valid_nonogram([3, 2], [0, 1, 1, 1, 1, 1]) should return False.
  is_valid_nonogram([1, 1, 1, 1], [1, 0, 1, 0, 1, 0, 1, 0, 1]) should return False.
  is_valid_nonogram([1, 1, 1, 1], [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0]) should return True.
  is_valid_nonogram([3, 2, 3], [0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0]) should return True.
  is_valid_nonogram([3, 2, 3], [0, 0, 0, 1, 0, 0, 1, 0, 0, 0]) should return False.

"""

import json


def is_valid_nonogram(clue, cells):
    extracted = [len(s) for s in "".join(map(str, cells)).split("0") if s]

    return json.dumps(extracted) == json.dumps(clue)


print(is_valid_nonogram([3, 2], [1, 1, 1, 0, 1, 1]))  # True
print(is_valid_nonogram([3, 2], [0, 1, 1, 1, 1, 1]))  # False
print(is_valid_nonogram([1, 1, 1, 1], [1, 0, 1, 0, 1, 0, 1, 0, 1]))  # False
print(is_valid_nonogram([1, 1, 1, 1], [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0]))  # True
print(
    is_valid_nonogram([3, 2, 3], [0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0]),
)  # True
print(is_valid_nonogram([3, 2, 3], [0, 0, 0, 1, 0, 0, 1, 0, 0, 0]))  # False

"""

import json

def is_valid_nonogram(clue, cells):
    cells_str = "".join(map(str, cells))
    extracted = [
        len(s) for s in cells_str.split("0") if s
    ]
    
    return extracted == clue

"""
