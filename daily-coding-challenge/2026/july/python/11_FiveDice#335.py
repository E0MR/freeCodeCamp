"""

Five Dice

Given an array of five dice with values 1-6, return the best possible hand.

Here are the hands ranked lowest to highest:
  Hand	                Description
  "no pair"	            No pair or better
  "pair"	            Two dice with the same value
  "two pair"	        Two different pairs
  "three of a kind"	    Three dice with the same value
  "small straight"	    Four consecutive values
  "large straight"	    Five consecutive values
  "full house"	        Three of a kind and a pair
  "four of a kind"	    Four dice with the same value
  "five of a kind"	    All five dice with the same value

Tests:
  five_dice([1, 1, 1, 1, 1]) should return "five of a kind".
  five_dice([5, 5, 5, 6, 5]) should return "four of a kind".
  five_dice([2, 5, 6, 4, 3]) should return "large straight".
  five_dice([4, 3, 3, 3, 1]) should return "three of a kind".
  five_dice([4, 6, 2, 6, 5]) should return "pair".
  five_dice([1, 4, 5, 6, 2]) should return "no pair".
  five_dice([1, 3, 4, 6, 2]) should return "small straight".
  five_dice([2, 2, 5, 2, 5]) should return "full house".
  five_dice([6, 4, 5, 6, 4]) should return "two pair".

"""

import re


def five_dice(dice):
    frequencies = [0] * 7
    for i in range(len(dice)):
        frequencies[dice[i]] += 1

    freq_str = "".join(map(str, frequencies))

    if 5 in frequencies:
        return "five of a kind"
    if 4 in frequencies:
        return "four of a kind"
    if 3 in frequencies and 2 in frequencies:
        return "full house"
    if "11111" in freq_str:
        return "large straight"
    if re.search(r"[1-2]{4}", freq_str):
        return "small straight"
    if 3 in frequencies:
        return "three of a kind"

    if 2 in frequencies and frequencies.index(2) != (
        len(frequencies) - 1 - frequencies[::-1].index(2)
    ):
        return "two pair"

    if 2 in frequencies:
        return "pair"

    return "no pair"


print(five_dice([1, 1, 1, 1, 1]))  # "five of a kind".
print(five_dice([5, 5, 5, 6, 5]))  # "four of a kind".
print(five_dice([2, 5, 6, 4, 3]))  # "large straight".
print(five_dice([4, 3, 3, 3, 1]))  # "three of a kind".
print(five_dice([4, 6, 2, 6, 5]))  # "pair".
print(five_dice([1, 4, 5, 6, 2]))  # "no pair".
print(five_dice([1, 3, 4, 6, 2]))  # "small straight".
print(five_dice([2, 2, 5, 2, 5]))  # "full house".
print(five_dice([6, 4, 5, 6, 4]))  # "two pair".
