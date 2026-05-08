
import {strLower} from "../../dist/esm/node.esm.js";
import assert from 'assert';

describe('ESM: strLower method', function () {

    it('LowerCase first words', function () {

        assert.strictEqual(strLower('The fish is goad   with Goat-1ss'), 'the fish is goad   with goat-1ss');

    });

});
