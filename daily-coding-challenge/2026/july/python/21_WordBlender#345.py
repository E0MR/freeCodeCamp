"""

Word Blender

Given two words, return a new word by combining the first half of the first word with the second half of the second word.
  For odd-length words, the first half is the shorter half.

Tests:
  blend_words("turtle", "toucan") should return "turcan".
  blend_words("chipmunk", "flamingo") should return "chipingo".
  blend_words("falcon", "pelican") should return "falican".
  blend_words("hyena", "iguana") should return "hyana".
  blend_words("scorpion", "gorilla") should return "scorilla".
  blend_words("platypus", "wolverine") should return "platerine".

"""

import math

def blend_words(word1, word2):
    str1 = word1[:math.floor(len(word1) / 2)]
    str2 = word2[math.floor(len(word2) / 2):]
    return str1 + str2 # f"{str1}{str2}"

print(blend_words("turtle", "toucan"))# "turcan".
print(blend_words("chipmunk", "flamingo"))# "chipingo".
print(blend_words("falcon", "pelican"))# "falican".
print(blend_words("hyena", "iguana"))# "hyana".
print(blend_words("scorpion", "gorilla"))# "scorilla".
print(blend_words("platypus", "wolverine"))# "platerine".
