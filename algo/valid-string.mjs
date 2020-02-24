/**
 * @link https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem
 * @param s
 * @returns {boolean}
 */

export function isValid(s) {
    if (s.length < 2) {
        return true;
    }
    const charMap = {};
    for (let i=0; i < s.length; i++) {
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

isValid.io = [
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
];
