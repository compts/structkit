const {toString} = require("../../src/node.cjs");
const assert = require("assert");

const ten=10;
const one=1;

describe('CJS: toString method', function () {

    it('check if value exist', function () {

        assert.deepStrictEqual(toString(ten), '10');
        assert.deepStrictEqual(toString([
            ten,
            one
        ]), '10,1');

    });
    it('check if value empty', function () {

        assert.deepStrictEqual(toString(null), '');
        assert.deepStrictEqual(toString(), '');

    });

});
