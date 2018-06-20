/**
 * Gas Station III
 *
 * A person tries to drive from city A to city B, there are N gas stations between the two cities.
 * An array of {distance, price} is given, the distance is the distance from A, and the price is
 * the gas price at the station.
 *
 * Also, the car's MPG (miles per gallon) and tank size (gallon) is given. In order to reach to city B,
 * try to pay the petrol as less as possible, write a program to return the station(s) that should be visited.
 *
 * There are some rules:
 * 1. The car has full-tank of petrol when start
 * 2. At any station, the car always fill up the petrol in full
 * 3. The car always drives with constant MPG
 *
 * If it's impossible to drive to city B, return -1.
 *
 * For example:
 *
 * A            $1       $2   $5    $1      $6   $4        $1         B
 * |------------|--------|----|-----|-------|----|---------|----------|
 * 0           100      140  150   200     330  360       400        500 miles
 *
 * MPG: 10 (miles/gallon)
 * Tank size: 18 (gallon)
 *
 * Your program should return 840
 *
 * Explanation:
 *
 * Stop at 100 mile, cost $1 * 100 to fill full tank
 * Stop at 200 mile, cost $1 * 100
 * Stop at 360 mile, cost $4 * 160
 *
 * Total cost is $840
 *
 * If we stop at 150 mile and 330 mile, although we only need to stop at two stations, but the total cost
 * is 150*5 + (330 - 150) * 6 = $1,830
 */

/**
 * @param {number} totalDistance
 * @param {number} mpg
 * @param {number} tank
 * @param {number[]} distances
 * @param {number[]} prices
 * @return {number}
 */
const minCost = (totalDistance, mpg, tank, distances, prices) => {
  const n = distances.length;
  const dp = Array(n + 2).fill(0);

  distances = [0, ...distances, totalDistance];
  prices = [0, ...prices, 0];

  for (let i = 1; i < n + 2; i++) {
    dp[i] = Number.MAX_SAFE_INTEGER;

    for (let j = 0; j < i; j++) {
      if (distances[i] - distances[j] <= mpg * tank) {
        dp[i] = Math.min(dp[i], dp[j] + prices[i] * (distances[i] - distances[j]));
      }
    }
  }

  return dp[n + 1] < Number.MAX_SAFE_INTEGER ? dp[n + 1] : -1;
};

export { minCost };
