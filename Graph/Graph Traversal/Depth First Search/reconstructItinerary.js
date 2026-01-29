// Reconstruct Itinerary
// Time: O(E log E), Space: O(E)

function findItinerary(tickets) {
  const adj = new Map();
  for (const [from, to] of tickets) {
    if (!adj.has(from)) adj.set(from, []);
    adj.get(from).push(to);
  }
  
  for (const [key, val] of adj) {
    val.sort().reverse();
  }
  
  const result = [];
  
  function dfs(airport) {
    const destinations = adj.get(airport) || [];
    while (destinations.length) {
      dfs(destinations.pop());
    }
    result.push(airport);
  }
  
  dfs("JFK");
  return result.reverse();
}

// Test
console.log(findItinerary([["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]])); // ["JFK","MUC","LHR","SFO","SJC"]
console.log(findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]])); // ["JFK","ATL","JFK","SFO","ATL","SFO"]
