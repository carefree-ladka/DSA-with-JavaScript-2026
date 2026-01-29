// Car Fleet II
// Time: O(n), Space: O(n)

function getCollisionTimes(cars) {
  const n = cars.length;
  const result = Array(n).fill(-1);
  const stack = [];
  
  for (let i = n - 1; i >= 0; i--) {
    const [pos, speed] = cars[i];
    
    while (stack.length) {
      const j = stack[stack.length - 1];
      const [pos2, speed2] = cars[j];
      
      if (speed <= speed2 || (result[j] > 0 && (pos2 - pos) / (speed - speed2) >= result[j])) {
        stack.pop();
      } else {
        break;
      }
    }
    
    if (stack.length) {
      const j = stack[stack.length - 1];
      result[i] = (cars[j][0] - pos) / (speed - cars[j][1]);
    }
    
    stack.push(i);
  }
  
  return result;
}

// Test
console.log(getCollisionTimes([[1,2],[2,1],[4,3],[7,2]])); // [1.0,1.0,-1.0,-1.0]
