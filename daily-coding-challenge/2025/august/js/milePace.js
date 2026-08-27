/*

Mile Pace

Given a number of miles ran, and a time in "MM:SS" (minutes:seconds) it took to run those miles, return a string for the average time it took to run each mile in the format "MM:SS".
  Add leading zeros when needed.

Tests:
  milePace(3, "24:00") should return "08:00".
  milePace(1, "06:45") should return "06:45".
  milePace(2, "07:00") should return "03:30".
  milePace(26.2, "120:35") should return "04:36".

*/

function milePace(miles, duration) {
  let temp = duration.split(":");
  let time = parseInt(temp[0]) * 60 + parseInt(temp[1]);

  let milePace = time / miles;
  let mins = Math.floor(milePace / 60);
  let secs = Math.floor(milePace % 60);

  return `${mins > 9 ? mins : "0" + mins}:${secs > 9 ? secs : "0" + secs}`;
}

console.log(milePace(3, "24:00")); // "08:00"
console.log(milePace(1, "06:45")); // "06:45"
console.log(milePace(2, "07:00")); // "03:30"
console.log(milePace(26.2, "120:35")); // "04:36"

/*

function milePace(miles, duration) {
  const temp = duration.split(":");
  const time = parseInt(temp[0]) * 60 + parseInt(temp[1]);

  const milePace = time / miles;
  let mins = Math.floor(milePace / 60);
  let secs = Math.round(milePace % 60); 

  if (secs === 60) {
    mins += 1;
    secs = 0;
  }

  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}



function milePace(miles, timeStr) {
  const [mins, secs] = timeStr.split(':').map(Number);
  const totalSeconds = mins * 60 + secs;
  const secondsPerMile = totalSeconds / miles;

  let paceMinutes = Math.floor(secondsPerMile / 60);
  let paceSeconds = Math.round(secondsPerMile % 60);

  if (paceSeconds === 60) {
    paceMinutes += 1;
    paceSeconds = 0;
  }

  const formattedMins = String(paceMinutes).padStart(2, '0');
  const formattedSecs = String(paceSeconds).padStart(2, '0');

  return `${formattedMins}:${formattedSecs}`;
}

*/
