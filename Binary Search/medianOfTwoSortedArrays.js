// Median of Two Sorted Arrays
// Time: O(log(min(m,n))), Space: O(1)

function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];

  const m = nums1.length,
    n = nums2.length;
  let left = 0,
    right = m;

  while (left <= right) {
    const i = Math.floor((left + right) / 2);
    const j = Math.floor((m + n + 1) / 2) - i;

    const maxLeft1 = i === 0 ? -Infinity : nums1[i - 1];
    const minRight1 = i === m ? Infinity : nums1[i];
    const maxLeft2 = j === 0 ? -Infinity : nums2[j - 1];
    const minRight2 = j === n ? Infinity : nums2[j];

    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if ((m + n) % 2 === 0) {
        return (
          (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
        );
      }
      return Math.max(maxLeft1, maxLeft2);
    } else if (maxLeft1 > minRight2) {
      right = i - 1;
    } else {
      left = i + 1;
    }
  }
}

// Test
console.log(findMedianSortedArrays([1, 3], [2])); // 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
