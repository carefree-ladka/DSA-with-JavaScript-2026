// Lemonade Change
// Time: O(n), Space: O(1)

function lemonadeChange(bills) {
  let five = 0, ten = 0;
  
  for (let bill of bills) {
    if (bill === 5) {
      five++;
    } else if (bill === 10) {
      if (five === 0) return false;
      five--;
      ten++;
    } else {
      if (ten > 0 && five > 0) {
        ten--;
        five--;
      } else if (five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
  }
  
  return true;
}

// Test
console.log(lemonadeChange([5,5,5,10,20])); // true
console.log(lemonadeChange([5,5,10,10,20])); // false
