// Description: Write a function called constructNote that accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.
// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.
// There may be more than one occurrence of a letter, but you must have at least that many letters in the message.
// The function should ignore case and punctuation.
// The function should have a time complexity of O(n + m).

function constructNote(message, letters){

    let messageFrequencyCounter = {};
    let lettersFrequencyCounter = {};

    for(let val of message){
        messageFrequencyCounter[val] = (messageFrequencyCounter[val] || 0) + 1;
    }
    for(let val of letters){
        lettersFrequencyCounter[val] = (lettersFrequencyCounter[val] || 0) + 1;
    }

    for(let key in messageFrequencyCounter){
        if(!lettersFrequencyCounter[key] || messageFrequencyCounter[key] > lettersFrequencyCounter[key]){
            return false;
        }
    }
    return true;
}

// Test Cases
console.log("constructNote:", constructNote("aa", "abc")); // false
console.log("constructNote:", constructNote("abc", "ab")); // false
console.log("constructNote:", constructNote("abc", "abcd")); // true
console.log("constructNote:", constructNote("abc", "ab")); // false


// Refactored Solution
// Time: O(n + m) => O(n)
// Space: O(n + m) => O(n)
function constructNoteBetter(message, letters){

   let letterFrequencyCounter = {};
   for(let val of letters){
       letterFrequencyCounter[val] = (letterFrequencyCounter[val] || 0) + 1;
   }

   for(let val of message){
       if(!letterFrequencyCounter[val]){
           return false;
       } else {
           letterFrequencyCounter[val] -= 1;
       }
   }
   return true;
}

// Test Cases
console.log("constructNoteBetter:", constructNoteBetter("aa", "abc")); // false
console.log("constructNoteBetter:", constructNoteBetter("abc", "ab")); // false
console.log("constructNoteBetter:", constructNoteBetter("abc", "abcd")); // true
console.log("constructNoteBetter:", constructNoteBetter("abc", "ab")); // false