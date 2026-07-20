"""

Issue Triage

Given a number of milliseconds since the last post on an issue, and the last message posted on the issue, determine what you should do with the issue according to these rules:
  If the last message is less than 7 days ago, return "leave it"
  If the last message is 7 or more days ago and its content contains "bump" (case-insensitive), return "close it"
  Otherwise, return "bump it"

Tests:
  triage_issue(86400000, "Lets fix it") should return "leave it".
  triage_issue(1209600000, "still waiting") should return "bump it".
  triage_issue(864000000, "bump") should return "close it".
  triage_issue(604800000, "Do we still want this?") should return "bump it".
  triage_issue(604800000, "Bumping this") should return "close it".
  triage_issue(345600000, "I'll make a PR") should return "leave it".

"""

import re


def triage_issue(ms, message):
    days_num = ms / (1000 * 60 * 60 * 24)

    if days_num >= 7:
        if re.search(r"bump", message, re.IGNORECASE):
            return "close it"
        else:
            return "bump it"

    return "leave it"


print(triage_issue(86400000, "Lets fix it"))  # "leave it".
print(triage_issue(1209600000, "still waiting"))  # "bump it".
print(triage_issue(864000000, "bump"))  # "close it".
print(triage_issue(604800000, "Do we still want this?"))  # "bump it".
print(triage_issue(604800000, "Bumping this"))  # "close it".
print(triage_issue(345600000, "I'll make a PR"))  # "leave it".
