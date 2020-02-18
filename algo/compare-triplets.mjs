/**
 * @link https://www.hackerrank.com/challenges/compare-the-triplets/problem
 * @typedef {[number, number, number]} Triplet
 * @param {Triplet} a
 * @param {Triplet} b
 * @returns {[number, number]}
 */
export function compareTriplets(a, b) {
    const result = [0, 0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) {
            continue;
        }
        result[Number(a[i] < b[i])]++;
    }
    return result;
}

compareTriplets.io = [
    [
        [[5, 6, 7,], [3, 6, 10,],],
        [1, 1],
    ],
    [
        [[17, 28, 30,], [99, 16, 8],],
        [2, 1,],
    ]
];
