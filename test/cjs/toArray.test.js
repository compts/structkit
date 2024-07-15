const {toArray} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const ten=10;

describe('CJS: toArray method', function () {

    it('check if value exist', function () {

        assert.deepStrictEqual(toArray(ten), [ten]);
        assert.deepStrictEqual(toArray([ten]), [ten]);

    });


});
