const {calculate} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");


const one =1;
const two =2;


describe('CJS: calculate method', function () {

    it('check calculate formula text', function () {

        assert.deepStrictEqual(calculate("1+1"), two);

    });

    it('check calculate formula text with specific variable', function () {

        assert.deepStrictEqual(calculate("s+s2", {
            "s": one,
            "s2": one
        }), two);

    });

});
