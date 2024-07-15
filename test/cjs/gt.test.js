const {gt} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const one =1;
const two =2;

describe('CJS: greater than method', function () {

    it('check if greater than value is true', function () {

        assert.strictEqual(gt(two, one), true);

    });

    it('check if not greater than value is false', function () {

        assert.strictEqual(gt(one, two), false);

    });

});
