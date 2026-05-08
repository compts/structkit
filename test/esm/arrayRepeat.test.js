/* eslint-disable no-undefined */
import {arrayRepeat} from "../../dist/esm/node.esm.js";
import assert from 'assert';

const two=2;

describe('ESM: arrayRepeat method', function () {

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
