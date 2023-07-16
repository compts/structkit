
const {has} = require("../../src/node.cjs");
const assert = require("assert");

describe('CJS: has method', function () {

    it('check if json key does exist', function () {

        assert.strictEqual(has({"as": 1}, "as"), true);

    });

});
