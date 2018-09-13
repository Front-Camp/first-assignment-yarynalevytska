/**
 * This function should return values of first two elements which sum equals to "base" parameter
 *
 * @param {Array<number>} arr - the an array of numbers
 * @param {number} base - the sum of two elements of array
 * @return {Array<number>} - should return an array of values
 * @example
 * twoSums([1, 2, 4], 3); // [1, 2]
 * twoSums([5, 9, 3], 12); // [9, 3]
 */
const twoSums = (arr, base) => {
  var sums = [];

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) === base) {
                sums.push(arr[i], arr[j]);
                break;
            }
        }
        if (sums.length > 0) {
            break;
        }
    }

    return sums;
};

export default twoSums;
