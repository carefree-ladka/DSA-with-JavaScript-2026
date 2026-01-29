// Task Scheduler
// Time: O(n), Space: O(1)

function leastInterval(tasks, n) {
  const freq = Array(26).fill(0);
  for (let task of tasks) {
    freq[task.charCodeAt(0) - 65]++;
  }
  
  freq.sort((a, b) => b - a);
  const maxFreq = freq[0];
  let idleSlots = (maxFreq - 1) * n;
  
  for (let i = 1; i < 26 && freq[i] > 0; i++) {
    idleSlots -= Math.min(freq[i], maxFreq - 1);
  }
  
  return idleSlots > 0 ? tasks.length + idleSlots : tasks.length;
}

// Test
console.log(leastInterval(["A","A","A","B","B","B"], 2)); // 8
console.log(leastInterval(["A","A","A","B","B","B"], 0)); // 6
