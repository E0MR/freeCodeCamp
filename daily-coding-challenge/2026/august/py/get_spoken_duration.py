"""

Spoken Duration

Given a number of seconds, return the duration in spoken English.
  Break the duration into hours, minutes, and seconds.
  Skip any zero values.
  Use singular or plural as appropriate ("1 hour", "2 hours").
  If present, join the last two units with "and", and the second and third to last units with a comma ("1 hour, 2 minutes and 3 seconds").

Tests:
  get_spoken_duration(3723) should return "1 hour, 2 minutes and 3 seconds".
  get_spoken_duration(7295) should return "2 hours, 1 minute and 35 seconds".
  get_spoken_duration(8521) should return "2 hours, 22 minutes and 1 second".
  get_spoken_duration(435) should return "7 minutes and 15 seconds".
  get_spoken_duration(14455) should return "4 hours and 55 seconds".
  get_spoken_duration(72000) should return "20 hours".
  get_spoken_duration(1) should return "1 second".

"""


def get_spoken_duration(seconds):
    if seconds == 0:
        return "0 seconds"

    hours = seconds // 3600
    mins = (seconds % 3600) // 60
    secs = seconds % 60

    duration = []

    if hours > 0:
        duration.append(f"{hours} hour" if hours == 1 else f"{hours} hours")
    if mins > 0:
        duration.append(f"{mins} minute" if mins == 1 else f"{mins} minutes")
    if secs > 0:
        duration.append(
            f"{secs} second"
            if secs == 1
            else (
                f"{secs} seconds"
                if "secs" in locals() and secs > 1
                else f"{secs} second"
            )
        )

    duration = []
    if hours > 0:
        duration.append(f"{hours} hour" if hours == 1 else f"{hours} hours")
    if mins > 0:
        duration.append(f"{mins} minute" if mins == 1 else f"{mins} minutes")
    if secs > 0:
        duration.append(f"{secs} second" if secs == 1 else f"{secs} seconds")

    if len(duration) == 1:
        return duration[0]
    elif len(duration) == 2:
        return f"{duration[0]} and {duration[1]}"
    else:
        return f"{', '.join(duration[:-1])} and {duration[-1]}"


print(get_spoken_duration(3723))  # "1 hour, 2 minutes and 3 seconds"
print(get_spoken_duration(7295))  # "2 hours, 1 minute and 35 seconds"
print(get_spoken_duration(8521))  # "2 hours, 22 minutes and 1 second"
print(get_spoken_duration(435))  # "7 minutes and 15 seconds"
print(get_spoken_duration(14455))  # "4 hours and 55 seconds"
print(get_spoken_duration(72000))  # "20 hours"
print(get_spoken_duration(1))  # "1 second"


"""
    
def get_spoken_duration(seconds: int) -> str:
    if seconds == 0:
        return "0 seconds"

    hours, remainder = divmod(seconds, 3600)
    mins, secs = divmod(remainder, 60)

    parts = []
    if hours:
        parts.append(f"{hours} hour{'s' if hours > 1 else ''}")
    if mins:
        parts.append(f"{mins} minute{'s' if mins > 1 else ''}")
    if secs:
        parts.append(f"{secs} second{'s' if secs > 1 else ''}")

    if len(parts) == 1:
        return parts[0]
    return f"{', '.join(parts[:-1])} and {parts[-1]}"
    
"""
