/**
 * Cheapest Flights Within K Stops
 *
 * There are n cities connected by m flights. Each fight starts from city u and arrives at v with a price w.
 *
 * Now given all the cities and flights, together with starting city src and the destination dst,
 * your task is to find the cheapest price from src to dst with up to k stops. If there is no such route, output -1.
 *
 * Example 1:
 *
 * Input:
 * n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
 * src = 0, dst = 2, k = 1
 * Output: 200
 *
 * Explanation:
 * The graph looks like this:
 *
 *                 0
 *           100 /   \ 500
 *              v     v
 *             1 ----> 2
 *                100
 *
 * The cheapest price from city 0 to city 2 with at most 1 stop costs 200.
 *
 * In the above picture, if k is 0, then the answer shoudl be 500. The cheapest price from city 0 to city 2
 * with at most 0 stop costs 500.
 *
 * Solution: Instead of nodes being places, use places and number of stops.
 * We want to find the lowest cost from source to target, which makes Dijkstra's a good candidate algorithm.
 *
 * If we continually extend our potential flightpaths in order of cost, we know once we've reached the
 * destination dst that it was the lowest cost way to get there. This is the idea behind Dijkstra's algorithm.
 */

/**
 * Solution Dijkstra
 *
 * Time Complexity: O(E + nlogn), where EE is the total number of flights.
 * Space Complexity: O(n), the size of the heap.
 *
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
const findCheapestPrice = (n, flights, src, dst, K) => {};

export { findCheapestPrice };
