const {repeat} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const two=2;

describe('CJS: repeat method', function () {

    it('check if repetion is correct', function () {

        assert.strictEqual(repeat("as", two), "asas");

    });

    it('check if repetion is empty', function () {

        assert.strictEqual(repeat(), "");

    });

});
