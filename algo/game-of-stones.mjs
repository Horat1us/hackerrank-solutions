/**
 * @link https://www.hackerrank.com/challenges/game-of-stones-1/problem
 * @param {Number} n
 * @param {String} p1
 * @param {String} p2
 * @returns {string}
 */
export function gameOfStones(n, p1 = "First", p2 = "Second") {
    return (n % 7 < 2) ? p2 : p1;
}

gameOfStones.io = [
    [1, "Second",],
    [2, "First",],
    [3, "First",],
    [4, "First",],
    [5, "First",],
    [6, "First",],
    [7, "Second",],
    [10, "First",],
];
