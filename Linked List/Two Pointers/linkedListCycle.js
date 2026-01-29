// Linked List Cycle
// Time: O(n), Space: O(1)

function hasCycle(head) {
  let slow = head, fast = head;
  
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  
  return false;
}

// Test
const list = { val: 3, next: { val: 2, next: { val: 0, next: { val: -4, next: null } } } };
list.next.next.next.next = list.next;
console.log(hasCycle(list)); // true
