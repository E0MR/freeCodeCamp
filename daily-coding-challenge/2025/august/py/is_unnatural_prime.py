"""

Unnatural Prime

Given an integer, determine if that number is a prime number or a negative prime number.
  A prime number is a positive integer greater than 1 that is only divisible by 1 and itself.
  A negative prime number is the negative version of a positive prime number.
  1 and 0 are not considered prime numbers.

Tests:
  is_unnatural_prime(1) should return False.
  is_unnatural_prime(-1) should return False.
  is_unnatural_prime(19) should return True.
  is_unnatural_prime(-23) should return True.
  is_unnatural_prime(0) should return False.
  is_unnatural_prime(97) should return True.
  is_unnatural_prime(-61) should return True.
  is_unnatural_prime(99) should return False.
  is_unnatural_prime(-44) should return False.

"""

import math


def is_unnatural_prime(n):
    abs_n = abs(n)

    if abs_n <= 1:
        return False

    for i in range(2, math.isqrt(abs_n) + 1):
        if abs_n % i == 0:
            return False

    return True


print(is_unnatural_prime(1))  # False
print(is_unnatural_prime(-1))  # False
print(is_unnatural_prime(19))  # True
print(is_unnatural_prime(-23))  # True
print(is_unnatural_prime(0))  # False
print(is_unnatural_prime(97))  # True
print(is_unnatural_prime(-61))  # True
print(is_unnatural_prime(99))  # False
print(is_unnatural_prime(-44))  # False
