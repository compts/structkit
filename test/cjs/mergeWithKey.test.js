const {mergeWithKey} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

describe('CJS: mergeWithKey method', function () {

    it('check if repetion is correct', function () {

        assert.deepStrictEqual(mergeWithKey({"s": 1}, {"ss": 1}), {"s": 1,
            "ss": 1});

    });

});
