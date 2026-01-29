// Largest Rectangle in Histogram
// Time: O(n), Space: O(n)

function largestRectangleArea(heights) {
  const stack = [];
  let maxArea = 0;
  
  for (let i = 0; i <= heights.length; i++) {
    const h = i === heights.length ? 0 : heights[i];
    while (stack.length && heights[stack[stack.length - 1]] > h) {
      const height = heights[stack.pop()];
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }
    stack.push(i);
  }
  
  return maxArea;
}

// Test
console.log(largestRectangleArea([2,1,5,6,2,3])); // 10
console.log(largestRectangleArea([2,4])); // 4
