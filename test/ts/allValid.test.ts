import {allValid} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: allValid method', function () {

    it('check if all value is true then true', function () {

        assert.deepStrictEqual(allValid(true, true), true);

    });
    it('check if some value is true then false', function () {

        assert.deepStrictEqual(allValid(true, false), false);

    });

    it('check expected type', function () {

        expectType<boolean>(allValid(true, false));

    });
});
