/**
 * Find count of max elements in array
 * @link https://www.hackerrank.com/challenges/birthday-cake-candles/problem
 * @param {Array<Number>} array
 * @returns {Number} {number}
 * @author Alexander Letnikow
 */
export function birthdayCakeCandles(array) {
    const max = Math.max(...array);
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === max) {
            count++;
        }
    }
    return count;
}

/**
 * 1.1x slower
 * @link https://www.hackerrank.com/challenges/birthday-cake-candles/problem
 * @param {Array<Number>} array
 * @param {Number} start
 * @returns {Number} {number}
 */
export function birthdayCakeCandlesRecursive(array, start = 0) {
    let max = array[start];
    let count = Number(max !== undefined);
    for (let i = start + 1, item = array[i]; item !== undefined; item = array[++i]) {
        if (item === max) {
            count += 1;
        } else if (item > max) {
            return birthdayCakeCandlesRecursive(array, i);
        }
    }
    return count;
}

/**
 * 1.5x slower
 * @link https://www.hackerrank.com/challenges/birthday-cake-candles/problem
 * @param {Array<Number>} array
 * @returns {Number} {number}
 */
export function birthdayCakeCandlesFunctional(array) {
    const max = Math.max(...array);
    return array.filter((n) => n === max).length;
}

birthdayCakeCandlesRecursive.io = birthdayCakeCandlesFunctional.io = birthdayCakeCandles.io = [
    [[3, 2, 1, 3], 2],
    [[], 0],
];
