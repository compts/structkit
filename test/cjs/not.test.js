const {not, where} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

describe('CJS: not method', function () {

    it('check if value exist in where', function () {


        assert.deepStrictEqual(
            where(not({"s1": 2}), {"s1": 1,
                "s2": 1}),
            {"s1": 1,
                "s2": 1}
        );

        assert.deepStrictEqual(where(not({"s1": 2}), [
            {"s1": 1,
                "s2": 1},
            {"s1": 2,
                "s2": 2}
        ]), [
            {"s1": 1,
                "s2": 1}
        ]);

    });

});


