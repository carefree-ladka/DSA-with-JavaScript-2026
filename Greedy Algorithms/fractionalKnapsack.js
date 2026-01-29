// Fractional Knapsack
// Time: O(n log n), Space: O(n)

function fractionalKnapsack(values, weights, capacity) {
  const items = values.map((v, i) => ({
    value: v,
    weight: weights[i],
    ratio: v / weights[i]
  }));
  
  items.sort((a, b) => b.ratio - a.ratio);
  
  let totalValue = 0;
  
  for (let item of items) {
    if (capacity >= item.weight) {
      totalValue += item.value;
      capacity -= item.weight;
    } else {
      totalValue += item.ratio * capacity;
      break;
    }
  }
  
  return totalValue;
}

// Test
console.log(fractionalKnapsack([60,100,120], [10,20,30], 50)); // 240
