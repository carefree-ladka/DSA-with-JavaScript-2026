const sumArray = (nums = []) => {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  const mid = Math.floor(nums.length / 2);
  return sumArray(nums.slice(0, mid)) + sumArray(nums.slice(mid));
};

console.log(sumArray([1, 2, 3, 4, 5, 6])); // 21
console.log(sumArray([])); // 0
console.log(sumArray([10])); // 10
