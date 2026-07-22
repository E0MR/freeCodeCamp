"""

Piggy Bank

Given an object representing a piggy bank, return the total value as a string formatted as "$D.CC".

The object may contain any of the following:
  Coin	        Value
  pennies	      $0.01
  nickels	      $0.05
  dimes	        $0.10
  quarters	    $0.25

Tests:
  piggy_bank({"pennies": 3, "nickels": 5, "dimes": 2, "quarters": 6}) should return "$1.98".
  piggy_bank({"pennies": 1, "nickels": 1, "dimes": 1, "quarters": 1}) should return "$0.41".
  piggy_bank({"nickels": 8, "dimes": 6, "quarters": 5}) should return "$2.25".
  piggy_bank({}) should return "$0.00".
  piggy_bank({"pennies": 146, "nickels": 11, "dimes": 0, "quarters": 19}) should return "$6.76".

"""


def piggy_bank(coins):
    values = {
        "pennies": 0.01,
        "nickels": 0.05,
        "dimes": 0.10,
        "quarters": 0.25,
    }

    total = 0

    for key in coins:
        total += coins[key] * values[key]

    return f"${total:.2f}"


print(piggy_bank({"pennies": 3, "nickels": 5, "dimes": 2, "quarters": 6}))  # "$1.98".
print(piggy_bank({"pennies": 1, "nickels": 1, "dimes": 1, "quarters": 1}))  # "$0.41".
print(piggy_bank({"nickels": 8, "dimes": 6, "quarters": 5}))  # "$2.25".
print(piggy_bank({}))  # "$0.00".
print(
    piggy_bank({"pennies": 146, "nickels": 11, "dimes": 0, "quarters": 19})
)  # "$6.76".




"""
  
def piggy_bank(coins):
  values = {"pennies": 0.01, "nickels": 0.05, "dimes": 0.10, "quarters": 0.25}

  total = sum(coins[key] * values[key] for key in coins)

  return f"${total:.2f}"
  
"""