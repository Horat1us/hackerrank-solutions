export function timeConversion(s) {
    return s.replace(
        /^((\d{2})(:\d{2}:\d{2}))([PA])M$/,
        (str, time, a, b, c) => {
            if(c === "P") {
                if(a === "12") {
                    return time;
                }
                return (Number(a) + 12).toString().padStart(0, '0') + b;
            }
            if (a === "12") {
                return "00" + b;
            }
            return time;
        }
    );
}

timeConversion.io = [
    [
        ["07:05:45PM"],
        "19:05:45"
    ],
    [
        ["01:20:34PM"],
        "13:20:34"
    ],
    [
        ["12:05:39AM"],
        "00:05:39"
    ],
    [
        ["12:05:39PM"],
        "12:05:39"
    ],

];
