/*

Elevator Stops

Given a number for the current floor of an elevator and an array of requested floors, return an array of the order the elevator should visit them to minimize number of floors traveled.
  If tied, go up first
  Floors with a request must be visited when the elevator first passes them

Tests:
  elevatorStops(5, [2, 8, 3, 9]) should return [3, 2, 8, 9].
  elevatorStops(6, [2, 10, 8, 3, 1, 9]) should return [8, 9, 10, 3, 2, 1].
  elevatorStops(1, [4, 8, 3, 6, 9]) should return [3, 4, 6, 8, 9].
  elevatorStops(12, [6, 10, 7, 3, 1, 4]) should return [10, 7, 6, 4, 3, 1].
  elevatorStops(11, [2, 8, 23, 5, 12, 10, 6, 9, 19]) should return [10, 9, 8, 6, 5, 2, 12, 19, 23].

*/

function elevatorStops(currentFloor, stops) {
  let up = Math.abs(Math.max(...stops) - currentFloor);
  let down = Math.abs(Math.min(...stops) - currentFloor);
  let upFloors = stops
    .filter((floor) => floor > currentFloor)
    .sort((a, b) => a - b);
  let downFloors = stops
    .filter((floor) => floor < currentFloor)
    .sort((a, b) => a - b)
    .reverse();

  if (up < down) {
    return [...upFloors, ...downFloors];
  } else {
    return [...downFloors, ...upFloors];
  }
}

console.log(elevatorStops(5, [2, 8, 3, 9])); // [3, 2, 8, 9].
console.log(elevatorStops(6, [2, 10, 8, 3, 1, 9])); // [8, 9, 10, 3, 2, 1].
console.log(elevatorStops(1, [4, 8, 3, 6, 9])); // [3, 4, 6, 8, 9].
console.log(elevatorStops(12, [6, 10, 7, 3, 1, 4])); // [10, 7, 6, 4, 3, 1].
console.log(elevatorStops(11, [2, 8, 23, 5, 12, 10, 6, 9, 19])); // [10, 9, 8, 6, 5, 2, 12, 19, 23].
