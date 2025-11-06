
const {strUpper} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

describe('CJS: strUpper method', function () {

    it('LowerCase first words', function () {

        assert.strictEqual(strUpper('The fish is goad   with Goat-1ss'), 'THE FISH IS GOAD   WITH GOAT-1SS');

    });

});
