"""

S P A C E J A M

Given a string, remove all spaces from the string, insert two spaces between every character, convert all alphabetical letters to uppercase, and return the result.
  Non-alphabetical characters should remain unchanged (except for spaces).

Tests:
  space_jam("freeCodeCamp") should return "F  R  E  E  C  O  D  E  C  A  M  P".
  space_jam("   free   Code   Camp   ") should return "F  R  E  E  C  O  D  E  C  A  M  P".
  space_jam("Hello World?!") should return "H  E  L  L  O  W  O  R  L  D  ?  !".
  space_jam("C@t$ & D0g$") should return "C  @  T  $  &  D  0  G  $".
  space_jam("allyourbase") should return "A  L  L  Y  O  U  R  B  A  S  E".

"""


def space_jam(s):
    return "  ".join(list(s.replace(" ", "").upper()))


print(space_jam("freeCodeCamp"))  # "F  R  E  E  C  O  D  E  C  A  M  P"
print(space_jam("   free   Code   Camp   "))  # "F  R  E  E  C  O  D  E  C  A  M  P"
print(space_jam("Hello World?!"))  # "H  E  L  L  O  W  O  R  L  D  ?  !"
print(space_jam("C@t$ & D0g$"))  # "C  @  T  $  &  D  0  G  $"
print(space_jam("allyourbase"))  # "A  L  L  Y  O  U  R  B  A  S  E"
