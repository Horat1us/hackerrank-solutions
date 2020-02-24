let s1 = new Array(10000).fill(undefined).map(() => {return String.fromCharCode(Math.round(Math.random() * (200 - 40) + 40))}).join("");
let s2 = new Array(10000).fill(undefined).map(() => {return String.fromCharCode(Math.round(Math.random() * (200 - 40) + 40))}).join("");

function testPerformance(fn) {

    const begin = new Date;
    console.log(`Begin ${fn.name}: ${begin}`);

    const result = fn(s1, s2);
    console.log(`Result: ${result}`);

    const finish = new Date;
    console.log(`Finish: ${finish}`);

    const seconds = Number(finish) - Number(begin);
    console.log(`Time: ${seconds}\n`);
}

[
    function twoStrings() {
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
    },
    function twoStrings2(s1, s2) {
        s2 = new Set(s2.split(""));
        return Array.from(new Set(s1.split(""))).some((c) => s2.has(c)) ? "YES" : "NO";
    },
]
    .forEach(testPerformance);
