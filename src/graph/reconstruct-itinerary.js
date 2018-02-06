/**
 * Given a list of airline tickets represented by pairs of departure and arrival airports [from, to],
 * reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK.
 * Thus, the itinerary must begin with JFK.
 *
 * Note:
 *
 * If there are multiple valid itineraries, you should return the itinerary that has the smallest
 * lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller
 * lexical order than ["JFK", "LGB"].
 *
 * All airports are represented by three capital letters (IATA code).
 *
 * You may assume all tickets form at least one valid itinerary.
 *
 * Example 1:
 *
 * tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
 * Return ["JFK", "MUC", "LHR", "SFO", "SJC"].
 *
 * Example 2:
 *
 * tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
 * Return ["JFK","ATL","JFK","SFO","ATL","SFO"].
 *
 * Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"]. But it is larger in lexical order.
 */

import PriorityQueue from 'common/priority-queue';

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
const findItinerary = tickets => {
  // Step 1. Build the graph using adjacency list
  const adjList = buildGraph(tickets);

  // Step 2. Topological sort
  const result = [];

  dfs(adjList, 'JFK', result);

  return result.reverse();
};

const dfs = (adjList, u, result) => {
  // This is a special topological sort
  // as each node might be visited multiple times
  // and all the nodes have to be visited
  // that's why we use a while loop here instead of using visited set
  while (adjList.has(u) && adjList.get(u).size() > 0) {
    const v = adjList.get(u).poll();
    dfs(adjList, v, result);
  }

  result.push(u);
};

const buildGraph = tickets => {
  const adjList = new Map();

  tickets.forEach(([from, to]) => {
    if (!adjList.has(from)) {
      adjList.set(from, new PriorityQueue({ comparator: (a, b) => a.localeCompare(b) }));
    }
    adjList.get(from).offer(to);
  });

  return adjList;
};

export default findItinerary;
