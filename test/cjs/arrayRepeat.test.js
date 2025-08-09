/* eslint-disable no-undefined */
const {arrayRepeat} = require("../../dist/cjs/structkit-full.cjs");
const assert = require("assert");

const two=2;

describe('CJS: arrayRepeat method', function () {

    it('check if repetion is correct', function () {

        assert.deepStrictEqual(arrayRepeat(
            "as",
            two
        ), [
            "as",
            "as"
        ]);

    });

    it('check if repetion is correct even null', function () {

        assert.deepStrictEqual(arrayRepeat(
            null,
            two
        ), [
            null,
            null
        ]);

    });

    it('check if repetion is correct even undefined', function () {

        assert.deepStrictEqual(arrayRepeat(
            undefined,
            two
        ), [
            undefined,
            undefined
        ]);

    });

});
