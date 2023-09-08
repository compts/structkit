
const {map}= require("../../src/node.cjs");
const assert = require("assert");

describe('CJS: map method', function () {

    const one =1;
    const two =2;

    it('get array if map', function () {

        assert.deepStrictEqual(map([
            {"s1": 1},
            {"s1": 2},
            {"s1": 1}
        ], function (value) {

            return value.s1;

        }), [
            one,
            two,
            one
        ]);

    });


});
