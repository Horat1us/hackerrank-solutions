import * as assert from "assert";

import * as Skills from "./index";

function describeSkill(name, solutions) {
    describe(name, () => {
        Object.entries(solutions)
            .filter(([, solution]) => ("io" in solution) && "function" === typeof solution)
            .forEach(([title, solve]) => it(title, () => {
                const { io } = solve;
                io
                    .map(([input, output]) => [
                        (Array.isArray(input) && solve.length > 1) ? solve(...input) : solve(input),
                        input, output,
                    ])
                    .map((rio) => rio.map((io) => (typeof io === "bigint") ? io.toString() : io))
                    .forEach(([result, input, output]) => {
                        const message = `Wrong Answer. ` + Object.entries({ input, output, result })
                            .map(([k, v]) => [
                                k,
                                (typeof v === "bigint") ? v.toString() : JSON.stringify(v)
                            ])
                            .map(kv => kv.join(": "))
                            .join(" ");
                        assert.deepEqual(result, output, message);
                    });
            }));
    });
}

Object.entries(Skills).forEach((args) => describeSkill(...args));
