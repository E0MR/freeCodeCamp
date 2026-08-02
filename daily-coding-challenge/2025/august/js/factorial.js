/*

Factorializer

Given an integer from zero to 20, return the factorial of that number. The factorial of a number is the product of all the numbers between 1 and the given number.
  The factorial of zero is 1.

Tests:
  factorial(0) should return 1.
  factorial(5) should return 120.
  factorial(20) should return 2432902008176640000.

*/

function factorial(n) {
  if (n == 0 || n == 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(0)); // 1
console.log(factorial(5)); // 120
console.log(factorial(20)); // 2432902008176640000

/*

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    
    return result;
}

function factorial(n) {
    const dp = new Array(n + 1);
    dp[0] = 1;
    dp[1] = 1;
    
    for (let i = 2; i <= n; i++) {
        dp[i] = i * dp[i - 1];
    }
    
    return dp[n];
}

*/
