"""

Pet Age Calculator

Given a pet type and age in human years, return the equivalent age in pet years using the following conversion table:
  Pet	                  Multiplier
  "dog"	                7
  "cat"	                6
  "rabbit"	            8
  "hamster"	            30
  "guinea pig"	        12
  "goldfish"	          6
  "bird"	              5

Tests:
  pet_years("dog", 5) should return 35.
  pet_years("cat", 9) should return 54.
  pet_years("rabbit", 3) should return 24.
  pet_years("hamster", 4) should return 120.
  pet_years("guinea pig", 5) should return 60.
  pet_years("goldfish", 2) should return 12.
  pet_years("bird", 1) should return 5.

"""


def pet_years(pet, age):
    pets_ages_in_human_years = {
        "dog": 7,
        "cat": 6,
        "rabbit": 8,
        "hamster": 30,
        "guinea pig": 12,
        "goldfish": 6,
        "bird": 5,
    }
    return pets_ages_in_human_years[pet] * age


print(pet_years("dog", 5))  # 35
print(pet_years("cat", 9))  # 54
print(pet_years("rabbit", 3))  # 24
print(pet_years("hamster", 4))  # 120
print(pet_years("guinea pig", 5))  # 60
print(pet_years("goldfish", 2))  # 12
print(pet_years("bird", 1))  # 5
