/*

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
  triageIssue("app crashes with error", []) should return ["bug", "needs triage"].
  triageIssue("app crashes with error", ["bug", "needs triage"]) should return ["bug", "help wanted"].
  triageIssue("add dark mode", []) should return ["enhancement", "discussing"].
  triageIssue("add dark mode", ["enhancement", "discussing"]) should return ["enhancement", "help wanted"].
  triageIssue("xss security bug", []) should return ["bug", "needs triage", "critical"].
  triageIssue("security vulnerability in auth", []) should return ["critical"].
  triageIssue("easy a11y fix", ["bug", "needs triage"]) should return ["bug", "good first issue"].
  triageIssue("planned api migration", ["enhancement", "discussing"]) should return ["enhancement", "on the roadmap"].
  triageIssue("improve security", ["enhancement", "discussing"]) should return ["enhancement", "help wanted", "critical"].

*/

function triageIssue(title, labels) {
  const updatedLabels = [...labels];

  if (updatedLabels.length == 0) {
    if (/bug|error/i.test(title)) updatedLabels.push("bug", "needs triage");
    if (/feature|add/i.test(title)) updatedLabels.push("enhancement", "discussing");
  } else {
    const updateLabel = (oldTag, newTag) => {
      const i = updatedLabels.indexOf(oldTag);
      if (i !== -1) updatedLabels[i] = newTag;
    };

    if (/simple|easy/i.test(title))
      updateLabel("needs triage", "good first issue");
    else if (/planned|next/i.test(title))
      updateLabel("discussing", "on the roadmap");
    else {
      updateLabel("needs triage", "help wanted");
      updateLabel("discussing", "help wanted");
    }
  }
  if (/security/i.test(title)) updatedLabels.push("critical");
  return updatedLabels;
}

console.log(triageIssue("app crashes with error", [])); // ["bug", "needs triage"].
console.log(triageIssue("app crashes with error", ["bug", "needs triage"])); // ["bug", "help wanted"].
console.log(triageIssue("add dark mode", [])); // ["enhancement", "discussing"].
console.log(triageIssue("add dark mode", ["enhancement", "discussing"])); // ["enhancement", "help wanted"].
console.log(triageIssue("xss security bug", [])); // ["bug", "needs triage", "critical"].
console.log(triageIssue("security vulnerability in auth", [])); // ["critical"].
console.log(triageIssue("easy a11y fix", ["bug", "needs triage"])); // ["bug", "good first issue"].
console.log(
  triageIssue("planned api migration", ["enhancement", "discussing"]),
); // ["enhancement", "on the roadmap"].
console.log(triageIssue("improve security", ["enhancement", "discussing"])); // ["enhancement", "help wanted", "critical"].
