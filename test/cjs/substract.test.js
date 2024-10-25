const {subtract} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const one =1;
const zero = 0;

describe('CJS: subtract method', function () {

    it('check if subtract result', function () {

        assert.deepStrictEqual(subtract(one, one), zero);

    });
    it('check if subtract result using curry', function () {

        assert.deepStrictEqual(subtract(one)(one), zero);

    });

});
