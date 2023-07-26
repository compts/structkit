import {stringKebabCase} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: stringKebabCase method', function () {

    it('check Value', function () {

        assert.strictEqual(stringKebabCase('the fish is goad   with goat-1ss'), 'the-fish-is-goad-with-goat-1ss');

    });
    it('check expected type', async function () {
       
        expectType<string>(stringKebabCase('the fish is goad   with goat-1ss'));
  
    });

});
