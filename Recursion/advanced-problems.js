// Recursive merge sort (logic only)
export function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Tower of Hanoi
export function towerOfHanoi(
  n,
  source = "A",
  destination = "C",
  auxiliary = "B"
) {
  if (n === 1) {
    console.log(`Move disk 1 from ${source} to ${destination}`);
    return 1;
  }

  let moves = 0;
  moves += towerOfHanoi(n - 1, source, auxiliary, destination);
  console.log(`Move disk ${n} from ${source} to ${destination}`);
  moves += 1;
  moves += towerOfHanoi(n - 1, auxiliary, destination, source);

  return moves;
}

// Generate all permutations
export function generatePermutations(arr, current = [], result = []) {
  if (current.length === arr.length) {
    result.push([...current]);
    return result;
  }

  for (let i = 0; i < arr.length; i++) {
    if (current.includes(arr[i])) continue;

    current.push(arr[i]);
    generatePermutations(arr, current, result);
    current.pop();
  }

  return result;
}

// Generate all combinations
export function generateCombinations(
  arr,
  k,
  start = 0,
  current = [],
  result = []
) {
  if (current.length === k) {
    result.push([...current]);
    return result;
  }

  for (let i = start; i < arr.length; i++) {
    current.push(arr[i]);
    generateCombinations(arr, k, i + 1, current, result);
    current.pop();
  }

  return result;
}

// Solve maze (find path)
export function solveMaze(maze, x = 0, y = 0, path = []) {
  const n = maze.length;
  const m = maze[0].length;

  // Base cases
  if (x < 0 || x >= n || y < 0 || y >= m || maze[x][y] === 0) {
    return false;
  }

  if (x === n - 1 && y === m - 1) {
    path.push([x, y]);
    return true;
  }

  // Mark current cell as visited
  maze[x][y] = 0;
  path.push([x, y]);

  // Try all four directions
  if (
    solveMaze(maze, x + 1, y, path) ||
    solveMaze(maze, x, y + 1, path) ||
    solveMaze(maze, x - 1, y, path) ||
    solveMaze(maze, x, y - 1, path)
  ) {
    return true;
  }

  // Backtrack
  maze[x][y] = 1;
  path.pop();
  return false;
}

// Count paths in grid
export function countPaths(m, n, x = 0, y = 0) {
  if (x === m - 1 && y === n - 1) return 1;
  if (x >= m || y >= n) return 0;

  return countPaths(m, n, x + 1, y) + countPaths(m, n, x, y + 1);
}

// Subset sum problem
export function hasSubsetSum(arr, target, index = 0) {
  if (target === 0) return true;
  if (index === arr.length || target < 0) return false;

  return (
    hasSubsetSum(arr, target - arr[index], index + 1) ||
    hasSubsetSum(arr, target, index + 1)
  );
}
