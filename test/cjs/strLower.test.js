
const {strLower} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

describe('CJS: strLower method', function () {

    it('LowerCase first words', function () {

        assert.strictEqual(strLower('The fish is goad   with Goat-1ss'), 'the fish is goad   with goat-1ss');

    });

});
