// Permutation in String
// Time: O(n), Space: O(1)

function checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;
    
    const count = Array(26).fill(0);
    for (let char of s1) count[char.charCodeAt(0) - 97]++;
    
    let left = 0, right = 0, required = s1.length;
    
    while (right < s2.length) {
        if (count[s2.charCodeAt(right++) - 97]-- > 0) required--;
        
        if (required === 0) return true;
        
        if (right - left === s1.length && count[s2.charCodeAt(left++) - 97]++ >= 0) required++;
    }
    
    return false;
}

// Test
console.log(checkInclusion("ab", "eidbaooo")); // true
console.log(checkInclusion("ab", "eidboaoo")); // false
