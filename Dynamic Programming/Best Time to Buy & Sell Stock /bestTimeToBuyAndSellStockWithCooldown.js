// Best Time to Buy and Sell Stock with Cooldown
// Time: O(n), Space: O(1)

function maxProfit(prices) {
  let sold = 0, held = -Infinity, reset = 0;
  
  for (let price of prices) {
    const preSold = sold;
    sold = held + price;
    held = Math.max(held, reset - price);
    reset = Math.max(reset, preSold);
  }
  
  return Math.max(sold, reset);
}

// Test
console.log(maxProfit([1,2,3,0,2])); // 3
console.log(maxProfit([1])); // 0
