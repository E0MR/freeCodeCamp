"""

Golden Ratio

Given two numbers, determine if their ratio approximates the golden ratio.
  Use a golden ratio of 1.618
  Allow a tolerance of 0.01

Tests:
  is_golden_ratio(21, 34) should return true.
  is_golden_ratio(15, 20) should return false.
  is_golden_ratio(8, 13) should return true.
  is_golden_ratio(10, 16) should return false.
  is_golden_ratio(1618, 1000) should return true.
  is_golden_ratio(88, 55) should return false.

"""


def is_golden_ratio(a, b):
    return 1.618 - max(a, b) / min(a, b) <= 0.01


print(is_golden_ratio(21, 34))  # true.
print(is_golden_ratio(15, 20))  # false.
print(is_golden_ratio(8, 13))  # true.
print(is_golden_ratio(10, 16))  # false.
print(is_golden_ratio(1618, 1000))  # true.
print(is_golden_ratio(88, 55))  # false.
