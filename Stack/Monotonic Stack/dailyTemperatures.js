// Daily Temperatures
// Time: O(n), Space: O(n)

function dailyTemperatures(temperatures) {
  const result = Array(temperatures.length).fill(0);
  const stack = [];
  
  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
      const idx = stack.pop();
      result[idx] = i - idx;
    }
    stack.push(i);
  }
  
  return result;
}

// Test
console.log(dailyTemperatures([73,74,75,71,69,72,76,73])); // [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30,40,50,60])); // [1,1,1,0]
