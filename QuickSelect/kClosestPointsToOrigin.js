// K Closest Points to Origin
// Time: O(n) average, Space: O(1)

function kClosest(points, k) {
  quickSelect(points, 0, points.length - 1, k - 1);
  return points.slice(0, k);
}

function quickSelect(arr, left, right, k) {
  if (left >= right) return;
  
  const pivotIndex = partition(arr, left, right);
  
  if (k === pivotIndex) return;
  else if (k < pivotIndex) quickSelect(arr, left, pivotIndex - 1, k);
  else quickSelect(arr, pivotIndex + 1, right, k);
}

function partition(arr, left, right) {
  const pivot = distance(arr[right]);
  let i = left;
  
  for (let j = left; j < right; j++) {
    if (distance(arr[j]) <= pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  [arr[i], arr[right]] = [arr[right], arr[i]];
  return i;
}

function distance(point) {
  return point[0] * point[0] + point[1] * point[1];
}

// Test
console.log(kClosest([[1,3],[-2,2]], 1)); // [[-2,2]]
console.log(kClosest([[3,3],[5,-1],[-2,4]], 2)); // [[3,3],[-2,4]]
