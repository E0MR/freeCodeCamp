"""

Contrast Rating 3

Given two arrays representing RGB values and a boolean indicating whether the text is large, return the WCAG contrast rating using the following method:

First, convert each RGB value to relative luminance:
  Divide each channel [R, G, B] by 255 to get a value between 0 and 1
  Apply the gamma correction formula to each channel:
    If the channel value is less than or equal to 0.04045: channel / 12.92
    Otherwise: ((channel + 0.055) / 1.055) ^ 2.4
  Calculate luminance: 0.2126 * R + 0.7152 * G + 0.0722 * B

  Then, calculate the contrast ratio by adding 0.05 to each luminance value, then dividing the lighter one by the darker one. The lighter one will always be the first argument.

Return the rating based on the contrast ratio using the following table:
  Rating	    Normal Text	        Large Text
  "AAA"	        7.0+	            4.5+
  "AA"	        4.5+	            3.0+
  "Fail"	    below 4.5	        below 3.0

Tests:
  get_contrast_rating([255, 255, 255], [0, 0, 0], False) should return "AAA".
  get_contrast_rating([215, 188, 188], [55, 55, 55], False) should return "AA".
  get_contrast_rating([143, 144, 210], [46, 47, 61], False) should return "Fail".
  get_contrast_rating([167, 167, 210], [53, 10, 53], True) should return "AAA".
  get_contrast_rating([135, 147, 155], [60, 70, 90], True) should return "AA".
  get_contrast_rating([125, 210, 195], [105, 130, 90], True) should return "Fail".

"""


def get_contrast_rating(rgb1, rgb2, is_large_text):
    rgb_channel1 = [
        (
            val / 12.92
            if (val := value / 255) <= 0.04045
            else ((val + 0.055) / 1.055) ** 2.4
        )
        for value in rgb1
    ]
    rgb_channel2 = [
        (
            val / 12.92
            if (val := value / 255) <= 0.04045
            else ((val + 0.055) / 1.055) ** 2.4
        )
        for value in rgb2
    ]

    lighter_luminance = (
        0.2126 * rgb_channel1[0]
        + 0.7152 * rgb_channel1[1]
        + 0.0722 * rgb_channel1[2]
        + 0.05
    )
    darker_luminance = (
        0.2126 * rgb_channel2[0]
        + 0.7152 * rgb_channel2[1]
        + 0.0722 * rgb_channel2[2]
        + 0.05
    )

    contrast_ratio = lighter_luminance / darker_luminance

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


print(get_contrast_rating([255, 255, 255], [0, 0, 0], False))  # "AAA".
print(get_contrast_rating([215, 188, 188], [55, 55, 55], False))  # "AA".
print(get_contrast_rating([143, 144, 210], [46, 47, 61], False))  # "Fail".
print(get_contrast_rating([167, 167, 210], [53, 10, 53], True))  # "AAA".
print(get_contrast_rating([135, 147, 155], [60, 70, 90], True))  # "AA".
print(get_contrast_rating([125, 210, 195], [105, 130, 90], True))  # "Fail".
