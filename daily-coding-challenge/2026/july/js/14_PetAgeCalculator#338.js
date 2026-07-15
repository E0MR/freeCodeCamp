/*

Pet Age Calculator

Given a pet type and age in human years, return the equivalent age in pet years using the following conversion table:
  Pet	                  Multiplier
  "dog"	                7
  "cat"	                6
  "rabbit"	            8
  "hamster"	            30
  "guinea pig"	        12
  "goldfish"	          6
  "bird"	              5

Tests:
  petYears("dog", 5) should return 35.
  petYears("cat", 9) should return 54.
  petYears("rabbit", 3) should return 24.
  petYears("hamster", 4) should return 120.
  petYears("guinea pig", 5) should return 60.
  petYears("goldfish", 2) should return 12.
  petYears("bird", 1) should return 5.

*/

function petYears(pet, age) {
  let petsAgesInHumanYears = {
    dog: 7,
    cat: 6,
    rabbit: 8,
    hamster: 30,
    "guinea pig": 12,
    goldfish: 6,
    bird: 5,
  };
  return petsAgesInHumanYears[pet] * age;
}

console.log(petYears("dog", 5)); // 35
console.log(petYears("cat", 9)); // 54
console.log(petYears("rabbit", 3)); // 24
console.log(petYears("hamster", 4)); // 120
console.log(petYears("guinea pig", 5)); // 60
console.log(petYears("goldfish", 2)); // 12
console.log(petYears("bird", 1)); // 5
