// Merge Two Sorted Lists
// Time: O(n + m), Space: O(1)

function mergeTwoLists(l1, l2) {
  const dummy = {};
  let curr = dummy;
  
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  
  curr.next = l1 || l2;
  return dummy.next;
}

// Test
const l1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } };
const l2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };
console.log(mergeTwoLists(l1, l2)); // 1 -> 1 -> 2 -> 3 -> 4 -> 4
