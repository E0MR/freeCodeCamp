"""

Contrast Rating 1

Given a contrast ratio and a boolean indicating whether the text is large, return the WCAG rating using the following table:
  Rating	      Normal Text	        Large Text
  "AAA"	        7.0+	              4.5+
  "AA"	        4.5+	              3.0+
  "Fail"	      below 4.5	          below 3.0

Tests:
  get_contrast_rating("7.5", False) should return "AAA".
  get_contrast_rating("4.8", False) should return "AA".
  get_contrast_rating("4.2", False) should return "Fail".
  get_contrast_rating("4.5", True) should return "AAA".
  get_contrast_rating("3.0", True) should return "AA".
  get_contrast_rating("2.7", False) should return "Fail".

"""


def get_contrast_rating(ratio, is_large_text):
    ratioNum = float(ratio)
    if is_large_text:
        if ratioNum >= 4.5:
            return "AAA"
        if ratioNum >= 3:
            return "AA"
        if ratioNum < 3:
            return "Fail"
    else:
        if ratioNum >= 7:
            return "AAA"
        if ratioNum >= 4.5:
            return "AA"
        if ratioNum < 4.5:
            return "Fail"


print(get_contrast_rating("7.5", False))  # "AAA".
print(get_contrast_rating("4.8", False))  # "AA".
print(get_contrast_rating("4.2", False))  # "Fail".
print(get_contrast_rating("4.5", True))  # "AAA".
print(get_contrast_rating("3.0", True))  # "AA".
print(get_contrast_rating("2.7", False))  # "Fail".
