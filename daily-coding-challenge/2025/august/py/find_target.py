"""

Targeted Sum

Given an array of numbers and an integer target, find two unique numbers in the array that add up to the target value. Return an array with the indices of those two numbers, or "Target not found" if no two numbers sum up to the target.
  The returned array should have the indices in ascending order.

Tests:
  find_target([2, 7, 11, 15], 9) should return [0, 1].
  find_target([3, 2, 4, 5], 6) should return [1, 2].
  find_target([1, 3, 5, 6, 7, 8], 15) should return [4, 5].
  find_target([1, 3, 5, 7], 14) should return "Target not found".

"""


def find_target(arr, target):
    for i in range(len(arr)):
        for j in range(i + 1, len(arr)):
            if arr[i] + arr[j] == target:
                return [i, j]

    return "Target not found"


print(find_target([2, 7, 11, 15], 9))  # [0, 1]
print(find_target([3, 2, 4, 5], 6))  # [1, 2]
print(find_target([1, 3, 5, 6, 7, 8], 15))  # [4, 5]
print(find_target([1, 3, 5, 7], 14))  # "Target not found"

"""

def two_sum(nums, target):
    num_map = {}
    
    for i in range(len(nums)):
        complement = target - nums[i]
        
        if complement in num_map:
            indices = [num_map[complement], i]
            return sorted(indices)
            
        num_map[nums[i]] = i
        
    return "Target not found"

"""
