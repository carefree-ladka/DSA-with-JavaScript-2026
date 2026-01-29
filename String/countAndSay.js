// Count and Say
// Time: O(2^n), Space: O(2^n)

function countAndSay(n) {
  let result = "1";
  
  for (let i = 1; i < n; i++) {
    let next = "";
    let count = 1;
    
    for (let j = 0; j < result.length; j++) {
      if (j + 1 < result.length && result[j] === result[j + 1]) {
        count++;
      } else {
        next += count + result[j];
        count = 1;
      }
    }
    
    result = next;
  }
  
  return result;
}

// Test
console.log(countAndSay(1)); // "1"
console.log(countAndSay(4)); // "1211"
console.log(countAndSay(5)); // "111221"
