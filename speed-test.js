const arrayToSearch = new Int8Array(1000000)
    .fill(undefined)
    .map(() => Math.round(Math.random() * 10000));

function testPerformance(fn) {

    const begin = new Date;
    console.log(`Begin ${fn.name}: ${begin}`);

    const result = fn(arrayToSearch);
    console.log(`Result: ${result}`);

    const finish = new Date;
    console.log(`Finish: ${finish}`);

    const seconds = Number(finish) - Number(begin);
    console.log(`Time: ${seconds}\n`);
}

[
    function birthdayCakeCandles(input) {
        const arr = Array.from(input).sort((a, b) => a -b);

        let result = 0;

        for (let i = 0; i < arr.length; ++i) {
            if (arr[i] === arr[0]) {
                ++result;
            }
            if (arr[i] !== arr[0]) {
                break;
            }
        }

        return result;
    },
    function birthdayCakeCandlesB(input) {
        let max = input[0];
        let count = 1;
        for (let i = 1; i < input.length; i++) {
            if (input[i] === max) {
                count += 1;
            } else if (input[i] > max) {
                max = input[i];
                count = 1;
            }
        }
        return count;
    },
]
    .forEach(testPerformance);
