"""

Lucky Number

Given a string of a person's first and last name, calculate their lucky number using the following rules:
  First and last names are separated by a space
  Find the vowel and consonant count for each name
  Multiply the smaller vowel and consonant counts by each other and then by the length of the smaller name
  Do the same for the two larger counts and the larger name
  Subtract the smaller value from the larger one to get their lucky number

If the final value is zero (0), return 13.

Tests:
  get_lucky_number("John Doe") should return 21.
  get_lucky_number("Olivia Lewis") should return 52.
  get_lucky_number("James Wilson") should return 18.
  get_lucky_number("Elizabeth Hernandez") should return 81.
  get_lucky_number("Mike Walker") should return 32.
  get_lucky_number("Chloe Perez") should return 13.

"""


def get_lucky_number(name):
    vowels = {"a", "e", "i", "o", "u"}
    first_name, last_name = name.split(" ")

    numbers = {
        "vowelsNum1": 0,
        "vowelsNum2": 0,
        "constantsNum1": 0,
        "constantsNum2": 0,
        "shorterName": min(len(first_name), len(last_name)),
        "tallerName": max(len(first_name), len(last_name)),
    }

    for i, part in enumerate([first_name, last_name]):
        for char in part:
            if char.lower() in vowels:
                numbers[f"vowelsNum{i + 1}"] += 1
            else:
                numbers[f"constantsNum{i + 1}"] += 1

    lucky_number = (
        max(numbers["vowelsNum1"], numbers["vowelsNum2"])
        * max(numbers["constantsNum1"], numbers["constantsNum2"])
        * numbers["tallerName"]
    ) - (
        min(numbers["vowelsNum1"], numbers["vowelsNum2"])
        * min(numbers["constantsNum1"], numbers["constantsNum2"])
        * numbers["shorterName"]
    )

    return lucky_number if lucky_number else 13


print(get_lucky_number("John Doe"))  # 21.
print(get_lucky_number("Olivia Lewis"))  # 52.
print(get_lucky_number("James Wilson"))  # 18.
print(get_lucky_number("Elizabeth Hernandez"))  # 81.
print(get_lucky_number("Mike Walker"))  # 32.
print(get_lucky_number("Chloe Perez"))  # 13.


"""

def get_lucky_number_clean(name):
    vowels = {"a", "e", "i", "o", "u"}
    first, last = name.split(" ")

    v1 = sum(1 for c in first if c.lower() in vowels)
    v2 = sum(1 for c in last if c.lower() in vowels)

    c1, c2 = len(first) - v1, len(last) - v2
    short, tall = min(len(first), len(last)), max(len(first), len(last))

    lucky_number = (max(v1, v2) * max(c1, c2) * tall) - (
        min(v1, v2) * min(c1, c2) * short
    )

    return lucky_number if lucky_number else 13

"""
