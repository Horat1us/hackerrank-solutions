/**
 * @link https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem
 * @param {Array<Number>} scores
 * @param {Array<Number>} alice
 * @returns {Array<Number>}
 */
export function climbingLeaderBoard(scores, alice) {
    const leaderBoard = Array.from(new Set(scores)).reverse();
    return alice.map((score) => {
        while (score >= leaderBoard[0]) {
            leaderBoard.shift();
        }
        return leaderBoard.length + 1;
    });
}

climbingLeaderBoard.io = [
    [
        [[100, 100, 50, 40, 40, 20, 10,], [5, 25, 50, 120,],],
        [6, 4, 2, 1,],
    ],
    [
        [[100, 90, 90, 80, 75, 60,], [50, 65, 77, 90, 102,],],
        [6, 5, 4, 2, 1,],
    ],
];
