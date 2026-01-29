class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function goodNodes(root) {
  function dfs(node, max) {
    if (!node) return 0;
    const isGood = node.val >= max ? 1 : 0;
    max = Math.max(max, node.val);
    return isGood + dfs(node.left, max) + dfs(node.right, max);
  }

  return dfs(root, root.val);
}

const root = new TreeNode(
  3,
  new TreeNode(1, new TreeNode(3)),
  new TreeNode(4, new TreeNode(1), new TreeNode(5))
);
console.log(goodNodes(root));
