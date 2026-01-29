// Reorder List
// Time: O(n), Space: O(1)

function reorderList(head) {
  if (!head || !head.next) return;
  
  let slow = head, fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  
  let prev = null, curr = slow.next;
  slow.next = null;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  
  let first = head, second = prev;
  while (second) {
    const tmp1 = first.next, tmp2 = second.next;
    first.next = second;
    second.next = tmp1;
    first = tmp1;
    second = tmp2;
  }
}

// Test
const list = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null } } } };
reorderList(list);
console.log(list); // 1 -> 4 -> 2 -> 3
