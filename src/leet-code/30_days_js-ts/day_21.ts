//Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.
//
// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.
//
// Please solve it without using lodash's _.chunk function.


//Example 1:
//
// Input: arr = [1,2,3,4,5], size = 1
// Output: [[1],[2],[3],[4],[5]]
// Explanation: The arr has been split into subarrays each with 1 element.
// Example 2:
//
// Input: arr = [1,9,6,3,2], size = 3
// Output: [[1,9,6],[3,2]]
// Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.
// Example 3:
//
// Input: arr = [8,5,3,2,6], size = 6
// Output: [[8,5,3,2,6]]
// Explanation: Size is greater than arr.length thus all elements are in the first subarray.
// Example 4:
//
// Input: arr = [], size = 1
// Output: []
// Explanation: There are no elements to be chunked so an empty array is returned.


export function chunk(arr: any[], size: number): any[][] {
    if(arr.length === 0) {
        return arr;
    }
    let result = [];
    if(size < arr.length) {
        let innerArraySize = arr.length / size;
        let counter = 0;
        for(let i: number = 0; i < innerArraySize; i++) {
            result[i] = [];
            for(let j: number = 0; j < size; j++) {
                if(counter < arr.length) {
                    result[i][j] = arr[counter++];
                } else {
                    break;
                }
            }
        }
    } else {
        return [arr];
    }
    return result;
};