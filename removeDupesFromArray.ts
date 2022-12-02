// Write a function that takes an array of strings as arguments, checks for duplicates and removes if found.

const array: Array<string> = ["asdf", "zxcv", "qwer", "asdf", "zxcv"];
const arrayOfNums: Array<number> = [1, 4, 4, 2, 3, 4, 5, 5, 3];

let removeDupes_1 = (arr: Array<string | number>) => {
    arr.sort();
    let result: Array<string | number> = [];
    let previous = arr[0];
    result[0] = previous;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== previous) {
            result.push(arr[i]);
        }
        previous = arr[i];
    }
    return result;
};

console.log(removeDupes_1(array));
console.log(removeDupes_1(arrayOfNums));

// 1. Create an empty hash map.
// 2. Iterate through the array, and for each element, check if it is already in the hash map.
// 3. If it is not in the hash map, add it to the map with a value of 1.
// 4. If it is in the hash map, increment the value associated with that key.
// 5. Once all elements have been processed, iterate through the hash map and return any keys with a value greater than 1, as these are the duplicate elements.

let removeDupes_v2 = (arr: Array<number | string>) => {
    arr.sort();
    let observed = new Map();

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // If the element is not in the map, add it with a value of 1
        if (!observed.has(arr[i])) {
            observed.set(arr[i], 1);
        }
        // If the element is in the map, increment its value
        else {
            let occurrences = observed.get(arr[i]);
            observed.set(arr[i], occurrences++);
        }
    }
    // Create a set to hold the duplicates
    let duplicates = new Set();

    // Iterate through the map and add any keys with a value greater than 1 to the set of duplicates
    for (let [key, value] of observed) {
        if (value > 1) {
            duplicates.add(key);
        }
    }

    return duplicates;
};

console.log(removeDupes_v2(array));
console.log(removeDupes_v2(arrayOfNums));

// This algorithm has a time complexity of O(n) and a space complexity of O(n), where n is the number of elements in the array. This is because we need to iterate through the array once and add each element to the hash map, which takes O(n) time, and the hash map can hold up to n elements, which takes O(n) space.
