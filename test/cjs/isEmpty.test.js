const {isEmpty} = require("../../node.cjs");
const assert = require("assert");

describe('CJS: isEmpty method', function () {

    it('check if value empty string true', function () {

        assert.deepStrictEqual(isEmpty(''), true);

    });

    it('check if value empty string false', function () {

        assert.deepStrictEqual(isEmpty('hello word'), false);

    });

    it('check if value empty array true', function () {

        assert.deepStrictEqual(isEmpty([]), true);

    });

    it('check if value empty array false', function () {

        assert.deepStrictEqual(isEmpty([
            '1',
            '2'
        ]), false);

    });


});
