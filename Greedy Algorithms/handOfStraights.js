// Hand of Straights
// Time: O(n log n), Space: O(n)

function isNStraightHand(hand, groupSize) {
  if (hand.length % groupSize !== 0) return false;
  
  const count = new Map();
  for (let card of hand) count.set(card, (count.get(card) || 0) + 1);
  
  const sorted = [...count.keys()].sort((a, b) => a - b);
  
  for (let card of sorted) {
    const freq = count.get(card);
    if (freq > 0) {
      for (let i = 0; i < groupSize; i++) {
        const curr = card + i;
        if ((count.get(curr) || 0) < freq) return false;
        count.set(curr, count.get(curr) - freq);
      }
    }
  }
  
  return true;
}

// Test
console.log(isNStraightHand([1,2,3,6,2,3,4,7,8], 3)); // true
console.log(isNStraightHand([1,2,3,4,5], 4)); // false
