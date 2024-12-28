import {trimStart} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';


describe('TS: trimStart method', function () {

    it('trimStart the string', function () {

        assert.deepStrictEqual(trimStart(" The fish is goad   with Goat-1ss "), 'The fish is goad   with Goat-1ss ');

    });

    it('check expected type', function () {

        expectType<string>(trimStart(" The fish is goad   with Goat-1ss "));

    });

});
