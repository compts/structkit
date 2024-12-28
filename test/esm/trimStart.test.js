import {trimStart} from "../../dist/esm/node.esm";
import assert from 'assert';


describe('ESM: trimStart method', function () {

    it('trimStart the string', function () {

        assert.deepStrictEqual(trimStart(" The fish is goad   with Goat-1ss "), 'The fish is goad   with Goat-1ss ');

    });

});
