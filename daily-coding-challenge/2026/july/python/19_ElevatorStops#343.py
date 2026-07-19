"""

Elevator Stops

Given a number for the current floor of an elevator and an array of requested floors, return an array of the order the elevator should visit them to minimize number of floors traveled.
  If tied, go up first
  Floors with a request must be visited when the elevator first passes them

Tests:
  elevator_stops(5, [2, 8, 3, 9]) should return [3, 2, 8, 9].
  elevator_stops(6, [2, 10, 8, 3, 1, 9]) should return [8, 9, 10, 3, 2, 1].
  elevator_stops(1, [4, 8, 3, 6, 9]) should return [3, 4, 6, 8, 9].
  elevator_stops(12, [6, 10, 7, 3, 1, 4]) should return [10, 7, 6, 4, 3, 1].
  elevator_stops(11, [2, 8, 23, 5, 12, 10, 6, 9, 19]) should return [10, 9, 8, 6, 5, 2, 12, 19, 23].

"""


def elevator_stops(current_floor, stops):
    up = abs(max(stops) - current_floor)
    down = abs(min(stops) - current_floor)

    up_floors = sorted([floor for floor in stops if floor > current_floor])

    down_floors = sorted(
        [floor for floor in stops if floor < current_floor], reverse=True
    )

    if up < down:
        return up_floors + down_floors
    else:
        return down_floors + up_floors


print(elevator_stops(5, [2, 8, 3, 9]))  # [3, 2, 8, 9].
print(elevator_stops(6, [2, 10, 8, 3, 1, 9]))  # [8, 9, 10, 3, 2, 1].
print(elevator_stops(1, [4, 8, 3, 6, 9]))  # [3, 4, 6, 8, 9].
print(elevator_stops(12, [6, 10, 7, 3, 1, 4]))  # [10, 7, 6, 4, 3, 1].
print(
    elevator_stops(11, [2, 8, 23, 5, 12, 10, 6, 9, 19])
)  # [10, 9, 8, 6, 5, 2, 12, 19, 23].
