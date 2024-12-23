const {swap} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const zero = 0;
const two =2;


describe('CJS: swap method', function () {

    it('check swap', function () {

        assert.deepStrictEqual(swap(zero, two, "foo"), "oof");

    });


});
