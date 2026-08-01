"""

Vowel Balance

Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.
  The string can contain any characters.
  The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
  If there's an odd number of characters in the string, ignore the center character.

Tests:
  is_balanced("racecar") should return True.
  is_balanced("Lorem Ipsum") should return True.
  is_balanced("Kitty Ipsum") should return False.
  is_balanced("string") should return False.
  is_balanced(" ") should return True.
  is_balanced("abcdefghijklmnopqrstuvwxyz") should return False.
  is_balanced("123A#b!E&*456-o.U") should return True.

"""


def is_balanced(s):
    vowels = {"a", "e", "i", "o", "u"}
    mid = len(s) // 2

    first_half = s[:mid]
    second_half = s[-mid:]

    first_half_vowels_count = 0
    second_half_vowels_count = 0

    for i in range(len(first_half)):
        if first_half[i].lower() in vowels:
            first_half_vowels_count += 1
        if second_half[i].lower() in vowels:
            second_half_vowels_count += 1

    return first_half_vowels_count == second_half_vowels_count


print(is_balanced("racecar"))  # True
print(is_balanced("Lorem Ipsum"))  # True
print(is_balanced("Kitty Ipsum"))  # False
print(is_balanced("string"))  # False
print(is_balanced(" "))  # True
print(is_balanced("abcdefghijklmnopqrstuvwxyz"))  # False
print(is_balanced("123A#b!E&*456-o.U"))  # True
