
const {strKebab} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

describe('CJS: strKebab method', function () {

    it('check Value', function () {

        assert.strictEqual(strKebab('the fish is goad   with goat-1ss'), 'the-fish-is-goad-with-goat-1ss');

    });


});
