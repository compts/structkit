const {arrayRepeat} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const two=2;

describe('CJS: arrayRepeat method', function () {

    it('check if repetion is correct', function () {

        assert.deepStrictEqual(arrayRepeat(
            "as",
            two
        ), [
            "as",
            "as"
        ]);

    });

});
