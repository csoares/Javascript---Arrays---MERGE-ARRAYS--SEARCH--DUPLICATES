// test for mergeArrays.js
const mergeArrays = require("./ex1");

test("merges two sorted arrays into one sorted array", () => {
  expect(mergeArrays([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
});

// test for binarySearch.js
const binarySearch = require("./ex2");

test("finds the index of the target value in a sorted array", () => {
  expect(binarySearch([1, 3, 5, 7, 9], 5)).toBe(2);
  expect(binarySearch([1, 3, 5, 7, 9], 9)).toBe(4);
  expect(binarySearch([1, 3, 5, 7, 9], 6)).toBe(-1);
});

// test for removeDuplicates.js
const removeDuplicates = require("./ex3");

test("removes duplicate values from the array", () => {
  expect(removeDuplicates([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
});

// test for union.js
const union = require("./ex4");

test("finds the union of two arrays", () => {
  expect(union([1, 2, 3, 4], [2, 3, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
});

// test for mergeAndRemoveDuplicates.js
const mergeAndRemoveDuplicates = require("./ex5");

test("merges two arrays and removes duplicates", () => {
  expect(mergeAndRemoveDuplicates([1, 2, 3], [2, 3, 4])).toEqual([1, 2, 3, 4]);
});

// test for mergeKSortedArrays.js
const mergeKSortedArrays = require("./ex6");

test("merges an array of sorted arrays into one sorted array", () => {
  expect(
    mergeKSortedArrays([
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ])
  ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

// test for linearSearch.js
const linearSearch = require("./ex7");

test("finds the index of the target value in an array", () => {
  expect(linearSearch([1, 3, 5, 7, 9], 5)).toBe(2);
  expect(linearSearch([1, 3, 5, 7, 9], 6)).toBe(-1);
});

// test for findDuplicates.js
const findDuplicates = require("./ex8");

test("finds duplicate values in two arrays", () => {
  expect(findDuplicates([1, 2, 3, 4], [2, 3, 5, 6])).toEqual([2, 3]);
});

// test for frequencyCounter.js
const frequencyCounter = require("./ex9");

test("counts the frequency of each value in an array", () => {
  expect(frequencyCounter([1, 2, 2, 3, 3, 3], 1)).toEqual(1);
  expect(frequencyCounter([1, 2, 2, 3, 3, 3], 2)).toEqual(2);
  expect(frequencyCounter([1, 2, 2, 3, 3, 3], 3)).toEqual(3);
  expect(frequencyCounter([1, 2, 2, 3, 3, 3], 4)).toEqual(-1);
});

// test for arrayPairSum.js
const arrayPairSum = require("./ex10");

test("finds pairs of numbers that add up to the target sum", () => {
  expect(arrayPairSum([1, 2, 3, 4], 5)).toEqual([
    [1, 4],
    [2, 3],
  ]);
});

// test for intersection.js
const intersection = require("./ex11");

test("finds the intersection of two arrays", () => {
  expect(intersection([1, 2, 3, 4], [2, 3, 5, 6])).toEqual([2, 3]);
});
