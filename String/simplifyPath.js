// Simplify Path
// Time: O(n), Space: O(n)

function simplifyPath(path) {
  const stack = [];
  const parts = path.split('/');
  
  for (let part of parts) {
    if (part === '..') {
      if (stack.length) stack.pop();
    } else if (part && part !== '.') {
      stack.push(part);
    }
  }
  
  return '/' + stack.join('/');
}

// Test
console.log(simplifyPath("/home/")); // "/home"
console.log(simplifyPath("/../")); // "/"
console.log(simplifyPath("/home//foo/")); // "/home/foo"
console.log(simplifyPath("/a/./b/../../c/")); // "/c"
