// This function finds the length of the longest substring without repeating characters
// using the sliding window technique.
// This approach uses two pointers to create a window that can expand and contract based on the characters in the string.
// The function keeps track of the longest substring found without repeating characters and returns its length.

function findLongestSubstring(str){
    if(str.length === 0) return 0; // Handle the case for an empty string
    // Edge case: if the string is empty, return 0 as there are no substrings to evaluate

    let longest = 0;
    let start =0;
    let end = 0;
    let seen = {}; // To store the index of characters we have seen

    while(end < str.length){
        let char = str[end];
        if(seen[char] === undefined){
            seen[char] = end; // Store the index of the character if it's not seen before
            longest = Math.max(longest, end - start +1)
            end++; // Move the end pointer to expand the window
        }else{
            delete seen[str[start]]; // Remove the character from the seen object as we are moving the start pointer
            start ++;
        }
    }
    return longest;
}



//Test cases

console.log("Input: '' => Output:", findLongestSubstring('')); // 0
console.log("Input: 'rithmschool' => Output:", findLongestSubstring('rithmschool')); // 7
console.log("Input: 'thecatinthehat' => Output:", findLongestSubstring('thecatinthehat')); // 7
console.log("Input: 'thisisawesome' => Output:", findLongestSubstring('thisisawesome')); // 6
console.log("Input: 'thecatinthehat' => Output:", findLongestSubstring('thecatinthehat')); // 7
console.log("Input: 'bbbbbb' => Output:", findLongestSubstring('bbbbbb')); // 1
console.log("Input: 'longestsubstring' => Output:", findLongestSubstring('longestsubstring')); // 8
console.log("Input: 'thisishowwedoit' => Output:", findLongestSubstring('thisishowwedoit')); // 6

console.log("Input: '' => Output:", findLongestSubstring("")); // 0
console.log("Input: 'rithmschool' => Output:", findLongestSubstring("rithmschool")); // 7

console.log("Input: 'abcabcbb' => Output:", findLongestSubstring("abcabcbb")); // 3
console.log("Input: 'bbbbb' => Output:", findLongestSubstring("bbbbb")); // 1
console.log("Input: 'pwwkew' => Output:", findLongestSubstring("pwwkew")); // 3
console.log("Input: 'abcdef' => Output:", findLongestSubstring("abcdef")); // 6
console.log("Input: 'aabbcc' => Output:", findLongestSubstring("aabbcc")); // 2
console.log("Input: '' => Output:", findLongestSubstring("")); // 0
console.log("Input: ' ' => Output:", findLongestSubstring(" ")); // 1
console.log("Input: 'dvdf' => Output:", findLongestSubstring("dvdf")); // 3
console.log("Input: 'anviaj' => Output:", findLongestSubstring("anviaj")); // 5
console.log("Input: 'aaaaaa' => Output:", findLongestSubstring("aaaaaa")); // 1
console.log("Input: 'abcdefghijklmnopqrstuvwxyz' => Output:", findLongestSubstring("abcdefghijklmnopqrstuvwxyz")); // 26
// Explanation: All characters are unique, so the length is 26.


