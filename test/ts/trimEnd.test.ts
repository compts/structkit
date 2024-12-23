import {trimEnd} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: trimEnd method', function () {

    it('trimEnd the string', function () {

        assert.deepStrictEqual(trimEnd(" The fish is goad   with Goat-1ss "), ' The fish is goad   with Goat-1ss');

    });

    it('check expected type', function () {

        expectType<string>(trimEnd(" The fish is goad   with Goat-1ss "));

    });

});
