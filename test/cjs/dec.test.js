const {dec} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const two =2;
const one =1;
const zero =0;

describe('CJS: dec method', function () {


    it('return two', function () {

        assert.strictEqual(
            dec(one),
            zero
        );

    });
    it('return three', function () {

        assert.strictEqual(
            dec(one, two),
            -one
        );

    });


});


