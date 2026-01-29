// Huffman Coding
// Time: O(n log n), Space: O(n)

function huffmanCoding(chars, freq) {
  const heap = chars.map((char, i) => ({ char, freq: freq[i], left: null, right: null }));
  heap.sort((a, b) => a.freq - b.freq);
  
  while (heap.length > 1) {
    const left = heap.shift();
    const right = heap.shift();
    
    const node = {
      char: null,
      freq: left.freq + right.freq,
      left,
      right
    };
    
    heap.push(node);
    heap.sort((a, b) => a.freq - b.freq);
  }
  
  const codes = {};
  
  function generateCodes(node, code = '') {
    if (!node) return;
    if (node.char !== null) {
      codes[node.char] = code || '0';
      return;
    }
    generateCodes(node.left, code + '0');
    generateCodes(node.right, code + '1');
  }
  
  generateCodes(heap[0]);
  return codes;
}

// Test
console.log(huffmanCoding(['a','b','c','d','e','f'], [5,9,12,13,16,45]));
// {f: '0', c: '100', d: '101', a: '1100', b: '1101', e: '111'}
