import {trim} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';


describe('TS: trim method', function () {

    it('trim the string', function () {

        assert.deepStrictEqual(trim(" The fish is goad   with Goat-1ss "), 'The fish is goad   with Goat-1ss');

    });

    it('check expected type', function () {

        expectType<string>(trim(" The fish is goad   with Goat-1ss "));

    });

});
