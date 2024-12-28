const {calculate} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");


const one =1;
const two =2;
const three =3;


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

    it('check calculate formula text in open and close parenthesis', function () {

        assert.deepStrictEqual(calculate("(s+s2)*s", {
            "s": one,
            "s2": one
        }), two);

    });

    it('check calculate formula text in two or more operation', function () {

        assert.deepStrictEqual(calculate("s2-s/s", {
            "s": one,
            "s2": two
        }), one);

    });

    it('check calculate formula text in factorial', function () {

        assert.deepStrictEqual(calculate("s2!+s!", {
            "s": one,
            "s2": two
        }), three);

    });

});
