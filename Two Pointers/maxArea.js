const maxArea = (height = []) => {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);

    if (height[left] < height[right]) left++;
    else right--;
  }

  return max;
};

// Test Cases:
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([4, 3, 2, 1, 4])); // 16
