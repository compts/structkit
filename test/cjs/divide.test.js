const {divide} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const one =1;

describe('CJS: divide method', function () {

    it('check if divide result', function () {

        assert.deepStrictEqual(divide(one, one), one);

    });
    it('check if divide result using curry', function () {

        assert.deepStrictEqual(divide(one)(one), one);

    });

});
