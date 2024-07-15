const {gte} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const one =1;
const two =2;

describe('CJS: greater than equal method', function () {

    it('check if greater than equal value is true', function () {

        assert.strictEqual(gte(two, one), true);

    });

    it('check if not greater than equal value is false', function () {

        assert.strictEqual(gte(one, two), false);

    });

    it('check if equal value is true', function () {

        assert.strictEqual(gte(two, two), true);

    });

});
