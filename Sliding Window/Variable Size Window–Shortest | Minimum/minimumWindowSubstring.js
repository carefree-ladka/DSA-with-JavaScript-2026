// Minimum Window Substring
// Time: O(n + m), Space: O(m)

function minWindow(s, t) {
    const map = new Map();
    for (let char of t) map.set(char, (map.get(char) || 0) + 1);
    
    let left = 0, minLen = Infinity, minStart = 0, required = map.size;
    
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        if (map.has(char)) {
            map.set(char, map.get(char) - 1);
            if (map.get(char) === 0) required--;
        }
        
        while (required === 0) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;
            }
            
            const leftChar = s[left];
            if (map.has(leftChar)) {
                map.set(leftChar, map.get(leftChar) + 1);
                if (map.get(leftChar) > 0) required++;
            }
            left++;
        }
    }
    
    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
}

// Test
console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"
console.log(minWindow("a", "a")); // "a"
console.log(minWindow("a", "aa")); // ""
