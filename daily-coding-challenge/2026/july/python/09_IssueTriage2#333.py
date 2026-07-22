"""

Issue Triage 2

Given an issue title and an array of current labels, return an updated array of labels based on the following rules:

If the issue doesn't have any labels, add:
  "bug" and "needs triage" if the title contains "error" or "bug"
  "enhancement" and "discussing" if the title contains "feature" or "add"

Otherwise, if the given labels contain:
  "needs triage" and the title contains "simple" or "easy", remove "needs triage" and add "good first issue"
  "discussing" and the title contains "planned" or "next", remove "discussing" and add "on the roadmap"
  Otherwise, if "needs triage" or "discussing" is present, remove it and add "help wanted"

If the title contains:
  "security", add a "critical" label

Tests:
  triage_issue("app crashes with error", []) should return ["bug", "needs triage"].
  triage_issue("app crashes with error", ["bug", "needs triage"]) should return ["bug", "help wanted"].
  triage_issue("add dark mode", []) should return ["enhancement", "discussing"].
  triage_issue("add dark mode", ["enhancement", "discussing"]) should return ["enhancement", "help wanted"].
  triage_issue("xss security bug", []) should return ["bug", "needs triage", "critical"].
  triage_issue("security vulnerability in auth", []) should return ["critical"].
  triage_issue("easy a11y fix", ["bug", "needs triage"]) should return ["bug", "good first issue"].
  triage_issue("planned api migration", ["enhancement", "discussing"]) should return ["enhancement", "on the roadmap"].
  triage_issue("improve security", ["enhancement", "discussing"]) should return ["enhancement", "help wanted", "critical"].

"""

import re


def triage_issue(title, labels):
    updated_labels = list(labels)

    if len(updated_labels) == 0:
        if re.search(r"bug|error", title, re.IGNORECASE):
            updated_labels.extend(["bug", "needs triage"])
        if re.search(r"feature|add", title, re.IGNORECASE):
            updated_labels.extend(["enhancement", "discussing"])
    else:

        def update_label(old_tag, new_tag):
            if old_tag in updated_labels:
                i = updated_labels.index(old_tag)
                updated_labels[i] = new_tag

        if re.search(r"simple|easy", title, re.IGNORECASE):
            update_label("needs triage", "good first issue")
        elif re.search(r"planned|next", title, re.IGNORECASE):
            update_label("discussing", "on the roadmap")
        else:
            update_label("needs triage", "help wanted")
            update_label("discussing", "help wanted")

    if re.search(r"security", title, re.IGNORECASE):
        updated_labels.append("critical")

    return updated_labels


print(triage_issue("app crashes with error", []))  # ["bug", "needs triage"].
print(
    triage_issue("app crashes with error", ["bug", "needs triage"])
)  # ["bug", "help wanted"].
print(triage_issue("add dark mode", []))  # ["enhancement", "discussing"].
print(
    triage_issue("add dark mode", ["enhancement", "discussing"])
)  # ["enhancement", "help wanted"].
print(triage_issue("xss security bug", []))  # ["bug", "needs triage", "critical"].
print(triage_issue("security vulnerability in auth", []))  # ["critical"].
print(
    triage_issue("easy a11y fix", ["bug", "needs triage"])
)  # ["bug", "good first issue"].
print(
    triage_issue("planned api migration", ["enhancement", "discussing"]),
)  # ["enhancement", "on the roadmap"].
print(
    triage_issue("improve security", ["enhancement", "discussing"])
)  # ["enhancement", "help wanted", "critical"].
