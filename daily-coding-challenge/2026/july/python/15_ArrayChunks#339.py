"""

Array Chunks

Given an array and a chunk size, return the array split into sub-arrays of that size.
  The last chunk may be smaller if the array doesn't divide evenly.

Tests:
  chunk_array([1, 2, 3, 4, 5, 6], 3) should return [[1, 2, 3], [4, 5, 6]].
  chunk_array([1, "two", 3, "four", 5, "six", 7, "eight"], 2) should return [[1, "two"], [3, "four"], [5, "six"], [7, "eight"]].
  chunk_array([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]].
  chunk_array(["a", "b", "c", "d", "e"], 1) should return [["a"], ["b"], ["c"], ["d"], ["e"]].
  chunk_array([1, 2, 3], 5) should return [[1, 2, 3]].

"""


def chunk_array(arr, size):
    result = []
    start = 0
    while start < len(arr):
        result.append(arr[start : start + size])
        start += size

    return result


print(chunk_array([1, 2, 3, 4, 5, 6], 3))  # [[1, 2, 3], [4, 5, 6]].
print(
    chunk_array([1, "two", 3, "four", 5, "six", 7, "eight"], 2)
)  # [[1, "two"], [3, "four"], [5, "six"], [7, "eight"]].
print(chunk_array([1, 2, 3, 4, 5], 3))  # [[1, 2, 3], [4, 5]].
print(chunk_array(["a", "b", "c", "d", "e"], 1))  # [["a"], ["b"], ["c"], ["d"], ["e"]].
print(chunk_array([1, 2, 3], 5))  # [[1, 2, 3]].
