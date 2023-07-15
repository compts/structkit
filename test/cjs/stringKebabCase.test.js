
const {stringKebabCase} = require("../../src/node.cjs");
const assert = require("assert");

describe('CJS: stringKebabCase method', function () {

    it('check Value', function () {

        assert.strictEqual(stringKebabCase('the fish is goad   with goat-1ss'), 'the-fish-is-goad-with-goat-1ss');

    });


});
