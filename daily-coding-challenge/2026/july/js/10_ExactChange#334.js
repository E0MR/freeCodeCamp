/*

Exact Change

Given an integer amount in cents, return the number of distinct ways to make exact change using pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).

Tests:
  exactChange(3) should return 1.
  exactChange(9) should return 2.
  exactChange(17) should return 6.
  exactChange(39) should return 24.
  exactChange(61) should return 73.
  exactChange(99) should return 213.

*/

function exactChange(amount) {
  const coins = [1, 5, 10, 25];
  const waysNum = Array(amount + 1).fill(0);

  waysNum[0] = 1;

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      waysNum[i] += waysNum[i - coin];
    }
  }

  return waysNum[amount];
}

console.log(exactChange(3)); // 1.
console.log(exactChange(9)); // 2.
console.log(exactChange(17)); // 6.
console.log(exactChange(39)); // 24.
console.log(exactChange(61)); // 73.
console.log(exactChange(99)); // 213.
