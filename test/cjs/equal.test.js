const {equal} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

describe('CJS: equal method', function () {

    it('check if equal value is true', function () {

        assert.strictEqual(equal("as", "as"), true);

    });

    it('check if not equal value is false', function () {

        assert.strictEqual(equal("as", "as1"), false);

    });

});
