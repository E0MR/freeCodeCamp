"""

Character Battle

Given two strings representing your army and an opposing army, each character from your army battles the character at the same position from the opposing army using the following rules:
  Characters a-z have a strength of 1-26, respectively.
  Characters A-Z have a strength of 27-52, respectively.
  Digits 0-9 have a strength of their face value.
  All other characters have a value of zero.
  Each character can only fight one battle.

For each battle, the stronger character wins. The army with more victories, wins the war. Return the following values:
  "Opponent retreated" if your army has more characters than the opposing army.
  "We retreated" if the opposing army has more characters than yours.
  "We won" if your army won more battles.
  "We lost" if the opposing army won more battles.
  "It was a tie" if both armies won the same number of battles.

Tests:
  battle("Hello", "World") should return "We lost".
  battle("pizza", "salad") should return "We won".
  battle("C@T5", "D0G$") should return "We won".
  battle("kn!ght", "orc") should return "Opponent retreated".
  battle("PC", "Mac") should return "We retreated".
  battle("Wizards", "Dragons") should return "It was a tie".
  battle("Mr. Smith", "Dr. Jones") should return "It was a tie".

"""


def battle(my_army, opposing_army):
    alphabet = "0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if len(my_army) > len(opposing_army):
        return "Opponent retreated"
    elif len(my_army) < len(opposing_army):
        return "We retreated"
    else:
        me = 0
        opposing = 0

        for char, opp_char in zip(my_army, opposing_army):
            me_idx = alphabet.find(char)
            if me_idx != -1:
                me_score = me_idx
            else:
                try:
                    me_score = int(char)
                except ValueError:
                    me_score = 0

            opp_idx = alphabet.find(opp_char)
            if opp_idx != -1:
                opposing_score = opp_idx
            else:
                try:
                    opposing_score = int(opp_char)
                except ValueError:
                    opposing_score = 0

            if me_score > opposing_score:
                me += 1
            elif me_score < opposing_score:
                opposing += 1

        if me > opposing:
            return "We won"
        elif me < opposing:
            return "We lost"
        else:
            return "It was a tie"


print(battle("Hello", "World"))  # "We lost"
print(battle("pizza", "salad"))  # "We won"
print(battle("C@T5", "D0G$"))  # "We won"
print(battle("kn!ght", "orc"))  # "Opponent retreated"
print(battle("PC", "Mac"))  # "We retreated"
print(battle("Wizards", "Dragons"))  # "It was a tie"
print(battle("Mr. Smith", "Dr. Jones"))  # "It was a tie"
