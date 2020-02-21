/**
 * Given a time in -hour AM/PM format, convert it to military (24-hour) time.
 *
 * @link https://www.hackerrank.com/challenges/time-conversion/problem
 * @link https://en.wikipedia.org/wiki/12-hour_clock
 *
 * @param {String} s 12-hour format
 * @returns {String} 24-hour format
 */
export function timeConversionRegExp(s) {
    return s.replace(
        /^((\d{2})(:\d{2}:\d{2}))([PA])M$/,
        (str, time, hours, rest, period) => {
            if (period === (hours === "12" ? "P" : "A")) {
                return time;
            }
            return (period === "A" ? "00" : parseInt(hours, 10) + 12) + rest;
        }
    );
}

/**
 * Fastest Solution
 * @param {String} s 12-hour format
 * @returns {String} 24-hour format
 */
export function timeConversion(s) {
    const hours = parseInt(s.slice(0, 2), 10);
    const period = s.slice(-2, -1);
    if (period === (hours === 12 ? "P" : "A")) {
        return s.slice(0, 8);
    }
    return (period === "A" ? "00" : hours + 12) + s.slice(2, 8);
}

timeConversionRegExp.io = timeConversion.io = [
    ["07:05:45PM", "19:05:45"],
    ["01:20:34PM", "13:20:34"],
    ["12:05:39AM", "00:05:39"],
    ["12:05:39PM", "12:05:39"],
];
