/**
 * Validates string
 * @link https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem
 * @param {String} s
 * @returns {boolean}
 */
export function isValid(s) {
    if (s.length < 2) {
        return true;
    }
    const charMap = {};
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        charMap[char] = (char in charMap) ? charMap[char] + 1 : 1;
    }
    const countMap = new Map;
    for (let count of Object.values(charMap)) {
        countMap.set(count, (countMap.get(count) || 0) + 1);
    }
    if (countMap.size !== 2) {
        return countMap.size === 1;
    }

    let single, multiple;
    for (let [c, cc] of countMap.entries()) {
        if (cc === 1) {
            single = c;
        } else {
            multiple = c;
        }
    }
    return ((single === 1) || Math.abs(multiple - single) === 1);
}

/**
 * 2x faster
 * @param {String} s
 * @returns {boolean}
 */
export function isValidO(s) {
    if (s.length < 2) {
        return true;
    }
    const cc = Object.entries(
        s.split("")
            .reduce(
                (counts, char) => {
                    counts[char.charCodeAt(0) - 97]++;
                    return counts;
                },
                Array(25).fill(0)
            )
            .filter((c) => c !== 0)
            .reduce((o, c) => {
                o[c] = (o[c] || 0) + 1;
                return o;
            }, {})
    )
        .sort((a, b) => a[1] - b[1]);
    return (cc.length === 1)
        || (cc.length === 2 && (cc[0][1] === 1) && (
            (cc[0][0] === '1')
            || Math.abs(cc[0][0] - cc[1][0]) === 1
        ));
}

isValidO.io = isValid.io = [
    [
        "aabbcd",
        false
    ],
    [
        "aabbccddeefghi",
        false
    ],
    [
        "a",
        true
    ],
    [
        "aaaabbcc",
        false
    ],
    [
        "aabbc",
        true
    ],
    [
        "aaaaabc",
        false
    ],
    [
        "xxxaabbccrry",
        false
    ],
    [
        "ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd",
        true
    ],
    [
        "abbac",
        true
    ],
    [
        "abcdefghhgfedecba",
        true
    ],
    [
        "abbccc",
        false
    ],
    [
        "abc",
        true,
    ],
    [
        "aabbc",
        true,
    ]
];
