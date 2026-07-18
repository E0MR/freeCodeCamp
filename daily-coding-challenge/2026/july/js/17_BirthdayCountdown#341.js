/*

Birthday Countdown

Given today's date and a birthday, return the number of days until the person's next birthday.
  Today's date is given as a string in "YYYY-MM-DD" format, with leading zeros, for example: "2026-07-16".
  The birthday is given as a string in "M/D" format, without leading zeros, for example: "9/7".
  If today is their birthday, return the number of days until their next birthday (not 0).
  Leap years should be accounted for.

Tests:
  daysUntilBirthday("2026-07-16", "9/7") should return 53.
  daysUntilBirthday("2026-07-16", "3/22") should return 249.
  daysUntilBirthday("2026-07-16", "7/16") should return 365.
  daysUntilBirthday("2024-02-28", "3/1") should return 2.
  daysUntilBirthday("2023-04-24", "12/30") should return 250.
  daysUntilBirthday("2024-03-01", "2/29") should return 1460.
  daysUntilBirthday("2096-03-01", "2/29") should return 2920.

*/

function daysUntilBirthday(today, birthday) {
  let todayDate = new Date(today);

  let birthdayArray = birthday.split("/");
  let birthdayDay =
    birthdayArray[1].length > 1 ? birthdayArray[1] : `0${birthdayArray[1]}`;
  let birthdayMonth =
    birthdayArray[0].length > 1 ? birthdayArray[0] : `0${birthdayArray[0]}`;
  let year = Number(today.split("-")[0]);
  let birthdayDate = new Date(`${year}-${birthdayMonth}-${birthdayDay}`);

  // Leap years
  if (birthday == "2/29") {
    year % 4 == 0 && (year + 4) % 100 == 0 ? (year += 8) : (year += 4);
    console.log("year ", year);
    birthdayDate = new Date(`${year}-${birthdayMonth}-${birthdayDay}`);
  }

  if (birthdayDate <= todayDate) {
    year += 1;
    birthdayDate = new Date(`${year}-${birthdayMonth}-${birthdayDay}`);
  }

  let diffTime = Math.abs(birthdayDate - todayDate);

  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

console.log(daysUntilBirthday("2026-07-16", "9/7")); // 53.
console.log(daysUntilBirthday("2026-07-16", "3/22")); // 249.
console.log(daysUntilBirthday("2026-07-16", "7/16")); // 365.
console.log(daysUntilBirthday("2024-02-28", "3/1")); // 2.
console.log(daysUntilBirthday("2023-04-24", "12/30")); // 250.
console.log(daysUntilBirthday("2024-03-01", "2/29")); // 1460.
console.log(daysUntilBirthday("2096-03-01", "2/29")); // 2920.
