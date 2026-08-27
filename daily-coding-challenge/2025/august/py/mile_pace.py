"""

Mile Pace

Given a number of miles ran, and a time in "MM:SS" (minutes:seconds) it took to run those miles, return a string for the average time it took to run each mile in the format "MM:SS".
  Add leading zeros when needed.

Tests:
  mile_pace(3, "24:00") should return "08:00".
  mile_pace(1, "06:45") should return "06:45".
  mile_pace(2, "07:00") should return "03:30".
  mile_pace(26.2, "120:35") should return "04:36".

"""

import math


def mile_pace(miles, duration):
    temp = duration.split(":")
    time = int(temp[0]) * 60 + int(temp[1])

    pace = time / miles
    mins = math.floor(pace / 60)
    secs = math.floor(pace % 60)

    return f"{mins:02d}:{secs:02d}"


print(mile_pace(3, "24:00"))  # "08:00"
print(mile_pace(1, "06:45"))  # "06:45"
print(mile_pace(2, "07:00"))  # "03:30"
print(mile_pace(26.2, "120:35"))  # "04:36"
