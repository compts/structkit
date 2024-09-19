import {trim} from "../../dist/esm/node.esm";
import assert from 'assert';


describe('ESM: trim method', function () {

    it('trim the string', function () {

        assert.deepStrictEqual(trim(" The fish is goad   with Goat-1ss "), 'The fish is goad   with Goat-1ss');

    });

});
