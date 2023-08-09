
import {stringLowerCase} from "../../dist/esm/node.esm";
import assert from 'assert';

describe('ESM: stringLowerCase method', function () {

    it('LowerCase first words', function () {

        assert.strictEqual(stringLowerCase('The fish is goad   with Goat-1ss'), 'the fish is goad   with goat-1ss');

    });

});
