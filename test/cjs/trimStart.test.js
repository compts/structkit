const {trimStart} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");


describe('CJS: trimStart method', function () {

    it('trimStart the string', function () {

        assert.deepStrictEqual(trimStart(" The fish is goad   with Goat-1ss "), 'The fish is goad   with Goat-1ss ');

    });

    it('trimStart the string with char want to remove', function () {

        assert.deepStrictEqual(trimStart(" 2The fish is goad2   with Goat-1ss2 ", "2"), 'The fish is goad2   with Goat-1ss2 ');

    });

});
