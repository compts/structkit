
const {stringCamelCase} = require("../../node.cjs");
const assert = require("assert");

describe('CJS: stringCamelCase method', function () {

    it('check Value', function () {

        assert.strictEqual(stringCamelCase("the fish is goad   with goat-1ss"), 'theFishIsGoadWithGoat1ss');

    });


});
