/**
 * Given a string, need to count, how many uniq substring .
 *
 * @link https://www.hackerrank.com/challenges/string-construction/problem
 *
 * @param {String} s line wrap string
 * @returns {Array}
 */

export function stringConstruction(s) {
    let arr = s.split("\n");
    for (let i = 0; i < arr.length; ++i) {
        arr[i] = new Set(arr[i].split("")).size;
    }
    return arr;
}

stringConstruction.io = [
    [
        "qwertyuiop\nqwertqwert",
        [10, 5]
    ],
    [
        "abcabc\nabcde\n12341234",
        [3, 5, 4]
    ]
];
