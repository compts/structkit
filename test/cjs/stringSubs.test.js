const {stringSubs} = require("../../src/node.cjs");
const assert = require("assert");

const two=2;
const one=1;

describe('CJS: stringSubs method', function () {

    it('get substr from 1', function () {

        assert.deepStrictEqual(stringSubs("fish", one), 'ish');

    });

    it('get substr from 1 to 2', function () {

        assert.deepStrictEqual(stringSubs("fish", one, two), 'i');

    });


});
