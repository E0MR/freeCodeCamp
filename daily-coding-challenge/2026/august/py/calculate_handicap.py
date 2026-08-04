"""

Golf Handicap Calculator

Given an array of golf scores and a corresponding array of course par values, return the golfer's handicap index using the following method:
  Calculate the differential for each round by subtracting the par from the score, then return the average of all differentials rounded to one decimal place.

Tests:
  calculate_handicap([72, 72, 72], [72, 72, 72]) should return 0.
  calculate_handicap([80, 76, 78, 78], [72, 72, 72, 72]) should return 6.
  calculate_handicap([42, 45, 46, 44], [36, 36, 36, 36]) should return 8.3.
  calculate_handicap([85, 80, 76, 79, 82], [72, 72, 72, 71, 71]) should return 8.8.
  calculate_handicap([41, 50, 48, 52, 46, 49], [35, 37, 35, 37, 35, 37]) should return 11.7.

"""

import math


def calculate_handicap(scores, pars):
    differences = [score - pars[index] for index, score in enumerate(scores)]
    average = sum(differences) / len(scores)

    if average % 1 != 0:
        return math.ceil(average * 10) / 10
    return int(average)


print(calculate_handicap([72, 72, 72], [72, 72, 72]))  # 0
print(calculate_handicap([80, 76, 78, 78], [72, 72, 72, 72]))  # 6
print(calculate_handicap([42, 45, 46, 44], [36, 36, 36, 36]))  # 8.3
print(calculate_handicap([85, 80, 76, 79, 82], [72, 72, 72, 71, 71]))  # 8.8
print(
    calculate_handicap([41, 50, 48, 52, 46, 49], [35, 37, 35, 37, 35, 37]),
)  # 11.7
