import {trim} from "../../dist/esm/node.esm.js";
import assert from 'assert';


describe('ESM: trim method', function () {

    it('trim the string', function () {

        assert.deepStrictEqual(trim(" The fish is goad   with Goat-1ss "), 'The fish is goad   with Goat-1ss');

    });

    it('trim the string and remove specific value in string', function () {

        assert.deepStrictEqual(trim(" The fish is goad   with Goat-1ss ", "ss"), 'The fish is goad   with Goat-1');

    });

    it('trim the string and remove specific value in regexp', function () {

        assert.deepStrictEqual(trim(" The fish is goad   with Goat-1ss ", /(ss)/g), 'The fish is goad   with Goat-1');

    });

});
