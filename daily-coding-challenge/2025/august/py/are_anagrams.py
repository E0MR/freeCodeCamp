"""

Anagram Checker

Given two strings, determine if they are anagrams of each other (contain the same characters in any order).
  Ignore casing and white space.

Tests:
  are_anagrams("listen", "silent") should return True.
  are_anagrams("School master", "The classroom") should return True.
  are_anagrams("A gentleman", "Elegant man") should return True.
  are_anagrams("Hello", "World") should return False.
  are_anagrams("apple", "banana") should return False.
  are_anagrams("cat", "dog") should return False.

"""

def are_anagrams(str1, str2):
    clean1 = "".join(str1.split()).lower()
    clean2 = "".join(str2.split()).lower()

    if len(clean1) != len(clean2):
        return False

    return all(
        clean1.count(char) == clean2.count(char) 
        for char in clean1
    )

print(are_anagrams("listen", "silent"))# True
print(are_anagrams("School master", "The classroom"))# True
print(are_anagrams("A gentleman", "Elegant man"))# True
print(are_anagrams("Hello", "World"))# False
print(are_anagrams("apple", "banana"))# False
print(are_anagrams("cat", "dog"))# False

