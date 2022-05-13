
const {stringCapitalize} = require("../../node.cjs");
const assert = require("assert");

describe('CJS: stringCapitalize method', function () {

    it('check Value', function () {

        assert.strictEqual(stringCapitalize('the fish is goad   with goat-1ss'), 'The Fish Is Goad   With Goat-1ss');

    });


});
