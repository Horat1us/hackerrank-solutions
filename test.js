import * as assert from "assert";

import * as Skills from "./index";

function describeSkill(name, solutions) {
    describe(name, () => {
        Object.entries(solutions)
            .filter(([, solution]) => ("io" in solution) && "function" === typeof solution)
            .forEach(([title, solve]) => it(title, () => {
                const { io } = solve;
                io.map(([input, output]) => [solve(...input), input, output])
                    .forEach(([result, input, output]) => assert.deepEqual(
                        result,
                        output,
                        `Wrong Answer. ` + Object.entries({ input, output, result })
                            .map(([k, v]) => `${k}: ${JSON.stringify(v)}`)
                            .join(" ")
                    ));
            }));
    });
}

Object.entries(Skills).forEach((args) => describeSkill(...args));
