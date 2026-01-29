// Assign Cookies
// Time: O(n log n), Space: O(1)

function findContentChildren(g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  
  let i = 0, j = 0;
  
  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) i++;
    j++;
  }
  
  return i;
}

// Test
console.log(findContentChildren([1,2,3], [1,1])); // 1
console.log(findContentChildren([1,2], [1,2,3])); // 2
