import {strKebab} from "../../dist/esm/node.esm";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: strKebab method', function () {

    it('check Value', function () {

        assert.strictEqual(strKebab('the fish is goad   with goat-1ss'), 'the-fish-is-goad-with-goat-1ss');

    });
    it('check expected type', async function () {
       
        expectType<string>(strKebab('the fish is goad   with goat-1ss'));
  
    });

});
