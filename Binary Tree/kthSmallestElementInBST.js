class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function kthSmallest(root, k) {
  let count = 0;
  let result = null;

  function inorder(node) {
    if (!node || result !== null) return;
    inorder(node.left);
    if (++count === k) result = node.val;
    inorder(node.right);
  }

  inorder(root);
  return result;
}

const root = new TreeNode(
  3,
  new TreeNode(1, null, new TreeNode(2)),
  new TreeNode(4)
);
console.log(kthSmallest(root, 1));
