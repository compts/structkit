import {someValid} from "../../dist/esm/node.esm";
import assert from 'assert';

describe('ESM: someValid method', function () {

    it('check if all value is false then all false', function () {

        assert.deepStrictEqual(someValid(false, false), false);

    });

    it('check if some value is string then false', function () {

        assert.deepStrictEqual(someValid(true, "2"), true);

    });

    it('check if some value is true then true', function () {

        assert.deepStrictEqual(someValid(true, false), true);

    });

    it('check if some array of values is true then false', function () {

        assert.deepStrictEqual(someValid([true], [false]), true);

    });

    it('check if all array of values is false then false', function () {

        assert.deepStrictEqual(someValid([false], [false]), false);

    });

    it('check if some multi array of values is true then true', function () {

        assert.deepStrictEqual(someValid([true], [
            true,
            false
        ]), true);

    });


});
