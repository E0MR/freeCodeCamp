"""

Nearest Multiple

Given two integers, round the first to the nearest multiple of the second.

Tests:
  round_to_nearest_multiple(5, 3) should return 6.
  round_to_nearest_multiple(17, 4) should return 16.
  round_to_nearest_multiple(43, 5) should return 45.
  round_to_nearest_multiple(38, 11) should return 33.
  round_to_nearest_multiple(93, 12) should return 96.

"""


def round_to_nearest_multiple(num, multiple):
    current_multiple = multiple
    diff = abs(multiple - num)

    while True:
        current_multiple += multiple
        if abs(current_multiple - num) > diff:
            break
        else:
            diff = abs(current_multiple - num)

    return current_multiple - multiple


print(round_to_nearest_multiple(5, 3))  # 6.
print(round_to_nearest_multiple(17, 4))  # 16.
print(round_to_nearest_multiple(43, 5))  # 45.
print(round_to_nearest_multiple(38, 11))  # 33.
print(round_to_nearest_multiple(93, 12))  # 96.
