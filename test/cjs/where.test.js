const {where, lt} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const one = 1;

describe('CJS: where method', function () {

    it('check if value exist', function () {


        assert.deepStrictEqual(
            where({"s1": 1,
                "s2": 1}, {"s1": 1}),
            {"s1": 1,
                "s2": 1}
        );

        assert.deepStrictEqual(where([
            {"s1": 1,
                "s2": 1},
            {"s1": 2,
                "s2": 2}
        ], {"s1": 1}), [
            {"s1": 1,
                "s2": 1}
        ]);


    });

    it('check if value is less', function () {

        assert.deepStrictEqual(where(
            [
                {"d": 1},
                {"d": 2}
            ],
            {"d": lt(one)}
        ), [
            {
                "d": 2
            }
        ]);

    });

});


