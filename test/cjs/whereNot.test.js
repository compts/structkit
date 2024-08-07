const {whereNot} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

describe('CJS: whereNot method', function () {

    it('check if value exist', function () {


        assert.deepStrictEqual(
            whereNot({"s1": 1,
                "s2": 1}, {"s1": 2}),
            {"s1": 1,
                "s2": 1}
        );

        assert.deepStrictEqual(whereNot([
            {"s1": 1,
                "s2": 1},
            {"s1": 2,
                "s2": 2}
        ], {"s1": 2}), [
            {"s1": 1,
                "s2": 1}
        ]);

    });

});


