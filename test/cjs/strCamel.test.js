
const {strCamel} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

describe('CJS: strCamel method', function () {

    it('check Value', function () {

        assert.strictEqual(strCamel("the fish is goad   with goat-1ss"), 'theFishIsGoadWithGoat1ss');

    });


});
