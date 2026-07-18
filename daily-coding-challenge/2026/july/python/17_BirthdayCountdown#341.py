"""

Birthday Countdown

Given today's date and a birthday, return the number of days until the person's next birthday.
  Today's date is given as a string in "YYYY-MM-DD" format, with leading zeros, for example: "2026-07-16".
  The birthday is given as a string in "M/D" format, without leading zeros, for example: "9/7".
  If today is their birthday, return the number of days until their next birthday (not 0).
  Leap years should be accounted for.

Tests:
  days_until_birthday("2026-07-16", "9/7") should return 53.
  days_until_birthday("2026-07-16", "3/22") should return 249.
  days_until_birthday("2026-07-16", "7/16") should return 365.
  days_until_birthday("2024-02-28", "3/1") should return 2.
  days_until_birthday("2023-04-24", "12/30") should return 250.
  days_until_birthday("2024-03-01", "2/29") should return 1460.
  days_until_birthday("2096-03-01", "2/29") should return 2920.

"""

from datetime import datetime, date


def days_until_birthday(today, birthday):
    today_date = datetime.strptime(today, "%Y-%m-%d").date()

    birth_month, birth_day = map(int, birthday.split("/"))
    year = today_date.year

    if birth_month == 2 and birth_day == 29:
        while True:
            try:
                birthday_date = date(year, birth_month, birth_day)
                break
            except ValueError:
                year += 1
    else:
        birthday_date = date(year, birth_month, birth_day)

    if birthday_date <= today_date:
        year += 1
        if birth_month == 2 and birth_day == 29:
            while True:
                try:
                    birthday_date = date(year, birth_month, birth_day)
                    break
                except ValueError:
                    year += 1
        else:
            birthday_date = date(year, birth_month, birth_day)

    diff = birthday_date - today_date
    return diff.days


print(days_until_birthday("2026-07-16", "9/7"))  # 53.
print(days_until_birthday("2026-07-16", "3/22"))  # 249.
print(days_until_birthday("2026-07-16", "7/16"))  # 365.
print(days_until_birthday("2024-02-28", "3/1"))  # 2.
print(days_until_birthday("2023-04-24", "12/30"))  # 250.
print(days_until_birthday("2024-03-01", "2/29"))  # 1460.
print(days_until_birthday("2096-03-01", "2/29"))  # 2920.
