
const {stringSnakeCase} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

describe('CJS: stringSnakeCase method', function () {

    it('check Value', function () {

        assert.strictEqual(stringSnakeCase('the fish is goad   with goat-1ss'), 'the_fish_is_goad_with_goat_1ss');

    });


});
