const {strSubs} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const two=2;
const one=1;

describe('CJS: strSubs method', function () {

    it('get substr from 1', function () {

        assert.deepStrictEqual(strSubs("fish", one), 'ish');

    });

    it('get substr from 1 to 2', function () {

        assert.deepStrictEqual(strSubs("fish", one, two), 'i');

    });


});
