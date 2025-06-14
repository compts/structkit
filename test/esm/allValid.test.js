import {allValid} from "../../dist/esm/node.esm";
import assert from 'assert';

describe('ESM: allValid method', function () {

    it('check if all value is true then true', function () {

        assert.deepStrictEqual(allValid(true, true), true);

    });
    it('check if some value is true then false', function () {

        assert.deepStrictEqual(allValid(true, false), false);

    });

    it('check if some value is string then false', function () {

        assert.deepStrictEqual(allValid(true, "2"), false);

    });

    it('check if some array of values is true then false', function () {

        assert.deepStrictEqual(allValid([true], [false]), false);

    });

    it('check if some array of values is true then true', function () {

        assert.deepStrictEqual(allValid([true], [true]), true);

    });

    it('check if some multi array of values is true then true', function () {

        assert.deepStrictEqual(allValid([true], [
            true,
            true
        ]), true);

    });


});
