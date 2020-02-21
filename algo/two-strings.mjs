export function twoStrings(s1, s2) {
    let arr1 = s1.split("\n");
    let arr2 = s2.split("\n");
    let result = new Array(arr1.length).fill();

    for (let i = 0; i < arr1.length; ++i) {

        for (let j = 0; j < arr2[i].length; ++j) {

            if (arr1[i].includes(arr2[i][j])) {
                result[i] = "YES";
                break;
            }
            result[i] = "NO";
        }
    }
    return(result.join("\n"));
}

twoStrings.io = [
    [
        ["awdawdawd\nfthfthfth", "ertertert\ntyutyutyu"],
        `NO\nYES`
    ],
];
