"""

Factorializer

Given an integer from zero to 20, return the factorial of that number. The factorial of a number is the product of all the numbers between 1 and the given number.
  The factorial of zero is 1.

Tests:
  factorial(0) should return 1.
  factorial(5) should return 120.
  factorial(20) should return 2432902008176640000.

"""


def factorial(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)


print(factorial(0))  # 1
print(factorial(5))  # 120
print(factorial(20))  # 2432902008176640000
