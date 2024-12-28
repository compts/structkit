import {trimEnd} from "../../dist/esm/node.esm";
import assert from 'assert';


describe('ESM: trimEnd method', function () {

    it('trimEnd the string', function () {

        assert.deepStrictEqual(trimEnd(" The fish is goad   with Goat-1ss "), ' The fish is goad   with Goat-1ss');

    });

});
