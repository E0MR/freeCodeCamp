"""

Game Theory

Given two equal length strings representing two players' strategies for a game, return the scores as an array [player1, player2].
  The given strings will only contain one of two letters: "C" (cooperate) or "D" (defect).
  Each character represents one round, scored as follows:
    If both players cooperate, each scores 3.
    If both players defect, each scores 1.
    If one player defects and the other cooperates, the defector scores 5 and the cooperator scores 0.

Tests:
  play_game("CCCC", "CCCC") should return [12, 12].
  play_game("DDDD", "DDDD") should return [4, 4].
  play_game("CCDD", "CDDD") should return [5, 10].
  play_game("CCCDCDCCCDDC", "CCDDCDCDDCCD") should return [24, 34].
  play_game("DDCCDDDDCDDCDDDCDD", "CCDCCCDCCCDCCCCDCC") should return [66, 21].

"""


def play_game(p1, p2):
    p1_score = 0
    p2_score = 0

    for move1, move2 in zip(p1, p2):
        if move1 == move2:
            if move1 == "C":
                p1_score += 3
                p2_score += 3
            else:
                p1_score += 1
                p2_score += 1
        else:
            if move1 == "C":
                p2_score += 5
            else:
                p1_score += 5

    return [p1_score, p2_score]


print(play_game("CCCC", "CCCC"))  # [12, 12].
print(play_game("DDDD", "DDDD"))  # [4, 4].
print(play_game("CCDD", "CDDD"))  # [5, 10].
print(play_game("CCCDCDCCCDDC", "CCDDCDCDDCCD"))  # [24, 34].
print(play_game("DDCCDDDDCDDCDDDCDD", "CCDCCCDCCCDCCCCDCC"))  # [66, 21].
