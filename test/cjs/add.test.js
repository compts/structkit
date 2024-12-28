const {add} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const one =1;
const two = 2;

describe('CJS: add method', function () {

    it('check if add result', function () {

        assert.deepStrictEqual(add(one, one), two);

    });
    it('check if add result using curry', function () {

        assert.deepStrictEqual(add(one)(one), two);

    });

});
