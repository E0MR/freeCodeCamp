"""

Pronic Number

Given a number, determine whether it is a pronic number.

A pronic number is the product of two consecutive integers. For example, 6 is pronic because 2 * 3 = 6.

Tests:
  is_pronic(6) should return True.
  is_pronic(15) should return False.
  is_pronic(12) should return True.
  is_pronic(132) should return True.
  is_pronic(80) should return False.
  is_pronic(0) should return True.

"""


def is_pronic(n):
    if n < 0:
        return False

    root = int(n**0.5)  # math.isqrt(n)

    return root * (root + 1) == n


print(is_pronic(6))  # True.
print(is_pronic(15))  # False.
print(is_pronic(12))  # True.
print(is_pronic(132))  # True.
print(is_pronic(80))  # False.
print(is_pronic(0))  # True.
