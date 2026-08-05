/*

Spoken Duration

Given a number of seconds, return the duration in spoken English.
  Break the duration into hours, minutes, and seconds.
  Skip any zero values.
  Use singular or plural as appropriate ("1 hour", "2 hours").
  If present, join the last two units with "and", and the second and third to last units with a comma ("1 hour, 2 minutes and 3 seconds").

Tests:
  getSpokenDuration(3723) should return "1 hour, 2 minutes and 3 seconds".
  getSpokenDuration(7295) should return "2 hours, 1 minute and 35 seconds".
  getSpokenDuration(8521) should return "2 hours, 22 minutes and 1 second".
  getSpokenDuration(435) should return "7 minutes and 15 seconds".
  getSpokenDuration(14455) should return "4 hours and 55 seconds".
  getSpokenDuration(72000) should return "20 hours".
  getSpokenDuration(1) should return "1 second".

*/

function getSpokenDuration(seconds) {
  let temp = seconds / (60 * 60);
  let hours = Math.floor(temp);
  let mins = Math.floor((temp % 1) * 60);
  let secs = seconds % 60;

  let duration = [];

  if (hours > 0) {
    duration.push(hours > 1 ? `${hours} hours` : `${hours} hour`);
  }
  if (mins > 0) {
    duration.push(mins > 1 ? `${mins} minutes` : `${mins} minute`);
  }

  if (secs > 0) {
    duration.push(secs > 1 ? `${secs} seconds` : `${secs} second`);
  }

  if (duration.length == 1) return duration.join("");
  else if (duration.length == 2) return duration.join(" and ");
  else return `${duration[0]}, ${duration[1]} and ${duration[2]}`;
}

console.log(getSpokenDuration(3723)); // "1 hour, 2 minutes and 3 seconds"
console.log(getSpokenDuration(7295)); // "2 hours, 1 minute and 35 seconds"
console.log(getSpokenDuration(8521)); // "2 hours, 22 minutes and 1 second"
console.log(getSpokenDuration(435)); // "7 minutes and 15 seconds"
console.log(getSpokenDuration(14455)); // "4 hours and 55 seconds"
console.log(getSpokenDuration(72000)); // "20 hours"
console.log(getSpokenDuration(1)); // "1 second"

/*

function getSpokenDuration(seconds) {
  if (seconds === 0) return "0 seconds"; // Optional fallback for zero

  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const parts = [];

  if (hours > 0) {
    parts.push(`${hours} hour${hours === 1 ? "" : "s"}`);
  }
  if (mins > 0) {
    parts.push(`${mins} minute${mins === 1 ? "" : "s"}`);
  }
  if (secs > 0 || parts.length === 0) {
    parts.push(`${secs} second${secs === 1 ? "" : "s"}`);
  }

  if (parts.length === 1) {
    return parts[0];
  } else if (parts.length === 2) {
    return `${parts[0]} and ${parts[1]}`;
  } else {
    return `${parts.slice(0, -1).join(", ")} and ${parts[parts.length - 1]}`;
  }
}

*/
