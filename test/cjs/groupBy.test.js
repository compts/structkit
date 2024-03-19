
const {groupBy}= require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

describe('CJS: groupBy method', function () {


    it('Group your data', function () {

        assert.deepStrictEqual(groupBy([
            {"s1": 1},
            {"s1": 2},
            {"s1": 1}
        ], function (value) {

            return value.s1;

        }), {"1": [
            {"s1": 1},
            {"s1": 1}
        ],

        // eslint-disable-next-line indent-legacy
        "2": [{"s1": 2}]});

    });


});
