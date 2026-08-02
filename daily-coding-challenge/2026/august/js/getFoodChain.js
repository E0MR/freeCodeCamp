/*

Food Chain

Given an array of [predator, prey] pairs, return the food chain from the apex predator down to the bottom.
  The apex predator is the animal that is never prey to another animal.
  Return the chain as an array of strings.

Tests:
  getFoodChain([["cat", "mouse"]]) should return ["cat", "mouse"].
  getFoodChain([["wolf", "deer"], ["deer", "grass"]]) should return ["wolf", "deer", "grass"].
  getFoodChain([["hawk", "snake"], ["snake", "frog"], ["frog", "fly"]]) should return ["hawk", "snake", "frog", "fly"].
  getFoodChain([["rabbit", "grass"], ["fox", "rabbit"], ["eagle", "fox"]]) should return ["eagle", "fox", "rabbit", "grass"].
  getFoodChain([["seal", "salmon"], ["herring", "shrimp"], ["orca", "seal"], ["shrimp", "plankton"], ["salmon", "herring"]]) should return ["orca", "seal", "salmon", "herring", "shrimp", "plankton"].

*/

function getFoodChain(pairs) {
  if (pairs.length == 1) return pairs[0];

  let predators = pairs.map((pair) => pair[0]);
  let preys = pairs.map((pair) => pair[1]);

  let apexPredator = predators.filter(
    (predator) => !preys.includes(predator),
  )[0];

  let chain = [apexPredator];
  let i = 0;
  while (chain.length <= pairs.length) {
    if (i >= pairs.length) i = 0;
    if (pairs[i][0] == apexPredator) {
      chain.push(pairs[i][1]);
      apexPredator = pairs[i][1];
    }
    i++;
  }

  return chain;
}

console.log(getFoodChain([["cat", "mouse"]])); // ["cat", "mouse"]
console.log(
  getFoodChain([
    ["wolf", "deer"],
    ["deer", "grass"],
  ]),
); // ["wolf", "deer", "grass"]
console.log(
  getFoodChain([
    ["hawk", "snake"],
    ["snake", "frog"],
    ["frog", "fly"],
  ]),
); // ["hawk", "snake", "frog", "fly"]
console.log(
  getFoodChain([
    ["rabbit", "grass"],
    ["fox", "rabbit"],
    ["eagle", "fox"],
  ]),
); // ["eagle", "fox", "rabbit", "grass"]
console.log(
  getFoodChain([
    ["seal", "salmon"],
    ["herring", "shrimp"],
    ["orca", "seal"],
    ["shrimp", "plankton"],
    ["salmon", "herring"],
  ]),
); // ["orca", "seal", "salmon", "herring", "shrimp", "plankton"]

/*

function getFoodChain(pairs) {
  const predatorMap = {};
  const predatorSet = new Set();
  const preySet = new Set();

  for (const [predator, prey] of pairs) {
    predatorMap[predator] = prey;
    predatorSet.add(predator);
    preySet.add(prey);
  }

  let apexPredator = null;
  for (const predator of predatorSet) {
    if (!preySet.has(predator)) {
      apexPredator = predator;
      break;
    }
  }

  if (!apexPredator) return [];

  const chain = [apexPredator];
  let current = apexPredator;

  while (predatorMap[current]) {
    current = predatorMap[current];
    chain.push(current);
  }
  return chain;
}

*/
