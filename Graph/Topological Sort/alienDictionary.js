// Alien Dictionary
// Time: O(C), Space: O(1) where C is total content of words

function alienOrder(words) {
  const adj = new Map();
  const indegree = new Map();
  
  for (const word of words) {
    for (const char of word) {
      adj.set(char, new Set());
      indegree.set(char, 0);
    }
  }
  
  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i], w2 = words[i + 1];
    const minLen = Math.min(w1.length, w2.length);
    if (w1.length > w2.length && w1.startsWith(w2)) return "";
    
    for (let j = 0; j < minLen; j++) {
      if (w1[j] !== w2[j]) {
        if (!adj.get(w1[j]).has(w2[j])) {
          adj.get(w1[j]).add(w2[j]);
          indegree.set(w2[j], indegree.get(w2[j]) + 1);
        }
        break;
      }
    }
  }
  
  const queue = [];
  for (const [char, deg] of indegree) {
    if (deg === 0) queue.push(char);
  }
  
  let result = "";
  while (queue.length) {
    const char = queue.shift();
    result += char;
    for (const neighbor of adj.get(char)) {
      indegree.set(neighbor, indegree.get(neighbor) - 1);
      if (indegree.get(neighbor) === 0) queue.push(neighbor);
    }
  }
  
  return result.length === indegree.size ? result : "";
}

// Test
console.log(alienOrder(["wrt","wrf","er","ett","rftt"])); // "wertf"
console.log(alienOrder(["z","x"])); // "zx"
