/**
 * Calculate and print the sum of the elements in an array
 * keeping in mind that some of those integers may be quite large.
 *
 * @link https://www.hackerrank.com/challenges/a-very-big-sum/problem
 * @author Alexander Letnikow
 *
 * @param {Array<Number>} array
 * @returns {BigInt}
 */
export function aVeryBigSum(array) {
    let sum = BigInt(array.length > 0 ? array[0] : 0);
    for (let i = 1; i < array.length; i++) {
        sum += BigInt(array[i]);
    }
    return sum;
}

aVeryBigSum.io = [
    [
        [1000000001, 1000000002, 1000000003, 1000000004, 1000000005,],
        5000000015n,
    ],
    [
        [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
        Number.MAX_SAFE_INTEGER * 2,
    ]
];
