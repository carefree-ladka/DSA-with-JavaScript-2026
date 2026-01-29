// Best Time to Buy and Sell Stock - LeetCode #121
// Pattern: Single Pass with Min Tracking

function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  }

  return maxProfit;
}

// Test Cases
function runTests() {
  console.log("Max Profit Tests:");
  console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
  console.log(maxProfit([7, 6, 4, 3, 1])); // 0
  console.log(maxProfit([1, 2, 3, 4, 5])); // 4
}

runTests();
