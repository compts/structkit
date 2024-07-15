
const {stringCapitalize} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

describe('CJS: stringCapitalize method', function () {

    it('Capitalize first words', function () {

        assert.strictEqual(stringCapitalize('the fish is goad   with goat-1ss'), 'The fish is goad   with goat-1ss');

    });

    it('Capitalize all words', function () {

        assert.strictEqual(stringCapitalize('the fish is goad   with goat-1ss', 'all'), 'The Fish Is Goad   With Goat-1ss');

    });

});
