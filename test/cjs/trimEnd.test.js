const {trimEnd} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");


describe('CJS: trimEnd method', function () {

    it('trimEnd the string', function () {

        assert.deepStrictEqual(trimEnd(" The fish is goad   with Goat-1ss "), ' The fish is goad   with Goat-1ss');

    });

});
