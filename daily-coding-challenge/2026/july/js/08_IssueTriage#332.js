/*

Issue Triage

Given a number of milliseconds since the last post on an issue, and the last message posted on the issue, determine what you should do with the issue according to these rules:
  If the last message is less than 7 days ago, return "leave it"
  If the last message is 7 or more days ago and its content contains "bump" (case-insensitive), return "close it"
  Otherwise, return "bump it"

Tests:
  triageIssue(86400000, "Lets fix it") should return "leave it".
  triageIssue(1209600000, "still waiting") should return "bump it".
  triageIssue(864000000, "bump") should return "close it".
  triageIssue(604800000, "Do we still want this?") should return "bump it".
  triageIssue(604800000, "Bumping this") should return "close it".
  triageIssue(345600000, "I'll make a PR") should return "leave it".

*/

function triageIssue(ms, message) {
  let daysNum = ms / (1000 * 60 * 60 * 24);
  if (daysNum >= 7) {
    if (/bump/i.test(message)) {
      return "close it";
    } else {
      return "bump it";
    }
  }

  return "leave it";
}

console.log(triageIssue(86400000, "Lets fix it")); // "leave it".
console.log(triageIssue(1209600000, "still waiting")); // "bump it".
console.log(triageIssue(864000000, "bump")); // "close it".
console.log(triageIssue(604800000, "Do we still want this?")); // "bump it".
console.log(triageIssue(604800000, "Bumping this")); // "close it".
console.log(triageIssue(345600000, "I'll make a PR")); // "leave it".
