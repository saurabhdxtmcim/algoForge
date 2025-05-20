// Given a large string and a smaller string, return the number of times the smaller string appears in the larger string.
// For example, if the large string is "wowomgzomg" and the smaller string is "omg", the function should return 2.
// The function should be case sensitive, meaning "omg" and "OMG" are different strings.
// The function should also return 0 if the smaller string is not found in the larger string.

function naiveStringSearch(largeString, strToFind){
    let counter = 0;
    for(let i = 0; i < largeString.length; i++){
        for(let j = 0; j < strToFind.length; j++){
            if(largeString[i + j] !== strToFind[j]){
                break;
            }
            if(j == strToFind.length - 1){
                counter++;
            }
        }
    }
    return counter;
}

// Test Cases
console.log(naiveStringSearch('wowomgzomg', 'omg')); // 2
console.log(naiveStringSearch('wowomgzomg', 'OMG')); // 0
console.log(naiveStringSearch('wowomgzomg', 'wow')); // 1
console.log(naiveStringSearch('wowomgzomg', 'w')); // 2
console.log(naiveStringSearch('wowomgzomg', 'z')); // 2
console.log(naiveStringSearch('wowomgzomg', 'o')); // 3
console.log(naiveStringSearch('wowomgzomg', 'om')); // 2
console.log(naiveStringSearch('wowomgzomg', 'omg')); // 2
console.log(naiveStringSearch('wowomgzomg', 'omgz')); // 1