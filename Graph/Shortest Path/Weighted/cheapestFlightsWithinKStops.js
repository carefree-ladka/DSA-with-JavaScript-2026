// Cheapest Flights Within K Stops
// Time: O(E * K), Space: O(V)

function findCheapestPrice(n, flights, src, dst, k) {
  let prices = Array(n).fill(Infinity);
  prices[src] = 0;
  
  for (let i = 0; i <= k; i++) {
    const temp = [...prices];
    for (const [from, to, price] of flights) {
      if (prices[from] !== Infinity) {
        temp[to] = Math.min(temp[to], prices[from] + price);
      }
    }
    prices = temp;
  }
  
  return prices[dst] === Infinity ? -1 : prices[dst];
}

// Test
console.log(findCheapestPrice(4, [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], 0, 3, 1)); // 700
console.log(findCheapestPrice(3, [[0,1,100],[1,2,100],[0,2,500]], 0, 2, 1)); // 200
