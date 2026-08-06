"""

Spoken Time

Given the angles for the hour and minute hands of an analog clock in degrees (clockwise from 12), return the time in spoken English.

Convert the minute hand angle to minutes (360° = 60 minutes), then use the following rules:
  Minutes	            Spoken
  0	                    "Y o'clock"
  15	                "quarter past Y"
  1–29 (excluding 15)	"X minutes past Y"
  30	                "half past Y"
  45	                "quarter to Z"
  31–59 (excluding 45)	"X minutes to Z" (where X is 60 - minutes)
  Where Y is the current hour and Z is the next hour, both derived from the hour hand angle (360° = 12 hours).

Note: Hand angles may not land exactly on a number, consider rounding them somehow.

Tests:
  get_spoken_time(90, 0) should return "3 o'clock".
  get_spoken_time(160, 120) should return "20 minutes past 5".
  get_spoken_time(255, 180) should return "half past 8".
  get_spoken_time(67.5, 92) should return "quarter past 2".
  get_spoken_time(200, 240) should return "20 minutes to 7".
  get_spoken_time(322.5, 273) should return "quarter to 11".
  get_spoken_time(117.5, 335) should return "5 minutes to 4".

"""

import math


def get_spoken_time(hour_angle, minute_angle):
    next_hour = math.ceil((hour_angle / 360) * 12)
    prev_hour = math.floor((hour_angle / 360) * 12)
    minutes = math.floor((minute_angle / 360) * 60)

    time_dict = {
        0: f"{prev_hour} o'clock",
        15: f"quarter past {prev_hour}",
        30: f"half past {prev_hour}",
        45: f"quarter to {next_hour}",
    }

    if minutes not in time_dict:
        if minutes < 30:
            return f"{minutes} minutes past {prev_hour}"
        else:
            return f"{60 - minutes} minutes to {next_hour}"

    return time_dict[minutes]


print(get_spoken_time(90, 0))  # "3 o'clock"
print(get_spoken_time(160, 120))  # "20 minutes past 5"
print(get_spoken_time(255, 180))  # "half past 8"
print(get_spoken_time(67.5, 92))  # "quarter past 2"
print(get_spoken_time(200, 240))  # "20 minutes to 7"
print(get_spoken_time(322.5, 273))  # "quarter to 11"
print(get_spoken_time(117.5, 335))  # "5 minutes to 4"
