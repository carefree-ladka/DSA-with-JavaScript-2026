// Merge K Sorted Lists
// Time: O(n log k), Space: O(k)

function mergeKLists(lists) {
  if (!lists.length) return null;

  while (lists.length > 1) {
    const merged = [];
    for (let i = 0; i < lists.length; i += 2) {
      merged.push(merge(lists[i], lists[i + 1] || null));
    }
    lists = merged;
  }

  return lists[0];
}

function merge(l1, l2) {
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
const lists = [
  { val: 1, next: { val: 4, next: { val: 5, next: null } } },
  { val: 1, next: { val: 3, next: { val: 4, next: null } } },
  { val: 2, next: { val: 6, next: null } },
];
console.log(mergeKLists(lists)); // 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6
