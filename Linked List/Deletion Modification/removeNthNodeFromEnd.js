// Remove Nth Node From End of List
// Time: O(n), Space: O(1)

function removeNthFromEnd(head, n) {
  const dummy = { next: head };
  let fast = dummy, slow = dummy;
  
  for (let i = 0; i <= n; i++) fast = fast.next;
  
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  
  slow.next = slow.next.next;
  return dummy.next;
}

// Test
const list = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } };
console.log(removeNthFromEnd(list, 2)); // 1 -> 2 -> 3 -> 5
