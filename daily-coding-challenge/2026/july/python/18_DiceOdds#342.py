"""

Dice Odds

Given a number of six-sided dice to roll and a target sum, return the odds of rolling that sum as a string in the format "1 in X".
  The number of dice will be between 1 and 6.
  The target sum is always achievable with the given number of dice.
  Round "X" to the nearest whole number.

Tests:
  get_odds(1, 5) should return "1 in 6".
  get_odds(2, 4) should return "1 in 12".
  get_odds(3, 10) should return "1 in 8".
  get_odds(4, 7) should return "1 in 65".
  get_odds(5, 26) should return "1 in 111".
  get_odds(6, 35) should return "1 in 7776".

"""


def get_odds(dice, target):
    total_outcomes = 6**dice

    def count_ways(dice_left, current_sum):
        if dice_left == 0:
            return 1 if current_sum == target else 0

        ways = 0
        for face in range(1, 7):
            ways += count_ways(dice_left - 1, current_sum + face)
        return ways

    successful_ways = count_ways(dice, 0)

    x = round(total_outcomes / successful_ways)

    return f"1 in {x}"


print(get_odds(1, 5))  # "1 in 6".
print(get_odds(2, 4))  # "1 in 12".
print(get_odds(3, 10))  # "1 in 8".
print(get_odds(4, 7))  # "1 in 65".
print(get_odds(5, 26))  # "1 in 111".
print(get_odds(6, 35))  # "1 in 7776".
