const {selectInData} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

describe('CJS: selectInData method', function () {

    it('check if repetion is correct', function () {

        assert.deepStrictEqual(selectInData({"ss": "s"}, {"s": 2}), {
            'ss': 2
        });

    });

});
