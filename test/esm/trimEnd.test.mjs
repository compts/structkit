import {trimEnd} from "../../dist/esm/node.esm.mjs";
import assert from 'assert';


describe('ESM: trimEnd method', function () {

    it('trimEnd the string', function () {

        assert.deepStrictEqual(trimEnd(" The fish is goad   with Goat-1ss "), ' The fish is goad   with Goat-1ss');

    });
    it('trimEnd the string with char want to remove', function () {

        assert.deepStrictEqual(trimEnd(" 2The fish is goad2   with Goat-1ss2 ", "2"), ' 2The fish is goad2   with Goat-1ss');

    });

});
