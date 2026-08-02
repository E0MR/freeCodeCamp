"""

Food Chain

Given an array of [predator, prey] pairs, return the food chain from the apex predator down to the bottom.
  The apex predator is the animal that is never prey to another animal.
  Return the chain as an array of strings.

Tests:
  get_food_chain([["cat", "mouse"]]) should return ["cat", "mouse"].
  get_food_chain([["wolf", "deer"], ["deer", "grass"]]) should return ["wolf", "deer", "grass"].
  get_food_chain([["hawk", "snake"], ["snake", "frog"], ["frog", "fly"]]) should return ["hawk", "snake", "frog", "fly"].
  get_food_chain([["rabbit", "grass"], ["fox", "rabbit"], ["eagle", "fox"]]) should return ["eagle", "fox", "rabbit", "grass"].
  get_food_chain([["seal", "salmon"], ["herring", "shrimp"], ["orca", "seal"], ["shrimp", "plankton"], ["salmon", "herring"]]) should return ["orca", "seal", "salmon", "herring", "shrimp", "plankton"].

"""


def get_food_chain(pairs):
    if len(pairs) == 1:
        return pairs[0]

    predators = [pair[0] for pair in pairs]
    preys = [pair[1] for pair in pairs]

    apex_predator = [predator for predator in predators if predator not in preys][0]

    chain = [apex_predator]
    i = 0
    while len(chain) <= len(pairs):
        if i >= len(pairs):
            i = 0

        if pairs[i][0] == apex_predator:
            chain.append(pairs[i][1])
            apex_predator = pairs[i][1]

        i += 1

    return chain


print(get_food_chain([["cat", "mouse"]]))  # ["cat", "mouse"]
print(
    get_food_chain(
        [
            ["wolf", "deer"],
            ["deer", "grass"],
        ]
    ),
)  # ["wolf", "deer", "grass"]
print(
    get_food_chain(
        [
            ["hawk", "snake"],
            ["snake", "frog"],
            ["frog", "fly"],
        ]
    ),
)  # ["hawk", "snake", "frog", "fly"]
print(
    get_food_chain(
        [
            ["rabbit", "grass"],
            ["fox", "rabbit"],
            ["eagle", "fox"],
        ]
    ),
)  # ["eagle", "fox", "rabbit", "grass"]
print(
    get_food_chain(
        [
            ["seal", "salmon"],
            ["herring", "shrimp"],
            ["orca", "seal"],
            ["shrimp", "plankton"],
            ["salmon", "herring"],
        ]
    ),
)  # ["orca", "seal", "salmon", "herring", "shrimp", "plankton"]

"""

def find_food_chain(pairs):
    # Dictionaries to store predator-to-prey and prey-to-predator mappings
    predator_map = {}
    prey_set = set()
    predator_set = set()
    
    for predator, prey in pairs:
        predator_map[predator] = prey
        predator_set.add(predator)
        prey_set.add(prey)
        
    # The apex predator is in the predator set but never in the prey set
    apex_predators = predator_set - prey_set
    if not apex_predators:
        return [] # No valid apex predator found
        
    current = list(apex_predators)[0]
    chain = [current]
    
    # Follow the chain down as long as the current animal has prey
    while current in predator_map:
        current = predator_map[current]
        chain.append(current)
        
    return chain

"""
