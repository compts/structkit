
import {strLower} from "../../dist/esm/node.esm.mjs";
import assert from 'assert';
import {expectType} from 'tsd';

describe('TS: strLower method', function () {

    it('LowerCase first words', function () {

        assert.strictEqual(strLower('The fish is goad   with Goat-1ss'), 'the fish is goad   with goat-1ss');

    });

    it('check expected type', async function () {
       
        expectType<string>(strLower('The fish is goad   with Goat-1ss'));
  
    });
});
