// Koko Eating Bananas
// Time: O(n log m), Space: O(1)

function minEatingSpeed(piles, h) {
  let left = 1,
    right = Math.max(...piles);

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let hours = 0;
    for (let pile of piles) hours += Math.ceil(pile / mid);

    if (hours <= h) right = mid;
    else left = mid + 1;
  }

  return left;
}

// Test
console.log(minEatingSpeed([3, 6, 7, 11], 8)); // 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // 30
