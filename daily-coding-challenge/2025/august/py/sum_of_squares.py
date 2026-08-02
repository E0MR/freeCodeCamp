"""

Sum of Squares

Given a positive integer up to 1,000, return the sum of all the integers squared from 1 up to the number.

Tests:
  sum_of_squares(5) should return 55.
  sum_of_squares(10) should return 385.
  sum_of_squares(25) should return 5525.
  sum_of_squares(500) should return 41791750.
  sum_of_squares(1000) should return 333833500.

"""


def sum_of_squares(n):
    total_sum = 0
    for i in range(1, n + 1):
        total_sum += i * i
    return total_sum


print(sum_of_squares(5))  # 55
print(sum_of_squares(10))  # 385
print(sum_of_squares(25))  # 5525
print(sum_of_squares(500))  # 41791750
print(sum_of_squares(1000))  # 333833500
