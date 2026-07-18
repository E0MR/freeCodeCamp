/*

Array Chunks

Given an array and a chunk size, return the array split into sub-arrays of that size.
  The last chunk may be smaller if the array doesn't divide evenly.

Tests:
  chunkArray([1, 2, 3, 4, 5, 6], 3) should return [[1, 2, 3], [4, 5, 6]].
  chunkArray([1, "two", 3, "four", 5, "six", 7, "eight"], 2) should return [[1, "two"], [3, "four"], [5, "six"], [7, "eight"]].
  chunkArray([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]].
  chunkArray(["a", "b", "c", "d", "e"], 1) should return [["a"], ["b"], ["c"], ["d"], ["e"]].
  chunkArray([1, 2, 3], 5) should return [[1, 2, 3]].

*/

function chunkArray(arr, size) {
  let result = [];
  while (arr.length) {
    result.push(arr.splice(0, size));
  }
  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6], 3)); // [[1, 2, 3], [4, 5, 6]].
console.log(chunkArray([1, "two", 3, "four", 5, "six", 7, "eight"], 2)); // [[1, "two"], [3, "four"], [5, "six"], [7, "eight"]].
console.log(chunkArray([1, 2, 3, 4, 5], 3)); // [[1, 2, 3], [4, 5]].
console.log(chunkArray(["a", "b", "c", "d", "e"], 1)); // [["a"], ["b"], ["c"], ["d"], ["e"]].
console.log(chunkArray([1, 2, 3], 5)); // [[1, 2, 3]].
