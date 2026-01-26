const {once} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const one =1;

describe('CJS: once method', function () {

    it('check if once passing value is not function', function () {

        assert.deepStrictEqual(once(one)(one), one);

    });

});
