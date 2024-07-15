import {someValid} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

describe('ESM: someValid method', function () {

    it('check if all value is false then all false', function () {

        assert.deepStrictEqual(someValid(false, false), false);

    });
    it('check if some value is true then true', function () {

        assert.deepStrictEqual(someValid(true, false), true);

    });
    it('check expected type', function () {

        expectType<boolean>(someValid(true, false));

    });
});
