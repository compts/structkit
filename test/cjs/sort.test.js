const {sort} = require("../../node.cjs");
const assert = require("assert");

const one =1;
const ten=10;

describe('CJS: sort method', function () {

    it('check if sort asc number', function () {

        assert.deepStrictEqual(sort([
            ten,
            one
        ]), [
            one,
            ten
        ]);

    });

    it('check if sort desc number', function () {

        assert.deepStrictEqual(sort([
            ten,
            one
        ], false), [
            ten,
            one
        ]);

    });

    it('check if sort asc string', function () {

        assert.deepStrictEqual(sort([
            'ten',
            'one'
        ]), [
            'one',
            'ten'
        ]);

    });

    it('check if sort desc string', function () {

        assert.deepStrictEqual(sort([
            'ten',
            'one'
        ], false), [
            'ten',
            'one'
        ]);

    });

});
