"""

Letter Distance

Given two strings of equal length, return the sum of the shortest distances between each pair of characters.
  The input will only contain lowercase letters
  The alphabet is treated as a circle, so the distance between a and z is 1.

Tests:
  letter_distance("abc", "bcd") should return 3.
  letter_distance("abc", "xyz") should return 9.
  letter_distance("encrypt", "decrypt") should return 10.
  letter_distance("algorithm", "codeblock") should return 43.
  letter_distance("lobster", "penguin") should return 47.
  letter_distance("alligator", "crocodile") should return 55.

"""


def letter_distance(str1, str2):
    letters = "abcdefghijklmnopqrstuvwxyz"
    distance = 0

    for i in range(len(str1)):
        dist1 = abs(letters.find(str1[i]) - letters.find(str2[i]))
        dist2 = len(letters) - dist1
        distance += dist1 if dist1 < dist2 else dist2

    return distance


print(letter_distance("abc", "bcd"))  # 3.
print(letter_distance("abc", "xyz"))  # 9.
print(letter_distance("encrypt", "decrypt"))  # 10.
print(letter_distance("algorithm", "codeblock"))  # 43.
print(letter_distance("lobster", "penguin"))  # 47.
print(letter_distance("alligator", "crocodile"))  # 55.
