
const {isExact}= require("../../src/node.cjs");
const assert = require("assert");

describe('CJS: isExact method', function () {

    it('check if json key exist', function () {

        assert.strictEqual(isExact({"test": 11,
            "test2": 11}, {"test2": 11}, true), true);

    });


});
