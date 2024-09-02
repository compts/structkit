const {inc} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const three =3;
const two =2;
const one =1;

describe('CJS: inc method', function () {


    it('return two', function () {

        assert.strictEqual(
            inc(one),
            two
        );

    });
    it('return three', function () {

        assert.strictEqual(
            inc(one, two),
            three
        );

    });


});


