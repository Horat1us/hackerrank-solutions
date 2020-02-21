/**
 * @link https://www.hackerrank.com/challenges/extra-long-factorials/problem
 * @param {Number} n
 * @returns {BigInt} {bigint}
 */
export function extraLongFactorials(n) {
    let f = BigInt(n);
    while (--n > 0) {
        f *= BigInt(n);
    }
    return f;
}

extraLongFactorials.io = [
    [25, 15511210043330985984000000],
];
