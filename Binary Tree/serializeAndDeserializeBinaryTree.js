class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function serialize(root) {
  if (!root) return "null";
  return `${root.val},${serialize(root.left)},${serialize(root.right)}`;
}

function deserialize(data) {
  const values = data.split(",");

  function build() {
    const val = values.shift();
    if (val === "null") return null;
    const node = new TreeNode(Number(val));
    node.left = build();
    node.right = build();
    return node;
  }

  return build();
}

const root = new TreeNode(
  1,
  new TreeNode(2),
  new TreeNode(3, new TreeNode(4), new TreeNode(5))
);
const serialized = serialize(root);
console.log(serialized);
console.log(deserialize(serialized));
