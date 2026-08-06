/*

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
  getSpokenTime(90, 0) should return "3 o'clock".
  getSpokenTime(160, 120) should return "20 minutes past 5".
  getSpokenTime(255, 180) should return "half past 8".
  getSpokenTime(67.5, 92) should return "quarter past 2".
  getSpokenTime(200, 240) should return "20 minutes to 7".
  getSpokenTime(322.5, 273) should return "quarter to 11".
  getSpokenTime(117.5, 335) should return "5 minutes to 4".

*/

function getSpokenTime(hourAngle, minuteAngle) {
  let nextHour = Math.ceil((hourAngle / 360) * 12);
  let prevHour = Math.floor((hourAngle / 360) * 12);
  let minutes = Math.floor((minuteAngle / 360) * 60);
  let time = {
    0: `${prevHour} o'clock`,
    15: `quarter past ${prevHour}`,
    30: `half past ${prevHour}`,
    45: `quarter to ${nextHour}`,
  };

  if (!time[minutes]) {
    if (minutes < 30) return `${minutes} minutes past ${prevHour}`;
    else return `${60 - minutes} minutes to ${nextHour}`;
  }

  return time[minutes];
}

console.log(getSpokenTime(90, 0)); // "3 o'clock"
console.log(getSpokenTime(160, 120)); // "20 minutes past 5"
console.log(getSpokenTime(255, 180)); // "half past 8"
console.log(getSpokenTime(67.5, 92)); // "quarter past 2"
console.log(getSpokenTime(200, 240)); // "20 minutes to 7"
console.log(getSpokenTime(322.5, 273)); // "quarter to 11"
console.log(getSpokenTime(117.5, 335)); // "5 minutes to 4"

/*

// Gemini

function getSpokenTime(hourAngle, minuteAngle) {
  let totalMinutes = (minuteAngle % 360) / 6;
  let roundedMinutes = Math.round(totalMinutes);

  if (roundedMinutes === 60) {
    roundedMinutes = 0;
    hourAngle += 30;
  }

  let exactHour = (hourAngle % 360) / 30;

  let currentHourNum = Math.floor(exactHour);
  if (currentHourNum === 0) currentHourNum = 12;

  let hourForY = Math.round(exactHour);
  if (hourForY === 0) hourForY = 12;

  let Y = hourForY;
  if (roundedMinutes > 30 && roundedMinutes !== 45) {
    Y = (hourForY % 12) + 1;
  }

  let baseHour = Math.floor((hourAngle % 360) / 30);
  if (baseHour === 0) baseHour = 12;
  let nextHour = (baseHour % 12) + 1;

  let effectiveY = baseHour;
  if (roundedMinutes > 30) {
    effectiveY = nextHour;
  }

  if (roundedMinutes === 0) {
    return `${effectiveY} o'clock`;
  } else if (roundedMinutes === 15) {
    return `quarter past ${baseHour}`;
  } else if (roundedMinutes === 30) {
    return `half past ${baseHour}`;
  } else if (roundedMinutes === 45) {
    return `quarter to ${nextHour}`;
  } else if (roundedMinutes < 30) {
    return `${roundedMinutes} minutes past ${baseHour}`;
  } else {
    let x = 60 - roundedMinutes;
    return `${x} minutes to ${nextHour}`;
  }
}


// Gemini improved my solution !!!

function getSpokenTime(hourAngle, minuteAngle) {
  let minutes = Math.round((minuteAngle % 360) / 6);
  if (minutes === 60) minutes = 0;

  let exactHour = (hourAngle % 360) / 30;
  let prevHour = Math.floor(exactHour);
  if (prevHour === 0) prevHour = 12;
  
  let nextHour = prevHour % 12 + 1;

  let time = {
    0: `${minutes === 0 && exactHour === 0 ? 12 : prevHour} o'clock`,
    15: `quarter past ${prevHour}`,
    30: `half past ${prevHour}`,
    45: `quarter to ${nextHour}`,
  };

  if (time[minutes]) {
    return time[minutes];
  }

  if (minutes < 30) {
    return `${minutes} minutes past ${prevHour}`;
  } else {
    return `${60 - minutes} minutes to ${nextHour}`;
  }
}

// Gemini after I give him tests

function getSpokenTime(hourAngle, minuteAngle) {
  let minutes = Math.round((minuteAngle % 360) / 6);
  if (minutes === 60) minutes = 0;

  let exactHour = (hourAngle % 360) / 30;
  let prevHour = Math.floor(exactHour);
  if (prevHour === 0) prevHour = 12;

  let nextHour = (prevHour % 12) + 1;

  if (minutes === 0) {
    return `${prevHour} o'clock`;
  } else if (minutes === 15) {
    return `quarter past ${prevHour}`;
  } else if (minutes === 30) {
    return `half past ${prevHour}`;
  } else if (minutes === 45) {
    return `quarter to ${nextHour}`;
  } else if (minutes < 30) {
    return `${minutes} minutes past ${prevHour}`;
  } else {
    return `${60 - minutes} minutes to ${nextHour}`;
  }
}

// Gemini after give him console messages 1

function getSpokenTime(hourAngle, minuteAngle) {
  let minutes = Math.round((minuteAngle % 360) / 6);
  if (minutes === 60) minutes = 0;

  let exactHour = hourAngle / 30;
  let prevHour = Math.floor(exactHour);
  if (prevHour === 0) prevHour = 12;
  
  let nextHour = prevHour % 12 + 1;

  if (minutes === 45) {
    nextHour = Math.round(exactHour + 0.5);
    if (nextHour > 12) nextHour = 1;
    if (nextHour === 0) nextHour = 12;
  }

  if (minutes === 0) {
    return `${prevHour} o'clock`;
  } else if (minutes === 15) {
    return `quarter past ${prevHour}`;
  } else if (minutes === 30) {
    return `half past ${prevHour}`;
  } else if (minutes === 45) {
    return `quarter to ${nextHour}`;
  } else if (minutes < 30) {
    return `${minutes} minutes past ${prevHour}`;
  } else {
    let toHour = Math.round(exactHour + 0.5);
    if (toHour > 12) toHour = 1;
    if (toHour === 0) toHour = 12;
    return `${60 - minutes} minutes to ${toHour}`;
  }
}


// Gemini after give him console messages 2 => Finally worked

function getSpokenTime(hourAngle, minuteAngle) {
  let minutes = Math.floor((minuteAngle % 360) / 6);
  
  let exactHour = hourAngle / 30;
  let prevHour = Math.floor(exactHour);
  if (prevHour === 0) prevHour = 12;
  
  let nextHour = prevHour % 12 + 1;

  if (minutes === 0) {
    return `${prevHour} o'clock`;
  } else if (minutes === 15) {
    return `quarter past ${prevHour}`;
  } else if (minutes === 30) {
    return `half past ${prevHour}`;
  } else if (minutes === 45) {
    return `quarter to ${nextHour}`;
  } else if (minutes < 30) {
    return `${minutes} minutes past ${prevHour}`;
  } else {
    let toHour = Math.round(exactHour);
    if (toHour === 0) toHour = 12;
    if (minutes > 30 && minutes !== 45) {
      toHour = toHour % 12 + 1;
    }
    return `${60 - minutes} minutes to ${nextHour}`;
  }
}

*/
