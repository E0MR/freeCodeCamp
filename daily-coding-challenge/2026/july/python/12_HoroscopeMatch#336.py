"""

Horoscope Match

Given two star sign strings, return their compatibility percentage.

The signs are arranged in a wheel of 12 positions in this order: "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces", wrapping back to "Aries" after "Pisces". Find the shortest distance between the two signs and return the compatibility:
  Distance	    Compatibility
  0	            "100%"
  1	            "40%"
  2	            "80%"
  3	            "30%"
  4	            "90%"
  5	            "20%"
  6	            "50%"

Tests:
  horoscope_match("Libra", "Sagittarius") should return "80%".
  horoscope_match("Gemini", "Scorpio") should return "20%".
  horoscope_match("Pisces", "Aries") should return "40%".
  horoscope_match("Capricorn", "Cancer") should return "50%".
  horoscope_match("Aquarius", "Aquarius") should return "100%".
  horoscope_match("Virgo", "Taurus") should return "90%".
  horoscope_match("Leo", "Scorpio") should return "30%".

"""


def horoscope_match(sign1, sign2):
    wheel = [
        "Aries",
        "Taurus",
        "Gemini",
        "Cancer",
        "Leo",
        "Virgo",
        "Libra",
        "Scorpio",
        "Sagittarius",
        "Capricorn",
        "Aquarius",
        "Pisces",
    ]
    compatibility = {
        0: "100%",
        1: "40%",
        2: "80%",
        3: "30%",
        4: "90%",
        5: "20%",
        6: "50%",
    }

    sign1Index = wheel.index(sign1)
    sign2Index = wheel.index(sign2)
    firstDistance = abs(sign1Index - sign2Index)
    secondDistance = len(wheel) - abs(sign1Index - sign2Index)

    distance = firstDistance if firstDistance < secondDistance else secondDistance

    return compatibility[distance]


print(horoscope_match("Libra", "Sagittarius"))  # "80%".
print(horoscope_match("Gemini", "Scorpio"))  # "20%".
print(horoscope_match("Pisces", "Aries"))  # "40%".
print(horoscope_match("Capricorn", "Cancer"))  # "50%".
print(horoscope_match("Aquarius", "Aquarius"))  # "100%".
print(horoscope_match("Virgo", "Taurus"))  # "90%".
print(horoscope_match("Leo", "Scorpio"))  # "30%".
