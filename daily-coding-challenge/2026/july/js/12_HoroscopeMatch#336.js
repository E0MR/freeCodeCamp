/*

Horoscope Match

Given two star sign strings, return their compatibility percentage.

The signs are arranged in a wheel of 12 positions in this order: "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces", wrapping back to "Aries" after "Pisces". Find the shortest distance between the two signs and return the compatibility:
  Distance	    Compatibility
  0	            "100%"
  1	            "40%"
  2	            "80%"
  3	            "30%"
  4	            "90%"
  5	            "20%"
  6	            "50%"

Tests:
  horoscopeMatch("Libra", "Sagittarius") should return "80%".
  horoscopeMatch("Gemini", "Scorpio") should return "20%".
  horoscopeMatch("Pisces", "Aries") should return "40%".
  horoscopeMatch("Capricorn", "Cancer") should return "50%".
  horoscopeMatch("Aquarius", "Aquarius") should return "100%".
  horoscopeMatch("Virgo", "Taurus") should return "90%".
  horoscopeMatch("Leo", "Scorpio") should return "30%".

*/

function horoscopeMatch(sign1, sign2) {
  let wheel = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ];
  let compatibility = {
    0: "100%",
    1: "40%",
    2: "80%",
    3: "30%",
    4: "90%",
    5: "20%",
    6: "50%",
  };

  let sign1Index = wheel.indexOf(sign1);
  let sign2Index = wheel.indexOf(sign2);
  let firstDistance = Math.abs(sign1Index - sign2Index);
  let secondDistance = wheel.length - Math.abs(sign1Index - sign2Index);

  let distance =
    firstDistance < secondDistance ? firstDistance : secondDistance;

  return compatibility[distance];
}

console.log(horoscopeMatch("Libra", "Sagittarius")); // "80%".
console.log(horoscopeMatch("Gemini", "Scorpio")); // "20%".
console.log(horoscopeMatch("Pisces", "Aries")); // "40%".
console.log(horoscopeMatch("Capricorn", "Cancer")); // "50%".
console.log(horoscopeMatch("Aquarius", "Aquarius")); // "100%".
console.log(horoscopeMatch("Virgo", "Taurus")); // "90%".
console.log(horoscopeMatch("Leo", "Scorpio")); // "30%".
