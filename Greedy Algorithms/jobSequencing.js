// Job Sequencing Problem
// Time: O(n log n), Space: O(n)

function jobSequencing(jobs) {
  jobs.sort((a, b) => b.profit - a.profit);
  
  const maxDeadline = Math.max(...jobs.map(j => j.deadline));
  const slots = Array(maxDeadline).fill(null);
  let totalProfit = 0, count = 0;
  
  for (let job of jobs) {
    for (let j = job.deadline - 1; j >= 0; j--) {
      if (slots[j] === null) {
        slots[j] = job.id;
        totalProfit += job.profit;
        count++;
        break;
      }
    }
  }
  
  return { count, totalProfit, sequence: slots.filter(s => s !== null) };
}

// Test
const jobs = [
  {id: 'a', deadline: 2, profit: 100},
  {id: 'b', deadline: 1, profit: 19},
  {id: 'c', deadline: 2, profit: 27},
  {id: 'd', deadline: 1, profit: 25},
  {id: 'e', deadline: 3, profit: 15}
];
console.log(jobSequencing(jobs)); // {count: 3, totalProfit: 142, sequence: ['d','a','e']}
