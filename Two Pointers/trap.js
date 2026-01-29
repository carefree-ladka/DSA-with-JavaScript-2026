const trap = (height) => {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  let leftMax = 0;
  let rightMax = 0;

  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);

    if (leftMax < rightMax) {
      max += leftMax - height[left++];
    } else {
      max += rightMax - height[right--];
    }
  }

  return max;
};

// Test Cases:
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));
