// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of the integer in the array. If the value is not found, return -1.
// function findRotatedIndex(arr, num){
//     let mid = Math.floor(arr.length / 2);
//     let left = 0;
//     let pivot = mid;
//     if(arr[mid] > arr[left]){
//         while(arr[mid] < arr[mid+1]){
//             mid++;
//             pivot = mid;
            
//         }
//     }else{
//         while(arr[mid] > arr[mid-1]){
//             mid--;
//             pivot = mid;
//         }
//     }
//     console.log('pivot', pivot);
//     if(num === arr[pivot]) return pivot;
//     //[6, 7, 8, 9, 1, 2, 3, 4]
//     if((pivot != arr.length-1) && num <= arr[arr.length-1]){
//        /*
//         Now we have to stay between pivot and length - 1
//        */
//         mid = Math.floor((arr.length - 1 + pivot) / 2);
//         left = pivot;
//         right = arr.length - 1;
//         let index;
//         console.log('left', left, 'right', right, 'mid', mid);
//         if(num === arr[mid]) return mid;
//         if(num < arr[mid]){
//             index = mid;
//             do{
//                 if(num == arr[index]){
//                     return index
//                 }
//                 index--;
//             }while(index != pivot)
//         }else{
//             do{
//                 if(num == arr[index]){
//                     return index
//                 }
//                 index++;
//             }while(index != arr.length - 1)
//         }
//     }else{
//         //else number is between start and end
//         mid = Math.floor((0 + pivot) / 2);
//         left = 0;
//         right = pivot;
//         let index;
//         console.log('left', left, 'right', right, 'mid', mid);
//         if(num === arr[mid]) return mid;
//         if(num < arr[mid]){
//             index = mid;
//             do{
//                 if(num == arr[index]){
//                     return index
//                 }
//                 index--;
//             }while(index != 0)
//         }else{
//             do{
//                 if(num == arr[index]){
//                     return index
//                 }
//                 index++;
//             }while(index != pivot)
//         }
//     }    
//     return -1;

// }

/*
    TODO: Come back to it again
*/
function findRotatedIndex(arr, num) {
    // Step 1: Find the pivot (smallest element)
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] > arr[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    let pivot = left;

    // Step 2: Determine which side to search
    left = 0;
    right = arr.length - 1;
    if (num >= arr[pivot] && num <= arr[right]) {
        left = pivot; // Search in the right sorted subarray
    } else {
        right = pivot - 1; // Search in the left sorted subarray
    }

    // Step 3: Perform binary search
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === num) {
            return mid;
        } else if (arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // Return -1 if the value is not found
    return -1;
}

//console.log(findRotatedIndex([1,2,3,4,5,6,7], 3)) // 2
//console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)) // 0
//console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 1)) // 4
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 4)) // 7
//console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 10)) // -1
