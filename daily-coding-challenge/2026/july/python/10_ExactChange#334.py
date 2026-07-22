"""

Exact Change

Given an integer amount in cents, return the number of distinct ways to make exact change using pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).

Tests:
  exact_change(3) should return 1.
  exact_change(9) should return 2.
  exact_change(17) should return 6.
  exact_change(39) should return 24.
  exact_change(61) should return 73.
  exact_change(99) should return 213.

"""


def exact_change(amount):
    coins = [1, 5, 10, 25]

    count_ways = [0] * (amount + 1)

    count_ways[0] = 1

    for coin in coins:
        for i in range(coin, amount + 1):
            count_ways[i] += count_ways[i - coin]

    return count_ways[amount]


print(exact_change(12))

print(exact_change(3))  # 1.
print(exact_change(9))  # 2.
print(exact_change(17))  # 6.
print(exact_change(39))  # 24.
print(exact_change(61))  # 73.
print(exact_change(99))  # 213.
