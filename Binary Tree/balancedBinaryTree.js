class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isBalanced(root) {
  function height(node) {
    if (!node) return 0;
    const left = height(node.left);
    const right = height(node.right);
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
    return 1 + Math.max(left, right);
  }

  return height(root) !== -1;
}

const root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(isBalanced(root));
