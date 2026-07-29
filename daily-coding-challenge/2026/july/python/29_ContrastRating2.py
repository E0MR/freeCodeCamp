"""

Contrast Rating 2

Given two relative luminance values and a boolean indicating whether the text is large, return the WCAG contrast rating using the following method:

Calculate the contrast ratio by adding 0.05 to each luminance value, then dividing the lighter one by the darker one. The lighter one will always be the first argument.

Return the rating based on the contrast ratio using the following table:
  Rating	      Normal Text	        Large Text
  "AAA"	        7.0+	              4.5+
  "AA"	        4.5+	              3.0+
  "Fail"	      below 4.5	          below 3.0

Tests:
  get_contrast_rating(1.0, 0.0, False) should return "AAA".
  get_contrast_rating(0.9015, 0.1364, False) should return "AA".
  get_contrast_rating(0.8965, 0.1628, False) should return "Fail".
  get_contrast_rating(0.7469, 0.0957, True) should return "AAA".
  get_contrast_rating(0.7489, 0.2018, True) should return "AA".
  get_contrast_rating(0.6571, 0.1974, True) should return "Fail".

"""


def get_contrast_rating(l1, l2, is_large_text):
    lighter = l1 + 0.05
    darker = l2 + 0.05
    contrast_ratio = lighter / darker

    if is_large_text:
        if contrast_ratio >= 4.5:
            return "AAA"
        if contrast_ratio >= 3:
            return "AA"
        if contrast_ratio < 3:
            return "Fail"
    else:
        if contrast_ratio >= 7:
            return "AAA"
        if contrast_ratio >= 4.5:
            return "AA"
        if contrast_ratio < 4.5:
            return "Fail"


print(get_contrast_rating(1.0, 0.0, False))  # "AAA".
print(get_contrast_rating(0.9015, 0.1364, False))  # "AA".
print(get_contrast_rating(0.8965, 0.1628, False))  # "Fail".
print(get_contrast_rating(0.7469, 0.0957, True))  # "AAA".
print(get_contrast_rating(0.7489, 0.2018, True))  # "AA".
print(get_contrast_rating(0.6571, 0.1974, True))  # "Fail".
