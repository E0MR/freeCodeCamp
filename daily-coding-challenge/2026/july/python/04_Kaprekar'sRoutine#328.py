"""

Kaprekar's Routine

Given a 4-digit number, return the number of times you need to apply Kaprekar's routine until reaching 6174.

Kaprekar's routine works as follows:
  Arrange the digits in descending order to form the largest number
  Arrange the digits in ascending order to form the smallest number (pad with leading zeros if necessary)
  Subtract the smaller from the larger
  Repeat with the new number

Tests:
  kaprekar(1234) should return 3.
  kaprekar(2025) should return 6.
  kaprekar(7173) should return 4.
  kaprekar(3164) should return 7.
  kaprekar(8082) should return 2.

"""


def kaprekar(n):
    times = 0
    while n != 6174:
        digits = list(str(n).zfill(4))

        min_num = int("".join(sorted(digits)))
        max_num = int("".join(sorted(digits, reverse=True)))

        n = max_num - min_num
        times += 1

    return times


print(kaprekar(1234))  # 3.
print(kaprekar(2025))  # 6.
print(kaprekar(7173))  # 4.
print(kaprekar(3164))  # 7.
print(kaprekar(8082))  # 2.
