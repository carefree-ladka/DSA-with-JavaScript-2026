// Word Search II
// Time: O(m * n * 4^L), Space: O(w * L)

function findWords(board, words) {
  const root = {}, result = new Set();
  const m = board.length, n = board[0].length;
  
  for (let word of words) {
    let node = root;
    for (let char of word) {
      if (!node[char]) node[char] = {};
      node = node[char];
    }
    node.word = word;
  }
  
  function dfs(i, j, node) {
    if (i < 0 || i >= m || j < 0 || j >= n || !node[board[i][j]]) return;
    
    const char = board[i][j];
    node = node[char];
    if (node.word) result.add(node.word);
    
    board[i][j] = '#';
    dfs(i + 1, j, node);
    dfs(i - 1, j, node);
    dfs(i, j + 1, node);
    dfs(i, j - 1, node);
    board[i][j] = char;
  }
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs(i, j, root);
    }
  }
  
  return Array.from(result);
}

// Test
console.log(findWords([["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], 
  ["oath","pea","eat","rain"])); // ["oath","eat"]
