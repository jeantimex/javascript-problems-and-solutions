/**
 * Gas Station II
 *
 * A person tries to drive from city A to city B, there are N gas stations between the two cities.
 * An array of distance is given, the distance is the distance from A.
 *
 * Also, the car's MPG (miles per gallon) and tank size (gallon) is given. In order to reach to city B,
 * try to visit as few gas stations as possible, write a program to return the station(s) that should be visited.
 *
 * There are some rules:
 * 1. The car has full-tank of petrol when start
 * 2. At any station, the car always fill up the petrol in full
 * 3. The car always drives with constant MPG
 *
 * If it's impossible to drive to city B, return [].
 *
 * For example:
 *
 * A                                                                  B
 * |------------|--------|----|-----|-------|----|---------|----------|
 * 0           100      140  150   200     330  360       400        500 miles
 *
 * MPG: 10 (miles/gallon)
 * Tank size: 18 (gallon)
 *
 * Your program should return [150, 330], we should stop at 150 mile, 330 mile.
 */

/**
 * @param {number} totalDistance
 * @param {number} mpg
 * @param {number} tank
 * @param {number[]} distances
 * @return {number[]}
 */
const minVisit = (totalDistance, mpg, tank, distances) => {
  let stops = [];
  let current = mpg * tank;

  for (let i = 0; i < distances.length; i++) {
    if (distances[i] <= current && (i === distances.length - 1 || distances[i + 1] > current)) {
      stops.push(distances[i]);
      current = distances[i] + mpg * tank;

      if (current >= totalDistance) {
        return stops;
      }
    }
  }

  return [];
};

export { minVisit };
