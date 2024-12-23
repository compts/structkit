const {multiply} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const one =1;

describe('CJS: multiply method', function () {

    it('check if multiply result', function () {

        assert.deepStrictEqual(multiply(one, one), one);

    });
    it('check if multiply result using curry', function () {

        assert.deepStrictEqual(multiply(one)(one), one);

    });

});
