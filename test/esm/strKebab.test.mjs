import {strKebab} from "../../dist/esm/node.esm.mjs";
import assert from 'assert';

describe('ESM: strKebab method', function () {

    it('check Value', function () {

        assert.strictEqual(strKebab('the fish is goad   with goat-1ss'), 'the-fish-is-goad-with-goat-1ss');

    });


});
