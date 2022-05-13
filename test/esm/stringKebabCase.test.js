import {stringKebabCase} from "../../dist/esm/node.esm";
import assert from 'assert';

describe('CJS: stringKebabCase method', function () {

    it('check Value', function () {

        assert.strictEqual(stringKebabCase('the fish is goad   with goat-1ss'), 'the-fish-is-goad-with-goat-1ss');

    });


});
