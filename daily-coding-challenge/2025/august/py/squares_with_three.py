"""

3 Strikes

Given an integer between 1 and 10,000, return a count of how many numbers from 1 up to that integer whose square contains at least one digit 3.

Tests:
  squares_with_three(1) should return 0.
  squares_with_three(10) should return 1.
  squares_with_three(100) should return 19.
  squares_with_three(1000) should return 326.
  squares_with_three(10000) should return 4531.

"""


def squares_with_three(n):
    count = 0
    for i in range(1, n + 1):
        if "3" in str(i**2):
            count += 1
    return count


print(squares_with_three(1))  # 0
print(squares_with_three(10))  # 1
print(squares_with_three(100))  # 19
print(squares_with_three(1000))  # 326
print(squares_with_three(10000))  # 4531
