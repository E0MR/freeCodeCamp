"""

Tally Counter

Given a string of tally marks, return the total count represented.
  Each pipe "|" represents one count.
  Every fifth mark is represented as a forward slash "/", completing a group of five ("||||/").
  Groups are separated by a space.

Tests:
  get_tally_count("||||") should return 4.
  get_tally_count("||||/") should return 5.
  get_tally_count("||||/ |||") should return 8.
  get_tally_count("||||/ ||||/ ||||/ ||") should return 17.
  get_tally_count("||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ |") should return 41.

"""


def get_tally_count(s):
    return len(s.replace(" ", ""))


print(get_tally_count("||||"))  # 4
print(get_tally_count("||||/"))  # 5
print(get_tally_count("||||/ |||"))  # 8
print(get_tally_count("||||/ ||||/ ||||/ ||"))  # 17
print(get_tally_count("||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ |"))  # 41
