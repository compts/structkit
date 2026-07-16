const {reverse} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const zero = 0;
const two =2;


describe('CJS: reverse method', function () {

    it('check reverse string', function () {

        assert.deepStrictEqual(reverse("foo"), "oof");

    });

    it('check reverse list', function () {

        assert.deepStrictEqual(reverse([
            zero,
            two
        ]), [
            two,
            zero
        ]);

    });


});
