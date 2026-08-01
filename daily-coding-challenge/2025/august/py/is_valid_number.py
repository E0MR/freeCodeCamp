"""

Base Check

Given a string representing a number, and an integer base from 2 to 36, determine whether the number is valid in that base.
  The string may contain integers, and uppercase or lowercase characters.
  The check should be case-insensitive.
  The base can be any number 2-36.
  A number is valid if every character is a valid digit in the given base.
  Example of valid digits for bases:
    Base 2: 0-1
    Base 8: 0-7
    Base 10: 0-9
    Base 16: 0-9 and A-F
    Base 36: 0-9 and A-Z

Tests:
  is_valid_number("10101", 2) should return True.
  is_valid_number("10201", 2) should return False.
  is_valid_number("76543210", 8) should return True.
  is_valid_number("9876543210", 8) should return False.
  is_valid_number("9876543210", 10) should return True.
  is_valid_number("ABC", 10) should return False.
  is_valid_number("ABC", 16) should return True.
  is_valid_number("Z", 36) should return True.
  is_valid_number("ABC", 20) should return True.
  is_valid_number("4B4BA9", 16) should return True.
  is_valid_number("5G3F8F", 16) should return False.
  is_valid_number("5G3F8F", 17) should return True.
  is_valid_number("abc", 10) should return False.
  is_valid_number("abc", 16) should return True.
  is_valid_number("AbC", 16) should return True.
  is_valid_number("z", 36) should return True.

"""


def is_valid_number(n, base):
    if not (2 <= base <= 36):
        return False

    valid_chars = "0123456789abcdefghijklmnopqrstuvwxyz"
    allowed = set(valid_chars[:base])

    return all(char.lower() in allowed for char in n)


print(is_valid_number("10101", 2))  # True
print(is_valid_number("10201", 2))  # False
print(is_valid_number("76543210", 8))  # True
print(is_valid_number("9876543210", 8))  # False
print(is_valid_number("9876543210", 10))  # True
print(is_valid_number("ABC", 10))  # False
print(is_valid_number("ABC", 16))  # True
print(is_valid_number("Z", 36))  # True
print(is_valid_number("ABC", 20))  # True
print(is_valid_number("4B4BA9", 16))  # True
print(is_valid_number("5G3F8F", 16))  # False
print(is_valid_number("5G3F8F", 17))  # True
print(is_valid_number("abc", 10))  # False
print(is_valid_number("abc", 16))  # True
print(is_valid_number("AbC", 16))  # True
print(is_valid_number("z", 36))  # True
