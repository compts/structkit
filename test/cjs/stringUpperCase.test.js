
const {stringUpperCase} = require("../../src/node.cjs");
const assert = require("assert");

describe('CJS: stringUpperCase method', function () {

    it('LowerCase first words', function () {

        assert.strictEqual(stringUpperCase('The fish is goad   with Goat-1ss'), 'THE FISH IS GOAD   WITH GOAT-1SS');

    });

});
