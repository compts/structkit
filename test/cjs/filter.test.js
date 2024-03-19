
const {filter}= require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

describe('CJS: filter method', function () {

    const one =1;

    it('check array if filter', function () {

        assert.deepStrictEqual(filter([
            {"s1": 1},
            {"s1": 2},
            {"s1": 1}
        ], function (key, value) {

            return value.s1 === one;

        }), [
            {"s1": 1},
            {"s1": 1}
        ]);

    });


});
