const {lte} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const one =1;
const two =2;

describe('CJS: less than equal method', function () {

    it('check if less than equal value is true', function () {

        assert.strictEqual(lte(one, two), true);

    });

    it('check if not less than equal value is false', function () {

        assert.strictEqual(lte(two, one), false);

    });

    it('check if equal value is true', function () {

        assert.strictEqual(lte(two, two), true);

    });

});
