const {trim} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");


describe('CJS: trim method', function () {

    it('trim the string', function () {

        assert.deepStrictEqual(trim(" The fish is goad   with Goat-1ss "), 'The fish is goad   with Goat-1ss');

    });

});
